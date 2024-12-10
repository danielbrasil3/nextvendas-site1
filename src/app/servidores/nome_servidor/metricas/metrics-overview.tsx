import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, DollarSign, ShoppingCart, Users } from 'lucide-react'

const metrics = [
  { title: "Receita", value: "R$ 45.231,89", icon: DollarSign, color: "text-blue-500" },
  { title: "Clientes", value: "1.205", icon: Users, color: "text-purple-500" },
  { title: "Vendas", value: "2.584", icon: ShoppingCart, color: "text-green-500" },
  { title: "Ticket Médio", value: "R$ 175,52", icon: BarChart2, color: "text-yellow-500" },
]

export default function MetricsOverview() {
  return (
    <>
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

