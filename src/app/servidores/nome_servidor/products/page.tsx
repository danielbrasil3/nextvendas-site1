import Button_back from '@/components/Button_back'
import React from 'react'
import ProductTable from './product-table'

export default function Home() {
  return (
    <main className="w-full p-4 md:p-6 overflow-y-scroll">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center md:text-left">Produtos</h1>
      <Button_back/>
      <ProductTable />
    </main>
  )
}

