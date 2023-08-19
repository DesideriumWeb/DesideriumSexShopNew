import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'tailwindcss/tailwind.css'; 
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desiderium sex shop",
  description: "Tienda erotica Desiderium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          <div className="w-full flex flex-col min-h-screen mt-16">{children}</div>
          <Footer />
        </main>
      </body>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></Script>
    </html>
  );
}
