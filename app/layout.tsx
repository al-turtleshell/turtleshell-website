import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandre LEROY - Software Craftman",
  description: "Alexandre LEROY - Software Craftman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="grid max-w-[1200px] grid-cols-12 p-element-m md:pb-[0px] m-auto gap-element-l">
          <div className="col-span-12 mb-section-s md:mb-section-m lg:mb-section-l">
            <Menu />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
