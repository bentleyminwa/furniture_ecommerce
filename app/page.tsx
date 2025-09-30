import {
  Categories,
  Gallery,
  Hero,
  ProductsOverview,
  Showroom,
} from '@/components/pages/home';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <ProductsOverview />
      <Showroom />
      <Gallery />
    </>
  );
}
