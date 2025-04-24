"use client";

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingCart, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // On mount, check local storage for theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="bg-background sticky top-0 z-50 border-b">
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold">Classificados Lite</div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <Input type="search" placeholder="Pesquisar..." className="mx-auto" />
        </div>

        {/* User Profile and Cart */}
        <div className="flex items-center space-x-4">
          <Link href="/post-ad">
            <Button>
              Anuncie
            </Button>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ShoppingCart className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
