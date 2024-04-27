import NavBar from "@/components/navbar";
import Landing from "./(pages)/home/page";
import Footer from "@/components/footer";

export const metadata = {
  title: "Hearts Home Academy",
  description: "Building Blocks for Dreams",
};

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Landing />
      <Footer />
    </main>
  );
}
