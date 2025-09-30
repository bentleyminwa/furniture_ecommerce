import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Footer() {
  const { footer } = assets;

  const year = new Date().getFullYear();

  return (
    <footer className='bg-white p-10'>
      <div className='grid grid-cols-4 gap-20 items-baseline'>
        <div>
          <div className='flex gap-2 items-end'>
            <Image src={footer.logo} alt='logo' />
            <h2 className='text-2xl font-bold'>Furniro.</h2>
          </div>

          <p className='text-sm mt-5'>{footer.description}</p>
        </div>

        <div>
          <h3 className='text-gray-500 font-semibold mb-5'>Links</h3>
          <ul className='text-sm font-semibold flex flex-col gap-5'>
            {footer.links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-gray-500 font-semibold mb-5'>Help</h3>
          <ul className='text-sm font-semibold flex flex-col gap-5'>
            {footer.helpLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-gray-500 font-semibold mb-5'>Newsletter</h3>

          <form className='flex gap-2'>
            <Input type='email' placeholder='' />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>

      <hr className='my-10' />

      <div>
        <p className='text-sm'>
          Copyright &copy; {year} Furniro. All rights reserved
        </p>
      </div>
    </footer>
  );
}
