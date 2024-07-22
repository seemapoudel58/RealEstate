import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Values/Values";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <div className="white-gradient"></div>
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Values />
      <Contact/>
      <GetStarted/>
    </div>
  );
}

export default App;
