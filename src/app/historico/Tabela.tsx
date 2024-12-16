import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Definição do tipo para uma venda
interface Venda {
  id: number;
  comprador: string;
  servidor: string;
  produto: string;
  quantidade: number;
  valor: string;
  data: string;
  avatar: StaticImageData;
}

// Props esperadas pelo componente
interface TabelaProps {
  vendas: Venda[];
}

const Tabela: React.FC<TabelaProps> = ({ vendas }) => {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Comprador</TableHead>
            <TableHead>Servidor</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendas.length > 0 ? (
            vendas.map((venda) => (
              <TableRow key={venda.id}>
                <TableCell className="font-medium">{venda.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      src={venda.avatar}
                      alt={venda.comprador}
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    <span className="truncate">{venda.comprador}</span>
                  </div>
                </TableCell>
                <TableCell>{venda.servidor}</TableCell>
                <TableCell>{venda.produto}</TableCell>
                <TableCell>{venda.quantidade}</TableCell>
                <TableCell>{venda.valor}</TableCell>
                <TableCell>{venda.data}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                Nenhum resultado encontrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tabela;

