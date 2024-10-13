"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, DarkThemeToggle, TextInput } from 'flowbite-react';
import Image from 'next/image';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function CustomNavbar() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        className={`${isActive ? 'text-blue-600 dark:text-white' : 'text-gray-500'} hover:text-white transition-colors`}
      >
        {children}
      </Link>
    );
  };

  return (
    <Navbar className="fixed w-full z-20 top-0 p-4 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className='flex justify-between'>
        <Navbar.Brand as={Link} href="/" className='lg:mr-[10rem]'>
          <Image src="./logo/logo-white.jpg" alt="logo" width={30} height={30} className="rounded-sm" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-2">BagScript</span>
        </Navbar.Brand>
        <div className='lg:flex hidden justyfy-between gap-5 items-center'>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blogs">Blogs</NavLink>
          <NavLink href="/docs">Docs</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/license">License</NavLink>
        </div>
      </div>
      <div className="flex md:order-2">
        <TextInput
          type="text"
          placeholder="Search..."
          className="mr-1 p-0 hidden lg:inline"
        />
        <DarkThemeToggle />
        <Navbar.Toggle className='bg-transparent focus:bg-transparent' />
      </div>
      <Navbar.Collapse className='lg:hidden'>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blogs">Blogs</NavLink>
        <NavLink href="/docs">Docs</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/license">License</NavLink>
        <TextInput
          type="text"
          placeholder="Search..."
          className="mr-3 mt-2 mb-4"
        />
      </Navbar.Collapse>
    </Navbar>
  );
}