import { Metadata } from 'next'
import MetricsOverview from './metrics-overview'
import SalesChart from './sales-chart'
import CustomerChart from './customer-chart'
import TopProducts from './top-products'
import Button_back from '@/components/Button_back'

export const metadata: Metadata = {
  title: 'Metrics | マ | Drive Like Are Robbing',
  description: 'Detailed metrics and analytics for マ | Drive Like Are Robbing',
}

export default function MetricsPage() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <h1 className="text-3xl font-semibold">Dashbord da Loja: <span className='font-light'>848678305745862676</span></h1>
      <Button_back/>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricsOverview />
      </div>
      <div className="grid gap-6 mt-6 md:grid-cols-2">
        <SalesChart />
        <CustomerChart />
      </div>
      <div className="mt-6">
        <TopProducts />
      </div>
    </main>
  )
}

