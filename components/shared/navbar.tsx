import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const { navbar } = assets;

  return (
    <nav className='border border-red-500 grid grid-cols-3 w-full h-[100px] items-center px-10 bg-white'>
      <Link href='/' className='flex gap-2 items-end'>
        <Image src={navbar.logo} alt='logo' />
        <h2 className='text-3xl font-bold'>Furniro</h2>
      </Link>

      <ul className='flex gap-16 text-sm font-semibold'>
        {navbar.links.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <ul className='flex justify-center gap-10'>
        {navbar.navIcons.map((navIcon) => (
          <li
            key={navIcon.path}
            className='hover:scale-110 transition ease-in-out duration-200'
          >
            <Link href={navIcon.path}>{navIcon.icon}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
