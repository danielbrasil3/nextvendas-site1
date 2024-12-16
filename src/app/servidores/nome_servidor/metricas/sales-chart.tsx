"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
]

export default function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Vendas Mensais</CardTitle>
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
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" strokeWidth={2} />
            </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

