import "./globals.css";
import { Montserrat } from "next/font/google";

import HomeContextProvider from "@/Context/HomeContext";
import ConfigContextProvider from "@/Context/ConfigContext";

import Menu from "@/Components/Menu";

const montSerrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Barber-software",
  description: "Gerencie seu negócio de uma forma mais fácil!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montSerrat.className}>
        <HomeContextProvider>
          <ConfigContextProvider>
          <div className="w-full min-h-screen flex justify-center bg-whiteOpacity overflow-x-hidden">
            {children}
          </div>
          <Menu />
          </ConfigContextProvider>
        </HomeContextProvider>
      </body>
    </html>
  );
}
