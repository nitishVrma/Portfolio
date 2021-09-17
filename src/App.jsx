import Topbar from "./components/topbar/Topbar";
  import Intro from "./components/intro/Intro";
  import Works from "./components/works/Works";
  import Contact from "./components/contact/Contact";
  import "./app.scss"
  import { useState } from "react";
  import Menu from "./components/menu/Menu";
  import About from "./components/about/About";
  import Skills from "./components/skills/Skills";

function App() {

  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
      <Intro></Intro>
      <About></About>
      <Works></Works>
      <Skills></Skills>
      <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
