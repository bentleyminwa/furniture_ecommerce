import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-[50vh] flex flex-col justify-center items-center gap-6'>
      <h1 className='text-2xl'>
        <span className='text-primary-foreground font-bold'>Oops!</span> The
        page you are looking for cannot be found.
      </h1>
      <Button asChild>
        <Link href='/'>Return to Home</Link>
      </Button>
    </div>
  );
}
