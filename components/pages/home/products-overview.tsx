import { assets } from '@/assets/assets';
import ProductList from '@/components/shared/product-list';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductsOverview() {
  const { products } = assets;

  return (
    <section className='w-[80%] mx-auto my-10 text-center'>
      <h1 className='text-2xl font-bold text-center mb-10'>Our Products</h1>

      <ProductList products={products.slice(0, 8)} />

      <Button
        variant='outline'
        asChild
        className='mt-5 border-primary-foreground text-primary-foreground hover:bg-primary hover:text-primary-foreground'
      >
        <Link href={'/shop'}>Show More</Link>
      </Button>
    </section>
  );
}
