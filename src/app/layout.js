import { Inter } from "next/font/google";
import SideBar from "@/component/SideBar/SideBar";
import "./globals.scss";
import ThemeProvider from "@/SASS/Component/01- darkMode-Next/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
