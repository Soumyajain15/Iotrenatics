"use client";

import { useState, useEffect } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer, PolarAngleAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap } from "lucide-react";

type PowerData = {
  name: string;
  value: number;
  fill: string;
};

const initialValue = 72.8;

export function PowerUsageWidget() {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(prevValue => Math.max(50, Math.min(95, prevValue + (Math.random() - 0.5) * 3)));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const data: PowerData[] = [{ name: 'Power', value: value, fill: 'hsl(var(--primary))' }];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Power Usage Efficiency</CardTitle>
        <CardDescription className="text-xs">Aggregate of all factory sensors</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center pb-0">
        <div className="h-[120px] w-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
                innerRadius="80%" 
                outerRadius="100%" 
                data={data} 
                startAngle={90} 
                endAngle={-270}
                barSize={12}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                dataKey="value"
                angleAxisId={0}
                data={data}
                cornerRadius={10}
              />
               <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold font-headline fill-foreground"
                >
                    {value.toFixed(1)}%
                </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center text-xs text-muted-foreground pt-2">
            <Zap className="h-3 w-3 mr-1 text-green-500" />
            <span>Optimal Range</span>
        </div>
      </CardContent>
    </Card>
  );
}
