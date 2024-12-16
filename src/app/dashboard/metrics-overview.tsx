import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownLeft, ArrowUpRight, BarChart2, DollarSign, ShoppingCart, Users } from 'lucide-react'

const metrics = [
  { title: "Clientes", value: "1.205", comparation: {value: '+22.3', text: 'último mês', color: "text-green-500", icon: ArrowUpRight}, icon: Users, color: "text-purple-500" },
  { title: "Vendas Hoje", value: "2.584", comparation: {value: '+45.3', text: 'último dia', color: "text-green-500", icon: ArrowUpRight}, icon: ShoppingCart, color: "text-green-500" },
  { title: "Total Vendido", value: "R$ 45.231,89", comparation: {value: '+12.3', text: 'último mês', color: "text-green-500", icon: ArrowUpRight}, icon: DollarSign, color: "text-blue-500" },
]

export default function MetricsOverview() {
  return (
    <>
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm md:text-base text-gray-400">{metric.title}</CardTitle>
            <metric.icon className={`h-4 w-4 md:h-5 md:w-5 ${metric.color}`} />
          </CardHeader>
          <CardContent className="pt-0 pb-2">
            <div className="text-xl md:text-2xl font-bold">{metric.value}</div>
          </CardContent>
          <CardFooter>
            <p className="text-xs md:text-sm font-medium gap-1 text-gray-400 flex items-center">
              <metric.comparation.icon className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
              <span className={metric.comparation.color}>{metric.comparation.value}%</span> desde {metric.comparation.text}
            </p>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}