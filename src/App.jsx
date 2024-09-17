import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
    <NavBar/>
    {/* Main */}
    <Section1/>         {/*Introduction*/}
    <Section2/>         {/*About Me*/}
    <Section3/>         {/*Porfolio*/}
    <Section4/>         {/*Hire me*/}
    <Contact/>
    {/* Footer */}
    </>
  )
}

export default App