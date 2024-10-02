import Header from "./components/Header"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import About from "./pages/About"
import MySkills from "./pages/mySkills"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"
import Services from "./pages/Services"
function App(){
  return <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/myskills" element={<MySkills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />

      
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    <Footer/>
  </div>
}
export default App