import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import QueryProvider from "./providers/QueryProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProviderClient } from "./providers/ChakraProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartik Malik",
  description: "FrontEnd Developer",
  openGraph:{
    title:"Kartik Malik",
    description:"FrontEnd Developer",
    images:""
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProviderClient>
          <QueryProvider>
            <Navbar />
            {children}
            <ToastContainer />
            <Footer />
          </QueryProvider>
        </ChakraProviderClient>

      </body>
    </html>
  );
}
