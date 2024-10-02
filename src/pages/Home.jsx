import Hero from "../components/Hero"
import About from "./About"
import MySkills from "./mySkills"
import Projects from "./Projects"
import Services from "./Services"
function Home(){
    return <div>
        <Hero/>
        <About/>
        <MySkills/>
        <Projects/>
        <Services />
    </div>
}
export default Home