'use client'

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const Cardnoty = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-4 mb-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Status</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>
      {isExpanded && (
        <div className='grid grid-cols-1 pt-4 gap-2'>
          <div className='grid grid-cols-2 gap-2'>
            <Badge variant='green' className="text-xs sm:text-sm">Status Bot: Online</Badge>
            <Badge variant='green' className="text-xs sm:text-sm">Ping: 34ms</Badge>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            <Badge variant='yellow' className="text-xs sm:text-sm">Produtos com baixo estoque: 1</Badge>
            <Badge variant='red' className="text-xs sm:text-sm">Produtos em falta: 1</Badge>
            <Badge variant='red' className="text-xs sm:text-sm">Nota de avaliação: Razoavel</Badge>
          </div>
        </div>
      )}
    </Card>
  );
}

export default Cardnoty;

