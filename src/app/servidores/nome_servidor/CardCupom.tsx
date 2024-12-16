import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const CardCupom = () => {
  return (
    <Card className='w-full mt-6 lg:mt-10'>
      <div className="relative mx-4 md:-mr-3 md:ml-20 -mt-6 h-24 md:h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <CardHeader>
        <CardTitle className="text-lg lg:text-xl">Cupom de Desconto</CardTitle>
        <CardDescription className="text-sm lg:text-base">Crie cupons exclusivos para seus clientes ou apoiadores e ofereça descontos especiais como forma de agradecimento!</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={'/servidores/nome_servidor/manage_cupons'}>
          <Button data-ripple-light="true" className="w-full sm:w-auto">
            Gerenciar Cupons
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default CardCupom;

