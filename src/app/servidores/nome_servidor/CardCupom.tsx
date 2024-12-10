import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const CardCupom = () => {
  return (
    <Card className='mt-10'>
      <div className="relative ml-4 mr-14 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <CardHeader>
        <CardTitle>Cupom de Desconto</CardTitle>
        <CardDescription>Crie cupons exclusivos para seus clientes ou apoiadores e ofereça descontos especiais como forma de agradecimento!</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={'/servidores/nome_servidor/manage_cupons'}>
          <Button data-ripple-light="true">
            Gerenciar Cupons
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default CardCupom;
