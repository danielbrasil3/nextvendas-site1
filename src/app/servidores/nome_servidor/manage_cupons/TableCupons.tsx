'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Edit } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import FormCupons from './FormCupons'

interface Coupon {
  id: string
  code: string
  discount: number
  status: string
  validUntil: string
}

interface TableCuponsProps {
  isAddCouponOpen: boolean;
  setIsAddCouponOpen: (isOpen: boolean) => void;
}

export default function TableCupons({ isAddCouponOpen, setIsAddCouponOpen }: TableCuponsProps) {
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null)
  // Remova esta linha:
  // const [isAddCouponOpen, setIsAddCouponOpen] = useState(false)

  useEffect(() => {
    // Simulating API call to fetch coupons
    const fetchCoupons = async () => {
      const mockCoupons: Coupon[] = [
        { id: '1', code: 'SUMMER10', discount: 10, status: 'Ativo', validUntil: '2023-08-31' },
        { id: '2', code: 'FALL20', discount: 20, status: 'Ativo', validUntil: '2023-11-30' },
        { id: '3', code: 'WINTER15', discount: 15, status: 'Inativo', validUntil: '2023-12-31' },
        { id: '4', code: 'SPRING25', discount: 25, status: 'Ativo', validUntil: '2024-03-31' },
        { id: '5', code: 'HOLIDAY30', discount: 30, status: 'Inativo', validUntil: '2023-12-25' },
        { id: '6', code: 'NEWYEAR50', discount: 50, status: 'Inativo', validUntil: '2024-01-01' },
      ]
      setCoupons(mockCoupons)
    }
  
    fetchCoupons()
  }, [])

  const handleEditCoupon = (coupon: Coupon) => {
    console.log('Editando cupom:', coupon)
    setEditingCoupon(coupon)
  }

  const handleDeleteCoupon = (id: string) => {
    setCoupons(coupons.filter(c => c.id !== id))
  }

  const handleAddCoupon = (newCoupon: Omit<Coupon, 'id'>) => {
    const id = (Math.max(...coupons.map(c => parseInt(c.id))) + 1).toString()
    setCoupons([...coupons, { 
      ...newCoupon, 
      id,
      discount: parseFloat(newCoupon.discount.toString()) || 0
    }])
    setIsAddCouponOpen(false)
  }

  const handleUpdateCoupon = (updatedCoupon: Coupon) => {
    console.log('Atualizando cupom:', updatedCoupon)
    setCoupons(coupons.map(c => c.id === updatedCoupon.id ? {
      ...updatedCoupon,
      discount: parseFloat(updatedCoupon.discount.toString()) || 0
    } : c))
    setEditingCoupon(null)
  }

  return (
    <>
      {/* Remova o botão "Adicionar Cupom" do início do componente */}
      <Table className='table-fixed'>
        <TableHeader>
          <TableRow className='bg-blue-900 text-sm tracking-wide text-center'>
            <TableHead>Código</TableHead>
            <TableHead>Desconto (%)</TableHead>
            <TableHead>Validade</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coupons.map((coupon) => (
            <TableRow key={coupon.id} className=''>
              <TableCell>{coupon.code}</TableCell>
              <TableCell>{coupon.discount}%</TableCell>
              <TableCell>{coupon.validUntil}</TableCell>
              <TableCell>
                <Badge variant={coupon.status === 'Ativo' ? 'green' : 'red'}>
                  {coupon.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className='flex justify-center gap-2'>
                  <Button variant="ghost" size='icon' onClick={() => handleEditCoupon(coupon)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost_destructive" size='icon' onClick={() => handleDeleteCoupon(coupon.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FormCupons
        isOpen={isAddCouponOpen}
        onClose={() => setIsAddCouponOpen(false)}
        onSubmit={handleAddCoupon}
      />
      {editingCoupon && (
        <FormCupons
          isOpen={true}
          onClose={() => setEditingCoupon(null)}
          initialCoupon={editingCoupon}
          onSubmit={handleUpdateCoupon}
        />
      )}
    </>
  )
}

