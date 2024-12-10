import Link from 'next/link'
import React from "react";
import { Search } from 'lucide-react'
import ServerGrid from '@/components/server-grid'
import { Input } from "@/components/ui/input"
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';



export default function servidores() {
  return (
      <main className="flex-1 pl-6 pt-4 overflow-y-auto">
        <header className="mb-6">   
          <h1 className="text-3xl font-bold ">Selecionar Servidor</h1>
          <p className="mt-2 text-gray-300">Escolha um servidor para gerenciar e ver detalhes.</p>
        </header>

        <div className="mb-6">
          <div className="relative">
            <Input
              placeholder="Pesquisar servidores..."
              className="max-w-sm px-4 py-2 pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>

        <div className="bg-blue-800 rounded-lg shadow-md p-6">
          <ServerGrid />
        </div>

        <div className="mt-6 text-center">
          <Link href="/add-server">
            <Button>Adicionar servidor</Button>
          </Link>
        </div>
      </main>
  );
}
