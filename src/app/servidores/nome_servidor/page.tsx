import Image from 'next/image'
import icon from '../../servidor-icon.png'
import Button_back from "../../../../components/Button_back";
import CardConfigCanal from "./CardConfigCanal";
import CardProdutos from "./CardProdutos";
import CardCupom from "./CardCupom";
import UltimasVendas from './UltimasVendas';
import ReviewsPage from './Reviews';
import React from "react";
import Metrics from './Metrics';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import Cardnoty from './Cardnoty';




export default function nome_servidor() {
  
  return (
      <main className="w-full p-4 md:p-6 overflow-y-scroll ">
        <div className=" flex flex-col md:flex-row items-center md:items-start md:mb-6">
          <Image src={icon} alt="servidor-icon" className="rounded-full w-20 h-20 md:w-28 md:h-28 mb-4 md:mb-0 md:mr-4" />
          <div className='flex flex-col items-center md:items-start'>
            <h1 className="text-xl md:text-3xl font-bold text-center md:text-left">マ | Drive Like Are Robbing</h1>
            <Button_back />
          </div>
        </div>
        <div className="col-span-1 md:col-span-5 w-full">
          <Metrics/>
        </div>
        <div className="col-span-1 md:col-span-5 mt-4">
          <Cardnoty />
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
          <div className="col-span-1 lg:col-span-3 w-full">
            <h1 className="text-2xl lg:text-3xl text-center font-semibold mb-4">Configuração da Loja</h1>   
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6'>
              <CardConfigCanal/>
              <CardCupom/>
              <CardProdutos/>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-2 gap-6 flex flex-col'>
            <h1 className="text-2xl lg:text-3xl text-center font-semibold">Informações da Loja</h1>
            <ReviewsPage/>
            <UltimasVendas/>
          </div>
        </div>
      </main>
  );
}

