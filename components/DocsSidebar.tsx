"use client";

import { useState } from 'react';
import { Sidebar, Button } from 'flowbite-react';
import { HiDownload, HiViewBoards, HiColorSwatch, HiMenu } from 'react-icons/hi';

export default function DocsSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="md:hidden fixed top-16 left-4 z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMenu className="h-6 w-6" />
      </Button>
      <Sidebar
        aria-label="Docs sidebar"
        className={`fixed left-0 top-10 h-[calc(100vh-4rem)] z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 w-64`}
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiDownload}>
              Install
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Structure
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiColorSwatch}>
              UI
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}