import Navbar from "./component/navbar";
import Intro from "./component/Intro/intro";
import Skills from "./component/Skills/skills";
import Works from "./component/Works/works";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;