
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsapIcon from "@/components/WhatsapIcon";
import AuthContextProvider from "@/contexts/authContext";
import { GA_TRACKING_ID } from '../../public/gtag';
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desiderium sex shop",
  description: "Tienda erotica Desiderium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Tiro+Devanagari+Hindi&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/icon/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/public/icon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <main className="font-global">
          <Header />
          <div className="w-full flex flex-col min-h-screen mt-28">
            {/* {children} */}
            <AuthContextProvider>{children}</AuthContextProvider>
          </div>
          <Footer />
          <WhatsapIcon />
        </main>
      </body>
    </html>
  );
}
