import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-xl mx-auto my-4">
          <Link
            href="/"
            className={cn(
              "text-2xl font-bold flex items-center gap-2",
              buttonVariants({ variant: "outline" })
            )}
          >
            <HomeIcon size={24} />
            <span>Home</span>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
