'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MetricsCupons from './metrics-cupons'
import TableCupons from './TableCupons'
import Button_back from '@/components/Button_back'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function DiscountCouponsPage() {
  const [isAddCouponOpen, setIsAddCouponOpen] = useState(false)
  return (
    <main className="w-full p-4 md:p-6 overflow-y-scroll">
      <h1 className="text-2xl font-bold text-center md:text-left">Gerenciamento de Cupons</h1> 
      <Button_back/>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-4">
        <MetricsCupons />
      </div>
      <div className=''>
        <Card className=''>
          <CardHeader className='flex flex-row space-y-0 justify-between items-center py-4 '>
            <CardTitle className="text-base lg:text-xl font-semibold">Cupons Existentes</CardTitle>
            <Button onClick={() => setIsAddCouponOpen(true)} className="text-xs">
              Adicionar Cupom
            </Button>
          </CardHeader>
          <CardContent className="p-2 md:p-4">
            <TableCupons isAddCouponOpen={isAddCouponOpen} setIsAddCouponOpen={setIsAddCouponOpen} />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

