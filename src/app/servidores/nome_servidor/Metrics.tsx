

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BarChart2, DollarSign, ShoppingCart, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';



const Metrics = () => {

  return (
    <div className="grid grid-flow-col auto-cols-max gap-8 my-2 w-full items-center justify-center">
      <Card className="p-3  px-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-blue-500/20 p-3">
            <DollarSign className="h-4 w-4 text-blue-500" />
          </div>
          <div>
            <p className="text-base text-gray-400">Receita</p>
            <h3 className="text-xl font-bold text-white">R$ 45.231,89</h3>
          </div>
        </div>
      </Card>
      <Card className="p-3 px-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-purple-500/20 p-3">
            <Users className="h-4 w-4 text-purple-500" />
          </div>
          <div>
            <p className="text-base text-gray-400">Clientes</p>
            <h3 className="text-xl font-bold text-white">1.205</h3>
          </div>
        </div>
      </Card>
      <Link href="nome_servidor/metricas">
        <Button className='my-4'>Ver todas as Metricas</Button>
      </Link>
      <Card className="p-3 px-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-500/20 p-3">
            <ShoppingCart className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <p className="text-base text-gray-400">Vendas</p>
            <h3 className="text-xl font-bold text-white">2.584</h3>
          </div>
        </div>
      </Card>
      <Card className="p-3 px-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-yellow-500/20 p-3">
            <BarChart2 className="h-4 w-4 text-yellow-500" />
          </div>
          <div>
            <p className="text-base text-gray-400">Ticket Médio</p>
            <h3 className="text-xl font-bold text-white">R$ 175,52</h3>
          </div>
        </div>
      </Card>
      
    </div>
  );
};

export default Metrics;
