"use client";

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingCart, Moon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

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

        {/* Post Ad Button */}
        <Link href="/post-ad" className="mr-4">
          <Button>Anuncie</Button>
        </Link>

        {/* User Profile and Cart */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            <Moon className="h-5 w-5" />
          </Button>
          <ShoppingCart className="h-5 w-5" />

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session?.user?.image || "https://github.com/shadcn.png"} alt={session?.user?.name || "User"} />
                    <AvatarFallback>{session?.user?.name?.slice(0, 2).toUpperCase() || "CN"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem>Minhas Compras</DropdownMenuItem>
                <DropdownMenuItem>Meu Cadastro</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => signIn()}>
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
