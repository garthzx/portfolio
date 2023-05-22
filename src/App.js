import "./styles/Shared.css";
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AdditionalAbout from "./components/AdditionalAbout";

function App() {
  return (
    <div className="container">
      <Header/>
      <About/>
      <Projects/>
      <AdditionalAbout/>
      <Contact/>
    </div>
  );
}

export default App;
