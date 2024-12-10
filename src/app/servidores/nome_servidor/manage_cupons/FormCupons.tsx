'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'

interface Coupon {
  id: string
  code: string
  discount: number
  validUntil: string
}

export default function FormCupons() {
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [newCoupon, setNewCoupon] = useState({ code: '', discount: '', validUntil: '' })
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null)
  const [date, setDate] = useState<Date>()



  const handleUpdateCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingCoupon) {
      const updatedCoupons = coupons.map(c => 
        c.id === editingCoupon.id ? { ...c, ...newCoupon, discount: Number(newCoupon.discount) } : c
      )
      setCoupons(updatedCoupons)
      setEditingCoupon(null)
      setNewCoupon({ code: '', discount: '', validUntil: '' })
    }
  }

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.random().toString(36).substr(2, 9)
    const newCouponWithId = { ...newCoupon, id, discount: Number(newCoupon.discount) }
    setCoupons([...coupons, newCouponWithId])
    setNewCoupon({ code: '', discount: '', validUntil: '' })
  }
  return (
    <form onSubmit={editingCoupon ? handleUpdateCoupon : handleAddCoupon} className="space-y-4">
      <Input
        placeholder="Codigo do copom"
        value={newCoupon.code}
        onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
        required
      />
      <Input
        type="number"
        placeholder="Porcentagem de desconto"
        value={newCoupon.discount}
        onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
        required
      />
      <Popover >
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            size={"input"}
            className={cn(
              "w-full border border-gray-600 justify-start text-left text-sm",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
              {date ? format(date, "PPP") : <span>Validade</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 ">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Button type="submit" className=' normal-case text-sm py-2 px-4'>{editingCoupon ? 'Atualizar Cupom' : 'Adicionar Cupom'}</Button>
      {editingCoupon && (
        <Button type="button" variant="outline" className='text-sm py-2 px-4' onClick={() => {
          setEditingCoupon(null)
          setNewCoupon({ code: '', discount: '', validUntil: '' })
          }}>
          Cancelar
        </Button>
        )}
    </form>
  )
}

