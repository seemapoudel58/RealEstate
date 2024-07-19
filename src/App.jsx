import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";

function App() {
  return (
    <div className="App">
      <div className="white-gradient"></div>
      <Header />
      <Hero />
      <Companies />
    </div>
  );
}

export default App;
