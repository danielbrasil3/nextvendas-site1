'use client'

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation'

const Button_back = () => {
  const router = useRouter()
  return (
      <button className="bg-blue-800 text-center w-32 rounded-2xl h-10 relative text-white text-xl font-normal my-4 group" type="button" onClick={() => router.back()}>
          <div className="bg-blue-700 rounded-2xl h-10 w-1/4 flex items-center justify-center absolute top-[1px] group-hover:w-[128px] z-10 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="24px" width="24px">
              <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#fff" />
              <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#fff" />
            </svg>
          </div>
          <p className="translate-x-2">Voltar</p>
      </button>
  );
}

export default Button_back;
