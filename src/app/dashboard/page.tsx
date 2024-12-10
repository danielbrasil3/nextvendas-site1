import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import icon from './servidor-icon.png'
import Chart from '@/components/chart'



export default function Home() {
  return (
      <main className="flex-1 pl-6 pt-4 overflow-y-scroll">
        <header className="topo flex items-center p-0 mb-4">
          <Image className="rounded-full h-24 w-24" src={icon} alt='Icon'></Image>
          
          <h1 className="ml-4 font-semibold text-3xl">Olá, Not-Daniel</h1>
        </header>

        <section className="cards grid grid-cols-1 xl:grid-cols-3 gap-4 mr-4">
          <div className="card p-4 bg-blue-800 rounded-md space-y-1">
            <h5 className="font-medium text-2xl">Vendas Hoje</h5>
            <h3 className="font-semibold text-2xl">$53,897</h3>
            <p className="font-normal text-base"><span className='text-green-400'>+3.48% </span>Desde ontem</p>
          </div>
          <div className="card p-4 bg-blue-800 rounded-md space-y-1">
            <h5 className="font-medium text-2xl">Quantidade de Clientes</h5>
            <h3 className="font-semibold text-2xl">1000</h3>
            <p className="font-normal text-base"><span className='text-green-400'>+3.48% </span>Desde o último mês</p>
          </div>
          <div className="card p-4 bg-blue-800 rounded-md space-y-1">
            <h5 className="font-medium text-2xl">Total vendido</h5>
            <h3 className="font-semibold text-2xl">$53,897</h3>
            <p className="font-normal text-base"><span className='text-green-400'>+3.48% </span>Desde o último mês</p>
          </div>
          <div className="geral-vendas card p-4 bg-blue-800 rounded-md col-span-2 space-y-1">
            <h5 className="font-medium text-2xl">Visão geral de Vendas</h5>
            <p className="font-normal text-base"><span className='text-green-400'>(+5) a mais</span> de 2023</p>
            <div className="grafico">
              <Chart/>
            </div>
          </div>
        </section>
      </main>
  );
}
