'use client';

import { useState, useEffect } from 'react';
import { Input as SearchInput } from "@/components/ui/input";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input as AuthInput } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const [open, setOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();


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

  const authenticationFormSchema = z.object({
    email: z.string().email({
      message: "Por favor, insira um email válido.",
    }),
    password: z.string().min(8, {
      message: "A senha deve ter pelo menos 8 caracteres.",
    }),
    confirmPassword: z.string().min(8, {
      message: "A senha deve ter pelo menos 8 caracteres.",
    }).optional(),
  }).refine((data) => {
    if (isRegistering && data.password !== data.confirmPassword) {
      return false;
    }
    return true;
  }, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

  const AuthenticationForm = () => {
    const form = useForm<z.infer<typeof authenticationFormSchema>>({
      resolver: zodResolver(authenticationFormSchema),
      defaultValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    });

    const onSubmit = async (values: z.infer<typeof authenticationFormSchema>) => {
      try {
        if (isRegistering) {
          // Lógica de registro aqui
          // Supondo que você tenha uma função register para lidar com o registro
          // await register(values.email, values.password);
          console.log("Registro:", values);
          setOpen(false);
          toast({
            title: 'Registro realizado com sucesso!',
          });
          router.refresh();
        } else {
          await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
          });
          setOpen(false);
          toast({
            title: 'Login realizado com sucesso!',
          });
          router.refresh();
        }
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: isRegistering ? 'Erro ao realizar registro' : 'Erro ao realizar login',
          description: error.message,
        });
      }
    };

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <AuthInput placeholder="seuemail@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <AuthInput type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isRegistering && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl>
                    <AuthInput type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Button type="submit">{isRegistering ? "Cadastrar" : "Entrar"}</Button>
        </form>
      </Form>
    );
  };


  return (
    <div className="bg-background sticky top-0 z-50 border-b">
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold">Altamerc</div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <SearchInput type="search" placeholder="Pesquisar..." className="mx-auto" />
        </div>

        {/* Post Ad Button */}
        <div className="flex items-center space-x-4">
          <Button>
            <Link href="/post-ad">Anuncie</Link>
          </Button>

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
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <Avatar className="h-8 w-8">
                    <User className="h-5 w-5" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{isRegistering ? "Cadastrar" : "Autenticação"}</DialogTitle>
                  <DialogDescription>
                    {isRegistering ? "Crie sua conta para começar" : "Entre com sua conta para continuar"}
                  </DialogDescription>
                </DialogHeader>
                <AuthenticationForm />
                <Button variant="link" onClick={() => setIsRegistering(!isRegistering)}>
                  {isRegistering
                    ? "Já possui uma conta? Entrar"
                    : "Não possui uma conta? Cadastre-se"}
                </Button>
                <div className="grid gap-6">
                  <Button variant="outline" type="button" onClick={() => signIn('google')}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M20.29 11.07A12 12 0 0 0 6 11.07" />
                      <path d="M22.5 12h-2.17M1.5 12h2.17" />
                      <path d="M12 2.5V4.67" />
                      <path d="M12 19.33V21.5" />
                      <path d="M4.22 4.22L5.78 5.78" />
                      <path d="M18.22 18.22L19.78 19.78" />
                      <path d="M4.22 19.78L5.78 18.22" />
                      <path d="M18.22 5.78L19.78 4.22" />
                    </svg>
                    Google
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
