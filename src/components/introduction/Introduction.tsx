import {memo, useCallback, useEffect, useState} from "react"
import {GitHub, Instagram, Link as ExternalLink, LinkedIn, Mail} from '@mui/icons-material';
import {DotLottieReact} from '@lottiefiles/dotlottie-react'
import AOS from 'aos'
import {GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL} from "../../constants";
import StatusBadge from "./StatusBadge.tsx";
import MainTitle from "./MainTitle.tsx";
import CTAButton from "./CTAButton.tsx";
import SocialLink from "./SocialLink.tsx";

// Constants
const TYPING_SPEED = 50;
const ERASING_SPEED = 20;
const PAUSE_DURATION = 2000;
const WORDS = ["From A Physics Student", "To A Software Engineer"];
const SLOGAN = "Passionate about technology, crafting websites that inspire and empower others.";
const TECH_STACK = ["React", "Typescript", "Spring Boot", "Microsoft Azure"];
const SOCIAL_LINKS = [
    {icon: GitHub, link: GITHUB_URL},
    {icon: LinkedIn, link: LINKEDIN_URL},
    {icon: Instagram, link: INSTAGRAM_URL}
];

const Introduction = () => {
    const [text, setText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    // Optimize AOS initialization
    useEffect(() => {
        const initAOS = () => {
            AOS.init({
                once: true,
                offset: 10,
            });
        };

        initAOS();
        window.addEventListener('resize', initAOS);
        return () => window.removeEventListener('resize', initAOS);
    }, []);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);

    // Optimize typing effect
    const handleTyping = useCallback(() => {
        if (isTyping) {
            if (charIndex < WORDS[wordIndex].length) {
                setText(prev => prev + WORDS[wordIndex][charIndex]);
                setCharIndex(charIndex + 1);
            } else {
                setTimeout(() => setIsTyping(false), PAUSE_DURATION);
            }
        } else if (charIndex > 0) {
            setText(prev => prev.slice(0, -1));
            setCharIndex(charIndex - 1);
        } else {
            setWordIndex((wordIndex + 1) % WORDS.length);
            setIsTyping(true);
        }
    }, [charIndex, isTyping, wordIndex]);

    useEffect(() => {
        const timeout = setTimeout(
            handleTyping,
            isTyping ? TYPING_SPEED : ERASING_SPEED
        );
        return () => clearTimeout(timeout);
    }, [handleTyping]);

    // Lottie configuration
    const lottieOptions = {
        src: "NLbpVqGegK.lottie",
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true,
        },
        style: {width: "100%", height: "100%"},
        className: `w-full h-full transition-all duration-500 ${
            isHovering
                ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
                : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
        }`
    };

    return (
        <div className="min-h-screen mt-16 sm:mt-0 bg-[#030014] overflow-hidden" id="Home">
            <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <div className="container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen">
                    <div
                        className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
                        {/* Left Column */}
                        <div
                            className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
                            data-aos="fade-right"
                            data-aos-delay="200">
                            <div className="space-y-4 sm:space-y-6">
                                <StatusBadge/>
                                <MainTitle/>

                                {/* Typing Effect */}
                                <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                                    <span
                                        className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                                        {text}
                                    </span>
                                    <span
                                        className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"/>
                                </div>

                                {/* Description */}
                                <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                                   data-aos="fade-up"
                                   data-aos-delay="1000">
                                    {SLOGAN}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up"
                                     data-aos-delay="1200">
                                    {TECH_STACK.map((tech, index) => (
                                        <div key={index}
                                             className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                                            {tech}
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up"
                                     data-aos-delay="1400">
                                    <CTAButton href="#Projects" text="Projects" icon={ExternalLink}/>
                                    <CTAButton href="#Contact" text="Contact" icon={Mail}/>
                                </div>

                                {/* Social Links */}
                                <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up"
                                     data-aos-delay="1600">
                                    {SOCIAL_LINKS.map((social, index) => (
                                        <SocialLink key={index} {...social} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Optimized Lottie Animation */}
                        <div
                            className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            data-aos="fade-left"
                            data-aos-delay="600">
                            <div className="relative w-full opacity-90">
                                <div className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out
                                                ${isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"}`}/>
                                <div
                                    className={`relative z-10 w-full opacity-90 transform transition-transform duration-500 ${isHovering ? "scale-105" : "scale-100"}`}>
                                    <DotLottieReact {...lottieOptions} />
                                </div>

                                <div
                                    className={`absolute inset-0 pointer-events-none transition-all duration-700 ${isHovering ? "opacity-50" : "opacity-20"}`}>
                                    <div
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 
                                        ${isHovering ? "scale-110" : "scale-100"}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Introduction);