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
    <main className="w-full p-4 md:p-6 overflow-y-scroll">
      <h1 className="text-xl md:text-3xl font-semibold text-center md:text-left">Metricas da Loja: <span className='font-light'>848678305745862676</span></h1>
      <Button_back/>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
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

