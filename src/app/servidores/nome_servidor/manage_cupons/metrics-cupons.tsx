import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Percent, RotateCcw, Ticket } from 'lucide-react'

const metrics = [
  { title: "Cupons", value: "10", icon: Ticket, color: "text-blue-500" },
  { title: "Vezes Utilizadas", value: "1.205", icon: RotateCcw, color: "text-purple-500" },
  { title: "Mais Utilizado", value: "FALL10", icon: TrendingUp, color: "text-green-500" },
  { title: "Maior Desconto", value: "50%", icon: Percent, color: "text-yellow-500" },
]

export default function MetricsCupons() {
  return (
    <>
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm md:text-base text-gray-400">{metric.title}</CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-lg md:text-2xl font-bold">{metric.value}</div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

