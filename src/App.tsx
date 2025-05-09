import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import {AnimatePresence} from "framer-motion";
import WelcomeScreen from "./components/WelcomeScreen.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import AnimatedBackground from './components/Background.tsx';
import Introduction from "./components/homepage/Homepage.tsx";
import About from "./components/about/About.tsx";
import Projects from "./components/projects/Projects.tsx";
import ProjectDetail from "./components/project-detail/ProjectDetail.tsx";
import Achievements from "./components/achievements/Achievements.tsx";
import TechStacks from "./components/tech-stacks/TechStacks.tsx";
import ContactPage from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <AnimatePresence mode="wait">
                            {showWelcome && (
                                <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)}/>
                            )}
                        </AnimatePresence>

                        {!showWelcome && (
                            <center>
                                <Navbar/>
                                <AnimatedBackground/>
                                <Introduction/>
                                <About/>
                                <Projects/>
                                <Achievements/>
                                <TechStacks/>
                                <ContactPage/>
                                <Footer/>
                            </center>
                        )}
                    </>
                }/>
                <Route path="/projects/:id" element={
                    <>
                        <ProjectDetail/>
                        <Footer/>
                    </>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
