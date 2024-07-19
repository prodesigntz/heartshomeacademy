import { Inter, Fredoka } from "next/font/google";
import "../globals.css";
import SideBar from "@/components/dashboard/sideBar";
import DashboardHeader from "@/components/dashboard/dashboardHeader";
import PageWrapper from "@/components/dashboard/pageWrapper";

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
    <div className="flex">
      <div className="w-64 h-auto space-y-5 p-5 hidden md:block max-h-full bg-heartssecondary">
        <div className="bg-heartsprimary p-5  rounded-lg  sticky top-0 z-20 shadow-md ">
          <h1 className="fredoka text-white text-lg font-bold antialiased">
            Heart Home Academy
          </h1>
        </div>

        <SideBar />
      </div>
      <div className="flex-1 p-5">
        <DashboardHeader />
        <PageWrapper>{children}</PageWrapper>
      </div>
    </div>
  );
}
