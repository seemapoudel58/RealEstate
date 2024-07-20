import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Values/Values";

function App() {
  return (
    <div className="App">
      <div className="white-gradient"></div>
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Values />
    </div>
  );
}

export default App;
