import React from "react";
import Image from 'next/image'
import icon from './servidor-icon.png'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, DollarSign, Users, CreditCard } from 'lucide-react'
import SalesChart from './sales-chart'
import MetricsOverview from './metrics-overview'
import CustomerChart from "./customer-chart";



export default function Home() {
  return (
      <main className="w-full p-4 md:p-6 overflow-y-scroll">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 md:mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <Image
              src={icon}
              alt="Dashboard logo"
              width={60}
              height={60}
              className="rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-[75px] lg:h-[75px]"
            />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">Olá, Not-Daniel</h1>
          </div>
        </div>

        
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          <MetricsOverview />
        </div>
        <div className="grid gap-4 md:gap-6 mt-6 grid-cols-1 lg:grid-cols-2">
          <SalesChart />
          <CustomerChart />
        </div>
      </main>
  );
}
