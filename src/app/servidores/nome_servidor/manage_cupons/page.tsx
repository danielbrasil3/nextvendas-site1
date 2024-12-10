'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MetricsCupons from './metrics-cupons'
import FormCupons from './FormCupons'
import TableCupons from './TableCupons'
import { Button } from '@/components/ui/button'
import Button_back from '@/components/Button_back'

interface Coupon {
  id: string
  code: string
  discount: number
  validUntil: string
}

export default function DiscountCouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null)


  useEffect(() => {
    // Simulating API call to fetch coupons
    const fetchCoupons = async () => {
      // In a real application, this would be an API call
      const mockCoupons: Coupon[] = [
        { id: '1', code: 'SUMMER10', discount: 10, validUntil: '2023-08-31' },
        { id: '2', code: 'FALL20', discount: 20, validUntil: '2023-11-30' },
      ]
      setCoupons(mockCoupons)
    }

    fetchCoupons()
  }, [])



  return (
    <main className="flex-1 pl-6 pt-4 overflow-y-auto">
      <h1 className="text-2xl font-bold">Gerenciamento de Cupons</h1> 
      <Button_back/>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-4">
        <MetricsCupons />
      </div>
      <div className=''>

        <Card className=''>
          <CardHeader className='flex flex-row justify-between items-center pt-4'>
            <CardTitle>Cupoms Existentes</CardTitle>
            <Button type="submit" className=' normal-case text-sm py-2 px-4'>Adicionar Cupom</Button>
          </CardHeader>
          <CardContent>
            <TableCupons/>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

