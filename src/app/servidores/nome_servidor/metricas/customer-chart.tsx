"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", newCustomers: 400, returningCustomers: 240 },
  { month: "Feb", newCustomers: 300, returningCustomers: 139 },
  { month: "Mar", newCustomers: 200, returningCustomers: 980 },
  { month: "Apr", newCustomers: 278, returningCustomers: 390 },
  { month: "May", newCustomers: 189, returningCustomers: 480 },
  { month: "Jun", newCustomers: 239, returningCustomers: 380 },
]

export default function CustomerChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Novos vs. Clientes Recorrentes</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            newCustomers: {
              label: "Novos Clientes",
              color: "hsl(var(--chart-4))",
            },
            returningCustomers: {
              label: "Clientes Recorrentes",
              color: "hsl(var(--chart-3))",
            },
          }}
          className=""
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="newCustomers" fill="var(--color-newCustomers)" stackId="a" />
              <Bar dataKey="returningCustomers" fill="var(--color-returningCustomers)" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

