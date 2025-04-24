
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarInput, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, SidebarHeader, SidebarInset} from '@/components/ui/sidebar';
import CategoryFilter from "@/components/CategoryFilter";
import PriceRangeFilter from "@/components/PriceRangeFilter";
import ConditionFilter from "@/components/ConditionFilter";
import LocationFilter from "@/components/LocationFilter";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Classificados Lite',
  description: 'Classificados App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <Navbar />
          <div className="flex h-screen">
            <Sidebar>
              <SidebarHeader>
                <SidebarInput placeholder="Pesquisar..." />
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Filtros</SidebarGroupLabel>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <CategoryFilter />
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <PriceRangeFilter />
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <ConditionFilter />
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <LocationFilter />
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <p className="text-center text-xs text-muted-foreground">
                  © {new Date().getFullYear()} Classificados Lite
                </p>
              </SidebarFooter>
            </Sidebar>
            <SidebarInset>
              {children}
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
