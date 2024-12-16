"use client";

import React, { useState } from "react";
import Filtro from "./Filter";
import Tabela from "./Tabela";
import { motion } from "framer-motion";
import icon from "../discordblue.png";
import Pagination from "./Pagination";
import { StaticImageData } from "next/image";

// Tipos para os dados de vendas
interface Venda {
  id: number;
  comprador: string;
  produto: string;
  servidor: string;
  data: string; // Data no formato DD/MM/YYYY
  valor: string; // Valor no formato monetário
  avatar: StaticImageData;
  quantidade: number;
}

const App: React.FC = () => {
  // Dados simulados de vendas
  const vendas: Venda[] = [
    {
      id: 1,
      comprador: "@joao_p",
      produto: "Produto 1",
      servidor: "Servidor A",
      data: "28/11/2024",
      valor: "R$ 150,00",
      avatar: icon,
      quantidade: 1,
    },
    {
      id: 2,
      comprador: "@maria_silva",
      produto: "Produto 2",
      servidor: "Servidor B",
      data: "27/11/2024",
      valor: "R$ 200,00",
      avatar: icon,
      quantidade: 2,
    },
    {
      id: 3,
      comprador: "@lucas123",
      produto: "Produto 3",
      servidor: "Servidor C",
      data: "26/11/2024",
      valor: "R$ 75,00",
      avatar: icon,
      quantidade: 1,
    },
    {
      id: 4,
      comprador: "@ana_carol",
      produto: "Produto 4",
      servidor: "Servidor A",
      data: "25/11/2024",
      valor: "R$ 320,00",
      avatar: icon,
      quantidade: 3,
    },
    {
      id: 5,
      comprador: "@pedro_k",
      produto: "Produto 5",
      servidor: "Servidor D",
      data: "24/11/2024",
      valor: "R$ 50,00",
      avatar: icon,
      quantidade: 1,
    },
    {
      id: 6,
      comprador: "@juliana_m",
      produto: "Produto 1",
      servidor: "Servidor B",
      data: "23/11/2024",
      valor: "R$ 150,00",
      avatar: icon,
      quantidade: 1,
    },
    {
      id: 7,
      comprador: "@rafael_t",
      produto: "Produto 6",
      servidor: "Servidor C",
      data: "22/11/2024",
      valor: "R$ 400,00",
      avatar: icon,
      quantidade: 4,
    },
    {
      id: 8,
      comprador: "@carolzinha",
      produto: "Produto 2",
      servidor: "Servidor A",
      data: "21/11/2024",
      valor: "R$ 200,00",
      avatar: icon,
      quantidade: 2,
    },
    {
      id: 9,
      comprador: "@gustavo_l",
      produto: "Produto 7",
      servidor: "Servidor B",
      data: "20/11/2024",
      valor: "R$ 180,00",
      avatar: icon,
      quantidade: 3,
    },
    {
      id: 10,
      comprador: "@beatriz_s",
      produto: "Produto 8",
      servidor: "Servidor D",
      data: "19/11/2024",
      valor: "R$ 250,00",
      avatar: icon,
      quantidade: 2,
    },
    {
      id: 11,
      comprador: "@thiago_r",
      produto: "Produto 9",
      servidor: "Servidor C",
      data: "18/11/2024",
      valor: "R$ 120,00",
      avatar: icon,
      quantidade: 1,
    },
    {
      id: 12,
      comprador: "@fernanda_n",
      produto: "Produto 10",
      servidor: "Servidor A",
      data: "17/11/2024",
      valor: "R$ 350,00",
      avatar: icon,
      quantidade: 3,
    },
    {
      id: 13,
      comprador: "@andre_v",
      produto: "Produto 5",
      servidor: "Servidor B",
      data: "16/11/2024",
      valor: "R$ 50,00",
      avatar: icon,
      quantidade: 1,
    },
    {
      id: 14,
      comprador: "@luana_f",
      produto: "Produto 4",
      servidor: "Servidor D",
      data: "15/11/2024",
      valor: "R$ 320,00",
      avatar: icon,
      quantidade: 3,
    },
    {
      id: 15,
      comprador: "@rodrigo_z",
      produto: "Produto 8",
      servidor: "Servidor C",
      data: "14/11/2024",
      valor: "R$ 250,00",
      avatar: icon,
      quantidade: 2,
    }
  ];

  // Estado do filtro
  const [search, setSearch] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("dataRecente");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Lógica de Filtragem
  const filteredVendas = vendas.filter(
    (venda) =>
      venda.comprador.toLowerCase().includes(search.toLowerCase()) ||
      venda.produto.toLowerCase().includes(search.toLowerCase()) ||
      venda.servidor.toLowerCase().includes(search.toLowerCase())
  );

  // Função para converter string de data em objeto Date
  const parseDate = (dateStr: string): Date => {
    const [day, month, year] = dateStr.split("/").map(Number); // Divide e converte para números
    return new Date(year, month - 1, day); // Cria o objeto Date
  };

  // Função para converter string de preço em número
  const parsePreco = (precoStr: string): number => {
    return parseFloat(
      precoStr.replace(/[^\d,\.]/g, "").replace(/\./g, "").replace(",", ".")
    );
  };

  const sortedVendas = [...filteredVendas].sort((a, b) => {
    if (sortOrder === "precoLower") {
      return parsePreco(a.valor) - parsePreco(b.valor);
    }
    if (sortOrder === "precoHigher") {
      return parsePreco(b.valor) - parsePreco(a.valor);
    }
    if (sortOrder === "dataRecente") {
      return parseDate(b.data).getTime() - parseDate(a.data).getTime();
    }
    if (sortOrder === "dataAntiga") {
      return parseDate(a.data).getTime() - parseDate(b.data).getTime();
    }
    return 0;
  });

  // Lógica de Paginação
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedVendas = sortedVendas.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedVendas.length / itemsPerPage);

  return (
    <main className="w-full p-4 md:p-6 overflow-y-scroll  ">
      <div className="p-6 bg-blue-800 w-full rounded-lg">
        {/* Titulo */}
        <h4 className="text-3xl font-semibold text-center text-white mb-10">
          Histórico de Vendas
        </h4>
        {/* Filtro */}
        <Filtro onSearchChange={setSearch} onSortChange={setSortOrder} />
        {/* Tabela com animação */}
        <motion.div
          key={currentPage} // Garante a animação na troca de página
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Tabela vendas={paginatedVendas} />
        </motion.div>
        {/* Paginação */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          sortedVendas={sortedVendas}
        />
      </div>
    </main>
  );
};

export default App;
