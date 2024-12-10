import Button_back from '@/components/Button_back'
import React from 'react'
import ProductTable from './product-table'

export default function Home() {
  return (
    <main className="flex-1 pl-6 pt-4 overflow-y-auto">
      <h1 className="text-3xl font-semibold tracking-tight">Produtos</h1>
      <Button_back/>
      <ProductTable />
    </main>
  )
}