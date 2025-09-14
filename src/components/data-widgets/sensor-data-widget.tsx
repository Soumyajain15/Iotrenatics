"use client";

import { useState, useEffect } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Thermometer, Wind, Droplets } from "lucide-react";

type SensorData = {
  name: string;
  value: number;
  unit: string;
};

const initialData: SensorData[] = [
  { name: "Temp", value: 22.5, unit: "°C" },
  { name: "Humidity", value: 45, unit: "%" },
  { name: "Airflow", value: 1.2, unit: "m/s" },
];

export function SensorDataWidget() {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prevData => prevData.map(d => ({...d, value: Math.max(0, d.value + (Math.random() - 0.5) * (d.value * 0.05)) })));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

  return (
    <Card className="flex-grow">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Environmental Sensors</CardTitle>
        <CardDescription className="text-xs">Live readings from facility #3</CardDescription>
      </CardHeader>
      <CardContent className="h-[120px] pb-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 20, left: -20, bottom: 0 }}>
             <XAxis type="number" hide />
             <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
             <Tooltip
                cursor={{ fill: 'hsl(var(--secondary))' }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  fontSize: '12px'
                }}
                formatter={(value: number, name, props) => [`${value.toFixed(1)} ${props.payload.unit}`, name]}
              />
            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
