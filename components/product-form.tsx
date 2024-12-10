import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
}


interface ProductFormProps {
  initialProduct?: Product
  onSubmit: (product: Omit<Product, 'id'>) => void
  onCancel: () => void
}

export function ProductForm({ initialProduct, onSubmit, onCancel }: ProductFormProps) {
  const [product, setProduct] = useState<Omit<Product, 'id'>>({
    name: initialProduct?.name || "",
    category: initialProduct?.category || "",
    price: initialProduct?.price || 0,
    stock: initialProduct?.stock || 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(product)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    setProduct({ ...product, price: isNaN(value) ? 0 : value }) // Previne NaN, usa 0 se inválido
  }

  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    setProduct({ ...product, stock: isNaN(value) ? 0 : value }) // Previne NaN, usa 0 se inválido
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          min="0"
          step="0.01"
          value={product.price}
          onChange={handlePriceChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="stock">Stock</Label>
        <Input
          id="stock"
          type="number"
          min="0"
          value={product.stock}
          onChange={handleStockChange}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {initialProduct ? "Update Product" : "Add Product"}
        </Button>
      </div>
    </form>
  )
}

