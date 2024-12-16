'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DatePicker from './DatePicker'

interface Coupon {
  id: string
  code: string
  discount: number
  status: string
  validUntil: string
}

interface FormCuponsProps {
  isOpen: boolean
  onClose: () => void
  initialCoupon?: Coupon
  onSubmit: (coupon: Coupon) => void
}

export default function FormCupons({ isOpen, onClose, initialCoupon, onSubmit }: FormCuponsProps) {
  const [coupon, setCoupon] = useState<Coupon>({
    id: '',
    code: '',
    discount: 0,
    status: 'Ativo',
    validUntil: '',
  })

  useEffect(() => {
    if (initialCoupon) {
      setCoupon(initialCoupon)
    } else {
      setCoupon({
        id: '',
        code: '',
        discount: 0,
        status: 'Ativo',
        validUntil: '',
      })
    }
  }, [initialCoupon])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submetendo cupom:', coupon)
    onSubmit(coupon)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialCoupon ? 'Editar Cupom' : 'Adicionar Novo Cupom'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="code">Código</Label>
            <Input
              id="code"
              value={initialCoupon ? coupon.code : undefined}
              onChange={(e) => setCoupon({ ...coupon, code: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="discount">Desconto (%)</Label>
            <Input
              id="discount"
              type="number"
              min="0"
              max="100"
              value={initialCoupon ? coupon.discount : undefined}
              onChange={(e) => setCoupon({ ...coupon, discount: parseFloat(e.target.value) || 0 })}
              required
            />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              value={initialCoupon ? coupon.status : undefined}
              onValueChange={(value) => setCoupon({ ...coupon, status: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ativo">Ativo</SelectItem>
                <SelectItem value="Inativo">Inativo</SelectItem>
              </SelectContent>
            </Select>
          </div>
            
            <DatePicker
              value={coupon.validUntil}
              onChange={(date) => setCoupon({ ...coupon, validUntil: date })}
            />
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              {initialCoupon ? 'Atualizar Cupom' : 'Adicionar Cupom'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

