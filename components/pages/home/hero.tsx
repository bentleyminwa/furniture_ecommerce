import { assets } from '@/assets/assets';
import LinkButton from '@/components/ui/link-button';
import Image from 'next/image';

export default function Hero() {
  const { hero } = assets;

  return (
    <header className='relative w-full h-[87vh]'>
      {/* HERO IMAGE */}
      <Image
        src={hero.image}
        alt='hero'
        className='absolute w-full h-full object-cover'
      />

      {/* CTA */}
      <div className='absolute top-30 right-5 z-20 bg-primary px-10 py-20 max-w-2xl space-y-3'>
        <h4 className='text-sm font-semibold'>New Arrival</h4>
        <h1 className='text-6xl font-bold text-primary-foreground'>
          {hero.title}
        </h1>
        <p>{hero.content}</p>
        <LinkButton label={hero.ctaText} path={hero.ctaLink} />
      </div>
    </header>
  );
}
