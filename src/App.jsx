import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Competencies from "./components/Competencies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-canvas text-text-primary min-h-dvh overflow-x-hidden">
      <Header />
      <Sidebar />

   
      <main className="lg:ml-64 pt-24 pb-12 px-6 lg:px-12">
        <Hero />
        <Competencies />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
