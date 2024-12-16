import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BarChart2, DollarSign, ShoppingCart, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Metrics = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
        <Card className="p-3 px-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-blue-500/20 p-3">
              <DollarSign className="h-4 w-4 text-blue-500" />
            </div>
            <div className='truncate'>
              <p className="text-sm text-left text-gray-400 truncate">Receita</p>
              <p className="text-lg font-bold text-white truncate">R$ 45.231,89</p>
            </div>
          </div>
        </Card>
        <Card className="p-3 px-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-purple-500/20 p-3">
              <Users className="h-4 w-4 text-purple-500" />
            </div>
            <div className='truncate'>
              <p className="text-sm text-gray-400 truncate">Clientes</p>
              <p className="text-lg font-bold text-white truncate">1.205</p>
            </div>
          </div>
        </Card>
        <Card className="p-3 px-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-green-500/20 p-3">
              <ShoppingCart className="h-4 w-4 text-green-500" />
            </div>
            <div className='truncate'>
              <p className="text-sm text-gray-400 truncate">Vendas</p>
              <p className="text-lg font-bold text-white truncate">2.584</p>
            </div>
          </div>
        </Card>
        <Card className="p-3 px-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-yellow-500/20 p-3">
              <BarChart2 className="h-4 w-4 text-yellow-500" />
            </div>
            <div className='truncate'>
              <p className="text-sm text-gray-400 truncate">Ticket Médio</p>
              <p className="text-lg font-bold text-white truncate">R$ 175,52</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex justify-center mt-4 mb-6">
        <Link href="nome_servidor/metricas">
          <Button className="w-full sm:w-auto">Ver todas as Metricas</Button>
        </Link>
      </div>
    </div>
  );
};

export default Metrics;

