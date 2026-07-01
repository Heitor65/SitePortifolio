import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heitor Lima | Portfólio",
  description: "Desenvolvedor backend Python/TypeScript | Engenharia da Computação IBMEC",
  openGraph: {
    title: "Heitor Lima",
    description: "Portfólio.",
    url: "#",
    siteName: "Heitor Lima",
    images: [
      {
        url: "/images/cards/portifolio.png",
        width: 1200,
        height: 630,
        alt: "Portfólio Heitor Lima",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
