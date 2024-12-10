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
      <main className="flex-1 pl-6 pt-4 overflow-y-auto grid grid-cols-5 gap-6">
        <div className="col-span-5 grid grid-cols-5">
          <div className="col-span-5 flex">
            <div className='grid grid-cols-5 w-full'>
              <div className='flex col-span-3'>
                <Image src={icon} alt="servidor-icon" className="rounded-full w-28 h-28 mr-4"></Image>
                <div className='flex flex-col ml-2'>
                  <h1 className="text-3xl font-bold">マ | Drive Like Are Robbing</h1>
                  <Button_back/>
                </div>
              </div>
              <div className='col-span-2'>
                <Cardnoty/>
              </div>
            </div>
            
          </div>
          <div className="col-span-5 flex m-2">
            <Metrics/>
          </div>
        </div>
        <div className="col-span-3 w-full">
          <h1 className="text-3xl text-center font-semibold">Configuração da Loja</h1>   
          <div className='grid grid-cols-2 gap-4'>
            <CardConfigCanal/>
            <CardCupom/>
            <CardProdutos/>
          </div>
        </div>
        <div className='col-span-2 gap-6 flex flex-col'>
          <ReviewsPage/>
          <UltimasVendas/>
        </div>
      </main>
  );
}
