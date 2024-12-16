"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jul", newCustomers: 239, returningCustomers: 380 },
  { month: "Aug", newCustomers: 739, returningCustomers: 380 },
  { month: "Set", newCustomers: 829, returningCustomers: 380 },
  { month: "Out", newCustomers: 2379, returningCustomers: 380 },
  { month: "Nov", newCustomers: 2439, returningCustomers: 380 },
  { month: "Dez", newCustomers: 2339, returningCustomers: 11380 },

]

export default function CustomerChart() {

  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">Novos vs Clientes Recorrentes</CardTitle>
      </CardHeader>
      <CardContent className="pl-0 pb-2">
        <ChartContainer
          config={{
            returningCustomers: {
              label: "Clientes Recorrentes",
              color: "hsl(var(--chart-3))",
            },
            newCustomers: {
              label: "Novos Clientes",
              color: "hsl(var(--chart-4))",
            },
          }}
          className=""
        >
            <BarChart data={data} >
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent className="w-36" />} cursor={false}/>
              <Bar dataKey="newCustomers" fill="var(--color-newCustomers)" stackId="a" />
              <Bar dataKey="returningCustomers" fill="var(--color-returningCustomers)" stackId="a" />
              
            </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

