import {memo, useEffect, useState} from "react"
import {useTranslation} from "react-i18next";
import {GITHUB_URL, LINKEDIN_URL, MAILTO_URL} from "../../constants";
import StatusBadge from "./StatusBadge.tsx";
import DownloadCVButton from "./DownloadCVButton.tsx";
import ProjectButton from "./ProjectButton.tsx";
import SocialLink from "./SocialLink.tsx";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {MdMail} from "react-icons/md";

// Constants
const TYPING_SPEED = 50;
const ERASING_SPEED = 20;
const PAUSE_DURATION = 2000;
const TECH_STACK = ["React", "TypeScript", "Spring Boot", "Microsoft Azure"];
const SOCIAL_LINKS = [
    {icon: FaGithub, link: GITHUB_URL},
    {icon: FaLinkedin, link: LINKEDIN_URL},
    {icon: MdMail, link: MAILTO_URL}
];

const Homepage = () => {
    const [text, setText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isHovering, setIsHovering] = useState(false)

    const {t} = useTranslation();

    useEffect(() => {
        const WORDS = [t('homepage.from'), t('homepage.to')];
        const timeout = setTimeout(() => {
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
            },
            isTyping ? TYPING_SPEED : ERASING_SPEED
        );
        return () => clearTimeout(timeout);
    }, [charIndex, isTyping, t, wordIndex]);

    return (
        <div className="min-h-screen sm:mt-0 lg:mt-10 bg-deep-space overflow-hidden" id="Home">
            <div className="relative z-10 transition-all duration-1000">
                <div
                    className="mx-auto px-6 sm:px-[10%] flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
                    {/* Left Column */}
                    <div
                        className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
                        data-aos="fade-right"
                        data-aos-delay="200">
                        <div className="space-y-4 sm:space-y-6">
                            <StatusBadge/>

                            {/* Main Title */}
                            <div className="space-y-2"
                                 data-aos="fade-up"
                                 data-aos-delay="600">
                                <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                                        <span className="relative inline-block">
                                            <span
                                                className="absolute -inset-2 bg-linear-to-r from-cobalt-blue to-deep-purple blur-2xl opacity-20"/>
                                            <span
                                                className="relative text-white">
                                                {t('homepage.above')}
                                            </span>
                                        </span>
                                    <br/>
                                    <span className="relative inline-block mt-4">
                                            <span
                                                className="absolute -inset-2 bg-linear-to-r from-cobalt-blue to-deep-purple blur-2xl opacity-20"/>
                                            <span
                                                className="relative text-deep-purple">
                                                {t('homepage.below')}
                                            </span>
                                        </span>
                                </h1>
                            </div>

                            {/* Typing Effect */}
                            <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                                    <span
                                        className="text-xl md:text-2xl bg-linear-to-r from-ghost-white to-zinc-white bg-clip-text text-transparent font-light">
                                        {text}
                                    </span>
                                <span
                                    className="w-0.75 h-6 bg-linear-to-t from-cobalt-blue to-deep-purple ml-1 animate-blink"/>
                            </div>

                            {/* Description */}
                            <p className="text-base md:text-lg text-ghost-white max-w-xl leading-relaxed font-light"
                               data-aos="fade-up"
                               data-aos-delay="1000">
                                {t('homepage.slogan')}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up"
                                 data-aos-delay="1200">
                                {TECH_STACK.map((tech, index) => (
                                    <div key={index}
                                         className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-pale-gray hover:bg-white/10 transition-colors">
                                        {tech}
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up"
                                 data-aos-delay="1400">
                                <DownloadCVButton/>
                                <ProjectButton/>
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

                    {/* Right Column - Animation */}
                    <div
                        className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-150 xl:h-187.5 relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        data-aos="fade-left"
                        data-aos-delay="600">
                        <div className="relative w-full opacity-90">
                            <div className={`absolute inset-0 bg-linear-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out
                                                ${isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"}`}/>
                            <div
                                className={`relative z-10 w-full opacity-90 transform transition-transform duration-500 ${isHovering ? "scale-105" : "scale-100"}`}>
                                <img
                                    src="https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/Developer-Animation.gif"
                                    alt="Developer Animation"
                                    className={`w-full h-full object-contain transition-all duration-500 ${
                                        isHovering
                                            ? "scale-[95%] sm:scale-[90%] md:scale-[90%] lg:scale-[90%] rotate-2"
                                            : "scale-[90%] sm:scale-[80%] md:scale-[80%] lg:scale-[80%]"
                                    }`}
                                />
                            </div>

                            <div
                                className={`absolute inset-0 pointer-events-none transition-all duration-700 ${isHovering ? "opacity-50" : "opacity-20"}`}>
                                <div
                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-linear-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 
                                        ${isHovering ? "scale-110" : "scale-100"}`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Homepage);