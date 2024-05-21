import { Montserrat } from "next/font/google";
import "./globals.css";
import HomeContextProvider from "@/Context/Home/HomeContext";

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
      <HomeContextProvider>
        <body className={montSerrat.className}>{children}</body>
      </HomeContextProvider>
    </html>
  );
}
