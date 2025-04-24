"use client";

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingCart } from "lucide-react";
import { Switch } from "@/components/ui/switch";

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
    <div className="bg-background sticky top-0 z-10 border-b">
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold">Classifieds Lite</div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <Input type="search" placeholder="Pesquisar..." className="mx-auto" />
        </div>

        {/* User Profile and Cart */}
        <div className="flex items-center space-x-4">
          <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleDarkMode} />
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
