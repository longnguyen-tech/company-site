import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Brand from "@/components/Brand";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import Purpose from "@/components/Purpose";
import Expect from "@/components/Expect";
import Process from "@/components/Process";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Brand />
        <Services />
        <CtaBanner />
        <Purpose />
        <Expect />
        <Process />
        <CtaBanner />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
