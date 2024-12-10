import React from 'react';
import Image from 'next/image'
import icon from '../../servidor-icon.png'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

const UltimasVendas = () => {
    const data = [
        {
          product: "Produto 1",
          qtd: 3,
          value: "R$ 982,43",
        },
        {
          product: "Produto 2",
          qtd: 1,
          value: "R$ 93,21",
        },
        {
          product: "Produto 3",
          qtd: 1,
          value: "R$ 43,21",
        },
        {
          product: "Produto 4",
          qtd: 1,
          value: "R$ 5,43",
        },
        {
          product: "Produtfdsfsdfdsfdgfdyt",
          qtd: 2,
          value: "R$ 6586,66",
        },
      ];
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative flex w-full flex-col rounded-lg bg-blue-800">
                <div className="flex h-fit w-full items-center justify-between px-6 pt-4">
                    <h4 className="text-xl font-semibold">
                        Últimas Vendas
                    </h4>
                    <Link href={{
                            pathname: '/historico',
                            query: { search: 'servidor-a',  filter: 'mais-recente'},
                        }}>
                        <Button >
                            Mostrar todas
                        </Button>
                    </Link>
                    </div>
                    <div className="w-full overflow-x-scroll p-4 md:overflow-x-hidden text-center">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-blue-900 text-sm tracking-wide">
                                    <TableHead>Produto</TableHead>
                                    <TableHead>Quantidade</TableHead>
                                    <TableHead>Valor</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-xs  text-center truncate max-w-[100px]">{row.product}
                                    </TableCell>
                                    <TableCell className="text-xs  truncate">{row.qtd}
                                    </TableCell>
                                    <TableCell className="text-xs  truncate max-w-[100px]">{row.value}
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
  );
}

export default UltimasVendas;