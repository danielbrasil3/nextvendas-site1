"use client"

import { useState } from "react"
import { Pencil, Plus, Trash2, FileDown, Filter  } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ProductForm } from "@/components/product-form"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Button_back from "@/components/Button_back"

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'Disponível' | 'Baixo Estoque' | 'Em falta'
}

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "4",
      name: "Câmera de Segurança Wi-Fi",
      category: "Eletrônicos",
      price: 249.99,
      stock: 15,
      status: "Disponível"
    },
    {
      id: "3",
      name: "Sandálias de Couro",
      category: "Calçados",
      price: 79.99,
      stock: 50,
      status: "Disponível"
    },
    {
      id: "2",
      name: "Teclado Mecânico RGB",
      category: "Eletrônicos",
      price: 349.99,
      stock: 10,
      status: "Baixo Estoque"
    },
    {
      id: "1",
      name: "Óculos de Sol Polarizados",
      category: "Acessórios",
      price: 129.99,
      stock: 20,
      status: "Disponível"
    },
    {
      id: "5",
      name: "Caixa de Som Bluetooth",
      category: "Eletrônicos",
      price: 49.99,
      stock: 60,
      status: "Disponível"
    },
    {
      id: "6",
      name: "Garrafa de Água de Aço Inox",
      category: "Acessórios",
      price: 24.99,
      stock: 12,
      status: "Baixo Estoque"
    },
    {
      id: "7",
      name: "Fones de Ouvido com Cancelamento de Ruído",
      category: "Eletrônicos",
      price: 199.99,
      stock: 5,
      status: "Em falta"
    },
    {
      id: "8",
      name: "Mochila Escolar",
      category: "Acessórios",
      price: 89.99,
      stock: 40,
      status: "Disponível"
    },
    {
      id: "9",
      name: "Tênis de Caminhada",
      category: "Calçados",
      price: 149.99,
      stock: 25,
      status: "Baixo Estoque"
    },
    {
      id: "10",
      name: "Relógio Analógico",
      category: "Acessórios",
      price: 199.99,
      stock: 0,
      status: "Em falta"
    },
  ])

  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)

  const toggleProduct = (productId: string) => {
    setSelectedProducts(current =>
      current.includes(productId)
        ? current.filter(id => id !== productId)
        : [...current, productId]
    )
  }

  const toggleAll = () => {
    setSelectedProducts(current =>
      current.length === products.length ? [] : products.map(product => product.id)
    )
  }

  const deleteProduct = (productId: string) => {
    setProducts(current => current.filter(product => product.id !== productId))
    setSelectedProducts(current => current.filter(id => id !== productId))
  }

  const addProduct = (newProduct: Omit<Product, 'id'>) => {
    const id = Math.max(...products.map(p => parseInt(p.id))) + 1
    setProducts([...products, { ...newProduct, id: id.toString() }])
    setIsAddProductOpen(false)
  }

  const updateProduct = (updatedProduct: Omit<Product, 'id'>) => {
    setProducts(current =>
      current.map(product =>
        product.id === editingProduct?.id ? { ...product, ...updatedProduct } : product
      )
    )
    setEditingProduct(null)
  }

  const filteredProducts = products.filter(product =>
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === null || product.status === statusFilter)
  )

  const exportCSV = () => {
    const headers = ["Nome", "Categoria", "Preço", "Estoque", "Status"]
    const data = filteredProducts.map(p => [p.name, p.category, p.price, p.stock, p.status])
    const csv = [headers, ...data].map(row => row.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute("href", url)
      link.setAttribute("download", "produtos.csv")
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="p-6 bg-blue-800 w-full rounded-lg">
      <div className="flex gap-8 items-center mb-4">
        <Input
          placeholder="Pesquisar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">
              <Filter className="mr-2 h-4 w-4" />
                Filtro: {statusFilter || "Todos"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filtro por Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => setStatusFilter(null)}>Todos</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setStatusFilter("Disponível")}>Disponível</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setStatusFilter("Baixo Estoque")}>Baixo Estoque</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setStatusFilter("Em falta")}>Em falta</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex gap-8 mr-5">
          <Button onClick={exportCSV}>
            <FileDown className="mr-2 h-4 w-4" />
              Exportar CSV
          </Button>
          <Button
            onClick={() => setIsAddProductOpen(true)}
          >
            <Plus className="mr-2 h-4 w-4 " />
              Novo Produto
          </Button>
        </div>
      </div>

      <div className="rounded-lg text-center">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-900 text-sm tracking-wide">
              <TableHead className="flex align-middle justify-center">
                <Checkbox
                  checked={selectedProducts.length === products.length}
                  onCheckedChange={toggleAll}
                  aria-label="Select all products"
                />
              </TableHead>
              <TableHead>Produto</TableHead>       
              <TableHead>Categoria</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Estoque</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map(product => (
              <TableRow key={product.id} >
                <TableCell>
                  <div className="flex justify-center ">
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={() => toggleProduct(product.id)}
                      aria-label={`Select ${product.name}`}
                      />
                  </div>
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                    <Badge variant={`${product.status === 'Disponível' ? 'green' :
                    product.status === 'Baixo Estoque' ? 'yellow' :
                   'red'}`}>
                      {product.status}
                    </Badge>
                </TableCell>
                <TableCell>
                <div className="flex justify-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Edit ${product.name}`}
                      onClick={() => setEditingProduct(product)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost_destructive"
                      size="icon"
                      aria-label={`Delete ${product.name}`}
                      onClick={() => deleteProduct(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <ProductForm
            onSubmit={addProduct}
            onCancel={() => setIsAddProductOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={!!editingProduct} onOpenChange={() => setEditingProduct(null)}>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          {editingProduct && (
            <ProductForm
              initialProduct={editingProduct}
              onSubmit={updateProduct}
              onCancel={() => setEditingProduct(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

