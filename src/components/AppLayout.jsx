import About from './About'
import Navbar from './Navbar'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import Footer from './Footer'
import Home from './Home'

function AppLayout() {
    return (
        <div className="font-sans">
            <Navbar />
            <Home id="home" />
            <About id="about" />
            <Skills id="skills" />
            <Projects id="projects" />
            <Contact id="contact" />
            <Footer />
        </div>
    )
}

export default AppLayout
