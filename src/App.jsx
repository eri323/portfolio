import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Competencies from "./components/Competencies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-canvas text-text-primary min-h-dvh overflow-x-hidden">
      <div className="noise-overlay" aria-hidden />
      <Header />
      <main className="relative z-[2] max-w-[1600px] mx-auto pt-24 pb-12 px-6 lg:px-16">
        <Hero />
        <About />
        <Services />
        <Competencies />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
