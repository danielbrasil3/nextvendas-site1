'use client';

import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils"
import { Home, BarChart3, History, Palette, CreditCard, UserCircle } from 'lucide-react'
import clsx from 'clsx';

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { href: '/dashboard', icon: Home, label: 'Dashboard' },
        { href: '/servidores', icon: BarChart3, label: 'Lojas (Servidores)' },
        { href: '/historico', icon: History, label: 'Histórico' },
        { href: '/historico', icon: Palette, label: 'Personalização', disabled: true },
        { href: '#', icon: CreditCard, label: 'Pagamento', disabled: true },
        { href: '#', icon: UserCircle, label: 'Minha conta', disabled: true },
    ];

    return (
        <div className="font-medium">
            {/* Mobile Navigation */}
            <nav className="bg-gradient-to-r from-blue-900 to-blue-800 w-full h-16 rounded-lg shadow-lg lg:hidden">
                <div className="container flex justify-between items-center h-full px-4">
                    <Link href="/dashboard" className="text-xl font-semibold text-white hover:text-slate-200 transition-colors">
                        Zephyros
                    </Link>
                    <ul className="flex items-center gap-6">
                        {menuItems.slice(0, 3).map((item) => (
                            <li key={item.href}>
                                <Link 
                                    href={item.href} 
                                    className={cn(
                                        "text-slate-400 hover:text-white transition-colors",
                                        pathname === item.href && "text-white"
                                    )}
                                >
                                    <item.icon className="w-6 h-6" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <aside className="bg-gradient-to-t from-blue-900 to-blue-800 h-full w-56 mr-4 rounded-md hidden lg:block">
                <nav className="sidebar" id="sidebarMenu">
                    <div className="p-3 text-center text-2xl font-semibold text-white">
                        <h1>Zephyros</h1>
                    </div>
                    <ul className="nav flex-col md:m-3 font-semibold text-xs">
                        <li className="nav-item mb-1">
                            <Link className={clsx("nav-link hover:bg-blue-900 flex items-center rounded-md py-2 px-4",
                                {
                                    'bg-blue-900 border-b-2 border-blue-700': pathname === '/dashboard'
                                },
                                )}
                                href="/dashboard">
                                <div className={clsx('me-2 rounded-md p-2', {
                                    'bg-blue-700': pathname === '/dashboard' ,
                                    'bg-blue-900': pathname !== '/dashboard'
                                },
                                )}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx("w-4 h-4 fill-blue-700", {'fill-white': pathname === '/dashboard'})}>
                                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                    </svg>
                                </div>
                                <span className="text-white">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item mb-1">
                            <Link className={clsx("nav-link hover:bg-blue-900 flex items-center rounded-md py-2 px-4",
                                {
                                    'bg-blue-900 border-b-2 border-blue-700': pathname.startsWith('/servidores')
                                },
                                )}
                                href="/servidores">
                                <div className={clsx('me-2 rounded-md p-2', {
                                    'bg-blue-700': pathname.startsWith('/servidores'),
                                    'bg-blue-900': !pathname.startsWith('/servidores')
                                },
                                )}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx("w-4 h-4 fill-blue-700", {'fill-white': pathname.startsWith('/servidores')})}>
                                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                                    </svg>
                                </div>
                                <span className="text-white">Lojas (Servidores)</span>
                            </Link>  
                        </li>
                        <li className="nav-item mb-1">
                        <Link className={clsx("nav-link hover:bg-blue-900 flex items-center rounded-md py-2 px-4",
                                {
                                    'bg-blue-900 border-b-2 border-blue-700': pathname.startsWith('/historico')
                                },
                                )}
                                href="/historico">
                                <div className={clsx('me-2 rounded-md p-2', {
                                    'bg-blue-700': pathname.startsWith('/historico'),
                                    'bg-blue-900': !pathname.startsWith('/historico')
                                },
                                )}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx("w-4 h-4 fill-blue-700", {'fill-white': pathname.startsWith('/historico')})}>
                                        <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                                        <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clipRule="evenodd" />
                                        <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                                    </svg>
                                </div>
                                <span className="text-white">Histórico</span>
                            </Link>
                        </li>
                        <li className="nav-item mb-1">
                            <span className="nav-link flex items-center rounded-md py-2 px-4 text-gray-500 cursor-not-allowed">
                                <div className="bg-blue-900 me-2 rounded-md p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-blue-700">
                                        <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-500">Personalização</span>
                            </span>
                        </li>
                        <li className="nav-item mb-1"> 
                            <span className="nav-link flex items-center rounded-md py-2 px-4 text-gray-500 cursor-not-allowed">
                                <div className="bg-blue-900 me-2 rounded-md p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-blue-700">
                                        <path fillRule="evenodd" d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 9.375v-4.5ZM4.875 4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 0 1-1.875-1.875v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75A.75.75 0 0 1 6 7.5v-.75Zm9.75 0A.75.75 0 0 1 16.5 6h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75ZM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 19.125v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875-.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm6 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75ZM6 16.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm9.75 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm-3 3a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm6 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-500">Pagamento</span>
                            </span>
                        </li>
                        <li className="nav-item mb-1">
                            <span className="nav-link flex items-center rounded-md py-2 px-4 text-gray-500 cursor-not-allowed">
                                <div className="bg-blue-900 me-2 rounded-md p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-blue-700">
                                        <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-500">Minha conta</span>
                            </span>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
}

