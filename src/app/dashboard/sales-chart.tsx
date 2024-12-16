"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jul", sales: 5500 },
  { month: "Aug", sales: 6500 },
  { month: "Set", sales: 2500 },
  { month: "Out", sales: 1500 },
  { month: "Nov", sales: 700 },
  { month: "Dez", sales: 1500 },
]

export default function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-center">Vendas Mensais</CardTitle>
      </CardHeader>
      <CardContent className="pl-0 pb-2">
        <ChartContainer
          config={{
            sales: {
              label: "Vendas",
              color: "hsl(var(--chart-1))",
            },
          }}
          className=""
        >
            <AreaChart data={data}>
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(36, 99, 235, 0.9)" />
                  <stop offset="100%" stopColor="rgba(36, 99, 235, 0.2)" />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area 
                type="monotone" 
                dataKey="sales" 
                stroke="var(--color-sales)" 
                strokeWidth={2} 
                fill="url(#blueGradient)" 
              />
            </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

