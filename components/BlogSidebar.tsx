"use client";

import { useState } from 'react';
import { Sidebar, Button } from 'flowbite-react';
import { HiCode, HiMenu } from 'react-icons/hi';

export default function BlogSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
      style={{background:"transparent"}}
        className="md:hidden fixed top-20 left-4 z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMenu className="h-6 w-6" />
      </Button>
      <Sidebar
        aria-label="Blog sidebar"
        className={`fixed left-0 top-10 h-[calc(100vh-4rem)] z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 w-64`}
      >
        <Sidebar.Items className='ml-16 pt-10'>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiCode}>
              HTML
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiCode}>
              CSS
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiCode}>
              JavaScript
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}