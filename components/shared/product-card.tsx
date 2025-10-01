import { ShoppingCart } from 'lucide-react';

import { Product } from '@/types/validate';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className='relative group'>
      <Image
        src={product.image}
        alt={product.name}
        className='w-full h-80 object-cover'
      />

      <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition ease-in-out duration-300' />

      <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center hidden group-hover:block'>
        <Button asChild>
          <Link href={`/cart`} className='flex items-center gap-2'>
            <ShoppingCart />
            Add to Cart
          </Link>
        </Button>
      </div>

      <div className='bg-gray-200 py-5 px-3 space-y-4 text-left'>
        <h2 className='text-sm font-semibold'>{product.name}</h2>
        <div className='flex justify-between font-semibold'>
          <span>${product.discount_price}</span>
          <span className='line-through text-gray-400'>${product.price}</span>
        </div>
      </div>
    </div>
  );
}
