import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, DollarSign, ShoppingCart, Users } from 'lucide-react'

const metrics = [
  { title: "Cupons", value: "10", icon: DollarSign, color: "text-blue-500" },
  { title: "Vezes Utilizadas", value: "1.205", icon: Users, color: "text-purple-500" },
  { title: "Mais Utilizado", value: "FALL10", icon: ShoppingCart, color: "text-green-500" },
  { title: "Maior Desconto", value: "50%", icon: BarChart2, color: "text-yellow-500" },
]

export default function MetricsCupons() {
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

