import Header from "./components/Header";
import Hero from "./components/Hero";
import Competencies from "./components/Competencies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-canvas text-text-primary min-h-dvh overflow-x-hidden">
      <Header />

   
      <main className="max-w-[1600px] mx-auto pt-24 pb-12 px-6 lg:px-16">
        <Hero />
        <Competencies />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}
