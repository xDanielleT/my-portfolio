import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Footer } from "./components/Footer";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { Playground } from "./components/sections/Playground";
import { Contact } from "./components/sections/Contact";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="page-bg" aria-hidden="true" />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Home />
        <Projects />
        <Playground />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
