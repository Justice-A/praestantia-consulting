import Image from "next/image";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NotableProjects from "@/components/home/NotableProjects";
import Services from "@/components/home/Services";
import ServiceAreas from "@/components/home/ServiceAreas";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
export default function Home() {
  return (
    <div> 
    <Hero />
    <WhyChooseUs/>
    <NotableProjects />
    <Services/>
    <ServiceAreas/>
    <FAQ />
    <CTA/>
    </div>
         

  );
}
