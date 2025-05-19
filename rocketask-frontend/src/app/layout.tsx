import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import ReduxProvider from './StoreProvider'
import "./globals.css";

const poppins = IBM_Plex_Sans({
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Rocketask - TODO List",
  description: "A simple TODO list app By RocketCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.className} antialiased`}
      >
      	<ReduxProvider>
        	{children}
       </ReduxProvider>
      </body>
    </html>
  );
}
