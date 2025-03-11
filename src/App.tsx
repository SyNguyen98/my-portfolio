import {Fragment, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import {AnimatePresence} from "framer-motion";
import WelcomeScreen from "./components/WelcomeScreen.tsx";
import Navbar from "./components/Navbar.tsx";
import AnimatedBackground from './components/Background.tsx';
import Introduction from "./components/Introduction.tsx";
import About from "./components/about/About.tsx";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import ContactPage from "./components/contact/Contact.tsx";
import ProjectDetail from "./components/projects/ProjectDetail.tsx";
import Footer from "./components/Footer.tsx";
import 'aos/dist/aos.css';

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <BrowserRouter basename="/my-portfolio">
            <Routes>
                <Route path="/" element={
                    <Fragment>
                        <AnimatePresence mode="wait">
                            {showWelcome && (
                                <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)}/>
                            )}
                        </AnimatePresence>

                        {!showWelcome && (
                            <center>
                                <Navbar/>
                                <AnimatedBackground />
                                <Introduction />
                                <About />
                                <Portfolio />
                                <ContactPage />
                                <Footer/>
                            </center>
                        )}
                    </Fragment>
                }/>
                <Route path="/projects/:id" element={
                    <Fragment>
                        <ProjectDetail />
                        <Footer />
                    </Fragment>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
