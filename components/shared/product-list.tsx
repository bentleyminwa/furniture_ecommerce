import { Product } from '@/types/validate';
import ProductCard from './product-card';

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <ul className='grid grid-cols-4 gap-6'>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
