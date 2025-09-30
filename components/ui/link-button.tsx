import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from './button';

interface Props {
  label: string;
  path: string;
}

export default function LinkButton({ label, path }: Props) {
  return (
    <Button
      asChild
      className='bg-primary-foreground text-white hover:bg-primary-foreground group'
    >
      <Link href={path} className='inline-flex items-center font-semibold'>
        <span>{label}</span>
        <ArrowRight className='group-hover:translate-x-1 transition ease-in-out duration-200' />
      </Link>
    </Button>
  );
}
