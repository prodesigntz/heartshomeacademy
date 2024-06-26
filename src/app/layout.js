// import { Inter, Fredoka } from "next/font/google";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";
// import NavBar from "@/components/navbar";
// import Footer from "@/components/footer";

// Fonts inputs
const inter = Inter({ subsets: ["latin"] });

const fredoka_init = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata = {
  title: "Hearts Home Academy",
  description: "Building Blocks for Dreams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${fredoka_init.variable}`}
      >
        {/* <NavBar/> */}
        {children}
        {/* <Footer/>  */}
      </body>
    </html>
  );
}
