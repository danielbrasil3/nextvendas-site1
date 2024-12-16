import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const topProducts = [
  { name: "Produto A", sales: 1234, revenue: "R$ 12.340,00" },
  { name: "Produto B", sales: 987, revenue: "R$ 9.870,00" },
  { name: "Produto C", sales: 765, revenue: "R$ 7.650,00" },
  { name: "Produto D", sales: 543, revenue: "R$ 5.430,00" },
  { name: "Produto E", sales: 321, revenue: "R$ 3.210,00" },
]

export default function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 5 Produtos</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-900 tracking-wide text-center">
              <TableHead>Nome do Produto</TableHead>
              <TableHead>Vendas</TableHead>
              <TableHead>Receita</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topProducts.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.sales}</TableCell>
                <TableCell>{product.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

