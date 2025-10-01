import { assets } from '@/assets/assets';
import LinkButton from '@/components/ui/link-button';
import Image from 'next/image';

export default function Categories() {
  const { categories } = assets;

  return (
    <section className='w-[70%] mx-auto my-10 text-center'>
      <h1 className='text-2xl font-bold'>Browse Our Categories</h1>
      <p className='text-sm mt-2'>
        Every section of our furniture is carefully curated.
      </p>

      <ul className='grid grid-cols-3 gap-4 mt-10'>
        {categories.map((category) => (
          <li key={category.id} className='relative group'>
            <Image
              src={category.image}
              alt={category.name}
              className='w-full h-[400px] object-cover rounded-lg'
            />
            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg h-[400px] transition ease-in-out duration-300' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block'>
              <LinkButton label='Shop Now' path='/shop' />
            </div>
            <h2 className='font-semibold mt-2'>{category.name}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
}
