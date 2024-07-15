import { Inter, Fredoka } from "next/font/google";
//import "./globals.css";
import "../globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { AppContextProvider } from "@/context/AppContext";

// Fonts inputs
const inter = Inter({ subsets: ["latin"] });

const fredoka_init = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata = {
  title: "Admin Hearts Home Academy",
  description: "Building Blocks for Dreams",
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* <AppContextProvider>
      
      </AppContextProvider> */}

      {/* <NavBar/> */}
      {children}
      {/* <Footer/>  */}
    </>
  );
}
