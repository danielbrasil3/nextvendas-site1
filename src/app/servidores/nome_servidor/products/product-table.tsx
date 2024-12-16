"use client"

import { useState, useEffect } from "react"
import { Pencil, Trash2, FileDown, Filter, X } from 'lucide-react'
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
import React from "react"

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

  useEffect(() => {
    if (products.length === 0) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(current => 
        current.filter(id => products.some(product => product.id === id))
      )
    }
  }, [products])

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

  const deleteSelectedProducts = () => {
    setProducts(current => current.filter(product => !selectedProducts.includes(product.id)))
    setSelectedProducts([])
  }

  const editSelectedProduct = () => {
    if (selectedProducts.length === 1) {
      const productToEdit = products.find(p => p.id === selectedProducts[0])
      if (productToEdit) {
        setEditingProduct(productToEdit)
      }
    }
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
    <div className="p-3 sm:p-6 bg-blue-800 w-full rounded-lg space-y-4">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-stretch sm:items-center">
        <Input
          placeholder="Pesquisar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:max-w-sm"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:flex lg:flex-wrap gap-3 w-full lg:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="w-full sm:w-auto">
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
          <Button onClick={exportCSV} className="w-full sm:w-auto">
            <FileDown className="mr-2 h-4 w-4" />
            Exportar CSV
          </Button>
          <Button
            onClick={() => setIsAddProductOpen(true)}
            className="w-full sm:w-auto"
          >
            Novo Produto
          </Button>
        </div>
      </div>

      <div className="rounded-lg text-center">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-900 text-xs sm:text-sm tracking-wide">
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedProducts.length === products.length && products.length > 0}
                    onCheckedChange={toggleAll}
                    aria-label="Select all products"
                  />
                </TableHead>
                <TableHead>Produto</TableHead>
                <TableHead className="hidden sm:table-cell">Categoria</TableHead>
                <TableHead className="hidden sm:table-cell">Preço</TableHead>
                <TableHead className="hidden sm:table-cell">Estoque</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map(product => (
                <React.Fragment key={product.id}>
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={() => toggleProduct(product.id)}
                        aria-label={`Select ${product.name}`}
                      />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell className="hidden sm:table-cell">{product.category}</TableCell>
                    <TableCell className="hidden sm:table-cell">R$ {product.price.toFixed(2)}</TableCell>
                    <TableCell className="hidden sm:table-cell">{product.stock}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge variant={`${product.status === 'Disponível' ? 'green' :
                        product.status === 'Baixo Estoque' ? 'yellow' :
                        'red'}`}>
                        {product.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="sm:hidden">
                    <TableCell colSpan={6} className="p-0">
                      <div className="grid gap-3 p-4 bg-blue-800">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Categoria:</div>
                          <div>{product.category}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Preço:</div>
                          <div>R$ {product.price.toFixed(2)}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Estoque:</div>
                          <div>{product.stock}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Status:</div>
                          <Badge variant={`${product.status === 'Disponível' ? 'green' :
                            product.status === 'Baixo Estoque' ? 'yellow' :
                            'red'}`}>
                            {product.status}
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {selectedProducts.length > 0 && (
        <div className="fixed bottom-10 left-11 right-11 md:left-32 md:right-32 lg:left-1/3 lg:right-1/4 bg-white bg-opacity-50 py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-gray-900 font-semibold">
              {selectedProducts.length} produto(s) selecionado(s)
            </span>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                onClick={editSelectedProduct}
                disabled={selectedProducts.length !== 1}
                className="px-3 py-2 text-sm"
              >
                <Pencil className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Editar</span>
              </Button>
              <Button
                variant="destructive"
                onClick={deleteSelectedProducts}
                className="px-3 py-2 text-sm"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Excluir</span>
              </Button>
              <Button
                variant="ghost"
                onClick={() => setSelectedProducts([])}
                className="px-3 py-2 text-sm text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
        <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
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
        <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
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

