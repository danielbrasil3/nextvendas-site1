import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { AlertCircle, Package, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CardProdutos = () => {
  const productStats = {
    totalProducts: 25,
    topSelling: "Produto A",
    lowStock: 3
  };

  return (
      <Card className='col-span-2 mt-10'>
        <div className="relative ml-4 mr-12 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <CardHeader>
          <CardTitle>Produtos e Estoque</CardTitle>
          <CardDescription>Cadastre produtos para serem vendidos e administre o estoque da sua loja de forma fácil e prática.</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-wrap gap-2 pb-4'>
          <Badge className="flex items-center">
            <Package className="mr-1 h-4 w-4" />
            Total de Produtos: {productStats.totalProducts}
          </Badge>
          <Badge className="flex items-center">
            <TrendingUp className="mr-1 h-4 w-4" />
            Mais Vendido: {productStats.topSelling}
          </Badge>
          <Badge className="flex items-center">
            <AlertCircle className="mr-1 h-4 w-4" />
            Produtos com Baixo Estoque: {productStats.lowStock}
          </Badge>
        </CardContent>
        <CardFooter>
          <Link href={'/servidores/nome_servidor/products'}>
            <Button data-ripple-light="true">
              Gerenciar Produtos
            </Button>
          </Link>
        </CardFooter>
      </Card>
  );
}

export default CardProdutos;