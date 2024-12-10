import React from 'react';
import Image, { StaticImageData } from 'next/image';

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
    <div className="p-6 max-w-7xl mx-auto w-full">
      <table className="w-full border-collapse bg-blue-800 text-white text-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-900 text-sm tracking-wide">
            <th className="py-4 px-2 font-medium">ID</th>
            <th className="py-4 px-2 font-medium">Comprador</th>
            <th className="py-4 px-2 font-medium">Servidor</th>
            <th className="py-4 px-2 font-medium">Produto</th>
            <th className="py-4 px-2 font-medium">Quantidade</th>
            <th className="py-4 px-2 font-medium">Valor</th>
            <th className="py-4 px-2 font-medium">Data</th>
          </tr>
        </thead>
        <tbody>
          {vendas.length > 0 ? (
            vendas.map((venda) => (
              <tr
                key={venda.id}
                className="border-b text-xs border-gray-200 border-opacity-10 hover:bg-blue-900 transition-all"
              >
                <td className="py-3 px-2 text-center">{venda.id}</td>
                <td className="py-3 px-2 flex items-center gap-2">
                  <Image
                    src={venda.avatar}
                    alt={venda.comprador}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <span className="text-center truncate font-normal">{venda.comprador}</span>
                </td>
                <td className="py-3 px-2 text-center truncate font-normal">{venda.servidor}</td>
                <td className="py-3 px-2 text-center truncate font-normal">{venda.produto}</td>
                <td className="py-3 px-2 text-center font-normal">{venda.quantidade}</td>
                <td className="py-3 px-2 text-center font-normal">{venda.valor}</td>
                <td className="py-3 px-2 truncate font-normal text-center">{venda.data}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-6">
                Nenhum resultado encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
