import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LogIn } from 'lucide-react'
import icon from './servidor-icon.png'
import { Button } from './ui/button'

const profiles = [
  { id: 1, src: './servidor-icon.png', alt: 'Server 1', name: 'Production Server', sales: 150, status: 'Online' },
  { id: 2, src: './servidor-icon.png', alt: 'Server 2', name: 'Development Server', sales: 230, status: 'Maintenance' },
  { id: 3, src: './servidor-icon.png', alt: 'Server 3', name: 'Testing Server', sales: 90, status: 'Offline' },
  { id: 4, src: './servidor-icon.png', alt: 'Server 4', name: 'Backup Server', sales: 50, status: 'Online' },
  { id: 5, src: './servidor-icon.png', alt: 'Server 5', name: 'Load Balancer', sales: 180, status: 'Online' },
  { id: 6, src: './servidor-icon.png', alt: 'Server 6', name: 'Database Server', sales: 120, status: 'Online' },
]

const ServerGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="bg-blue-900 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <Image
                    src={icon}
                    alt={profile.alt}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base">{profile.name}</h3>
                  <p className="text-sm text-gray-400">ID: {profile.id}</p>
                </div>
              </div>
              
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Total De Vendas: R${profile.sales}</p>
              <Link href={`/servidores/nome_servidor`} className="text-white mr-2">
                <Button
                  
                  size="icon"
                  aria-label="server"
                >
                  <LogIn/>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServerGrid

