'use client'

import { useEffect, useState} from 'react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Edit } from 'lucide-react'
import { Badge } from '@/components/ui/badge'



interface Coupon {
  id: string
  code: string
  discount: number
  status: string
  validUntil: string
}

export default function TableCupons() {
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [newCoupon, setNewCoupon] = useState({ code: '', discount: '', validUntil: '' })
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null)

  useEffect(() => {
    // Simulating API call to fetch coupons
    const fetchCoupons = async () => {
      // In a real application, this would be an API call
      const mockCoupons: Coupon[] = [
        { id: '1', code: 'SUMMER10', discount: 10, status: 'Ativo', validUntil: '2023-08-31' },
        { id: '2', code: 'FALL20', discount: 20, status: 'Ativo', validUntil: '2023-11-30' },
        { id: '3', code: 'FALL20', discount: 20, status: 'Inativo', validUntil: '2023-11-30' },
        { id: '4', code: 'FALL20', discount: 20, status: 'Ativo', validUntil: '2023-11-30' },
        { id: '5', code: 'FALL20', discount: 20, status: 'Inativo', validUntil: '2023-11-30' },
        { id: '6', code: 'FALL20', discount: 20, status: 'Inativo', validUntil: '2023-11-30' },

      ]
      setCoupons(mockCoupons)
    }
  
    fetchCoupons()
  }, [])

  

  const handleEditCoupon = (coupon: Coupon) => {
    setEditingCoupon(coupon)
    setNewCoupon({ code: coupon.code, discount: coupon.discount.toString(), validUntil: coupon.validUntil })
  }

  const handleDeleteCoupon = (id: string) => {
    setCoupons(coupons.filter(c => c.id !== id))
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className='bg-blue-900 text-sm tracking-wide'>
          <TableHead>Codigo</TableHead>
          <TableHead>Desconto (%)</TableHead>
          <TableHead>Validade</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coupons.map((coupon) => (
          <TableRow key={coupon.id} className='text-xs'>
            <TableCell>{coupon.code}</TableCell>
            <TableCell>{coupon.discount}%</TableCell>
            <TableCell>{coupon.validUntil}</TableCell>
            <TableCell>
              <Badge variant={`${coupon.status === 'Ativo' ? 'green' :
                  'red'}`}>
                {coupon.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Button variant="ghost" size='icon' onClick={() => handleEditCoupon(coupon)}>
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost_destructive" size='icon' onClick={() => handleDeleteCoupon(coupon.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

