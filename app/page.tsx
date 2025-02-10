import Approch from "@/components/Approch";
import Events from "@/components/Events";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import  {FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProject />
        <Events />
        <Experience />
        <Approch />
        <Footer />
      </div>
    </main>
  );
}
