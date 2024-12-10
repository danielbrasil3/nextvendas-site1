import React from 'react';
import Image from 'next/image'
import icon from '../../servidor-icon.png'

const Ranking = () => {
  return (
    <div>
        <h1 className='text-center text-2xl font-bold'>Maiores compradores</h1>
        <div className="top-3 flex items-end justify-evenly mt-4">
            <div className="profile flex flex-col items-center ">
                <Image src={icon} alt="" id="avatar-2" className="avatar rounded-full w-16 h-16 z-10"></Image>
                <div id="rank-number-2" className="rank-number rounded-md w-6 h-6 z-10 -rotate-45 relative -top-4 bg-gradient-to-b from-pink-600 to-pink-400"><span className='inline-block rotate-45 relative left-2'>2</span></div>
                <div className="rank-2 relative bottom-11 my-2 w-20 h-32 text-center text-xs bg-gradient-to-b from-pink-700 rounded-t-3xl">
                    <p className='mt-8 font-semibold mb-2'>Maria</p>
                    <p className='font-semibold mb-2' id="value-2">R$ 254</p>
                    <p className="products font-light">12 Produtos</p>
                </div>
            </div>
            <div className="profile flex flex-col items-center">
                <Image src={icon} alt="" id="avatar-1" className="avatar rounded-full w-16 h-16 z-10"></Image>
                <div id="rank-number-1" className="rank-number rounded-md w-6 h-6 z-10 -rotate-45 relative -top-4 bg-gradient-to-b from-indigo-500 to-indigo-400"><span className='inline-block rotate-45 relative left-2'>1</span></div>
                <div className="rank-1 relative bottom-11 my-2 w-24 h-36 text-center text-sm bg-gradient-to-b from-indigo-600 rounded-t-3xl">
                    <p className='mt-8 font-semibold mb-2'>Rachel</p>
                    <p className='font-semibold mb-2' id="value-1">R$ 1200</p>
                    <p className="products font-light">25 Produtos</p>
                </div>
            </div>
            <div className="profile flex flex-col items-center">
                <Image src={icon} alt="" id="avatar-3" className="avatar rounded-full w-16 h-16 z-10"></Image>
                <div id="rank-number-3" className="rank-number rounded-md w-6 h-6 z-10 -rotate-45 relative -top-4 bg-gradient-to-b from-amber-500 to-amber-400"><span className='inline-block rotate-45 relative  left-2'>3</span></div>
                <div className="rank-3 relative bottom-11 my-2 w-20 h-28 text-center text-xs bg-gradient-to-b from-amber-600 rounded-t-3xl">
                    <p className='mt-8 font-semibold mb-2'>Andrew</p>
                    <p className='font-semibold mb-2' id="value-3">R$ 100</p>
                    <p className="products font-light">10 Produtos</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Ranking;
