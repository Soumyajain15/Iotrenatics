"use client";

import { useState, useEffect } from "react";
import { Area, AreaChart, ResponsiveContainer, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse } from "lucide-react";

type DataPoint = {
  time: number;
  hr: number;
};

const initialData: DataPoint[] = Array.from({ length: 30 }, (_, i) => ({
  time: Date.now() - (30 - i) * 1000,
  hr: 60 + Math.random() * 5,
}));

export function HeartRateWidget() {
  const [data, setData] = useState<DataPoint[]>(initialData);
  const [currentHeartRate, setCurrentHeartRate] = useState(data[data.length - 1].hr);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const lastHr = prevData[prevData.length - 1].hr;
        const newHr = Math.max(55, Math.min(120, lastHr + (Math.random() - 0.5) * 4));
        const newDataPoint = { time: Date.now(), hr: newHr };
        
        setCurrentHeartRate(newHr);

        const newDataSet = [...prevData, newDataPoint];
        return newDataSet.length > 30 ? newDataSet.slice(1) : newDataSet;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Real-time Heart Rate</CardTitle>
        <HeartPulse className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-headline">{Math.round(currentHeartRate)} BPM</div>
        <p className="text-xs text-muted-foreground">Live data from sensor array</p>
        <div className="h-[120px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 10, left: -30, bottom: 0 }}>
              <defs>
                <linearGradient id="colorHr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <YAxis domain={['dataMin - 10', 'dataMax + 10']} hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  fontSize: '12px'
                }}
                labelFormatter={(label) => new Date(label).toLocaleTimeString()}
                formatter={(value: number) => [Math.round(value), 'HR']}
              />
              <Area type="monotone" dataKey="hr" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorHr)" strokeWidth={2} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
