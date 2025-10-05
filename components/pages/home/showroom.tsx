'use client';

import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Showroom() {
  const [current, setCurrent] = useState(0);

  const { showroom } = assets;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % showroom.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + showroom.length) % showroom.length);

  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-[#fffaf4] px-10 py-12 overflow-hidden'>
      {/* Text Section */}
      <div className='flex-1 max-w-md'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>
          50+ Beautiful rooms inspiration
        </h2>
        <p className='text-gray-500 mb-6'>
          Our designer already made a lot of beautiful prototype rooms that
          inspire you.
        </p>
        <button className='bg-amber-600 text-white font-semibold py-3 px-6 rounded shadow'>
          Explore More
        </button>
      </div>

      {/* Carousel Section */}
      <div className='relative flex-1 flex items-center justify-center mt-8 md:mt-0'>
        {/* Slides */}
        <div className='flex items-center gap-4 transition-transform duration-500 ease-in-out'>
          {showroom.map((room, index) => {
            const isActive = index === current;
            const offset =
              (index - current + showroom.length) % showroom.length;

            return (
              <motion.div
                key={room.id}
                className={`relative rounded-2xl overflow-hidden cursor-pointer shadow-md ${
                  isActive
                    ? 'w-[400px] h-[500px]'
                    : 'w-[250px] h-[400px] opacity-70'
                }`}
                animate={{
                  scale: isActive ? 1 : 0.9,
                  x: offset * 280 - (isActive ? 0 : 50),
                  zIndex: isActive ? 2 : 1,
                }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              >
                <Image
                  src={room.image}
                  alt={room.title}
                  className='w-full h-full object-cover'
                />
                {isActive && (
                  <div className='absolute bottom-4 left-4 bg-white/90 p-3 rounded'>
                    <p className='text-sm text-gray-500'>
                      0{room.id} — {room.subtitle}
                    </p>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      {room.title}
                    </h3>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className='absolute left-0 bg-white shadow rounded-full p-3 hover:bg-gray-100'
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-0 bg-white shadow rounded-full p-3 hover:bg-gray-100 z-20'
        >
          ▶
        </button>
      </div>
    </div>
  );
}
