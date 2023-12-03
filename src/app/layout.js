
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsapIcon from "@/components/WhatsapIcon";
import AuthContextProvider from "@/contexts/authContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desiderium sex shop",
  description: "Tienda erotica Desiderium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Tiro+Devanagari+Hindi&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <main className="font-global">
          <Header />
          <div className="w-full flex flex-col min-h-screen mt-28">
            {/* {children} */}
            <AuthContextProvider>{children}</AuthContextProvider>
          </div>
          <Footer />
         <WhatsapIcon/>
        </main>
      </body>
    </html>
  );
}
