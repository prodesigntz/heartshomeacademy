"use client";

import { Inter, Fredoka } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Title } from "@/components/texties";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";


// Fonts inputs
const fredoka_init = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

// export const metadata = {
//   title: "Hearts Home Academy",
//   description: "Building Blocks for Dreams",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Extract the page name from the pathname
  const pageName = pathname.split("/").pop();

  return (
    <div>
      <NavBar />
      <section className=" text-white bg-[url('/images/heros/bghero.jpg')] bg-cover bg-center  bg-slate-700 bg-blend-overlay bg-no-repeat">
        <div className="psektion space-y-10">
          <div className="respons sektion md:grid-cols-5 text-white">
            <div></div>
            <div className="col-span-3 capitalize">
              <Title subHeading="Hearts Home Academy" first={pageName} />
              <div className="flex justify-center ">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/"
                        className="text-white hover:text-white"
                      >
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash className="text-white" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-white capitalize">
                        {pageName}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div></div>
            </div>

            <div></div>
          </div>
        </div>
      </section>
      {children}
      <Footer />
    </div>
  );
}
