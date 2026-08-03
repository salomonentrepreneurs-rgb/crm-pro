// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRM Pro — A professional AI-powered CRM platform with lead management, deal pipeline, AI scoring, team collaboration, and analytics dashboards",
  description: "A professional AI-powered CRM platform with lead management, deal pipeline, AI scoring, team collaboration, and analytics dashboards — Powered by Solo IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        {children}
      </body>
    </html>
  );
}
