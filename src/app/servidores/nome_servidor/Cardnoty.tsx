import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const Cardnoty = () => {
  return (
    
        <div className='flex flex-row gap-4 items-center justify-center'>
          <div className='flex flex-col gap-2'>
            <Badge variant='green'>Status Bot: Online</Badge>
            <Badge variant='green'>Ping: 34ms</Badge>
          </div>
          <div className='flex flex-col gap-2'>
            <Badge variant='yellow'>Produtos com baixo estoque: 1</Badge>
            <Badge variant='red'>Produtos em falta: 1</Badge>
            <Badge variant='red'>Nota de avaliação: Razoavel</Badge>
          </div>
        </div>

  );
}

export default Cardnoty;
