import {useEffect, memo, useMemo} from "react"
import {
    Description,
    Code,
    EmojiEvents,
    Public,
    ArrowUpward,
    AutoAwesome,
    SvgIconComponent
} from '@mui/icons-material';
import AOS from 'aos'
import {PROJECTS} from "../../constants/projects.ts";
import {ACHIEVEMENTS} from "../../constants/achievements.ts";

// Memoized Components
const Header = memo(() => (
    <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <div className="inline-block relative group">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                data-aos="zoom-in-up"
                data-aos-duration="600">
                About Me
            </h2>
        </div>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
           data-aos="zoom-in-up"
           data-aos-duration="800">
            <AutoAwesome className="w-5 h-5 text-purple-400"/>
            Transforming ideas into digital experiences
            <AutoAwesome className="w-5 h-5 text-purple-400"/>
        </p>
    </div>
));

const ProfileImage = memo(() => (
    <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
        <div className="relative group"
             data-aos="fade-up"
             data-aos-duration="1000">
            {/* Optimized gradient backgrounds with reduced complexity for mobile */}
            <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower"/>
                <div
                    className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50"/>
                <div
                    className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50"/>
            </div>

            <div className="relative">
                <div
                    className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                    <div
                        className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105"/>

                    {/* Optimized overlay effects - disabled on mobile */}
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block"/>
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block"/>

                    <img src={`${import.meta.env.BASE_URL}Avatar.webp`}
                         alt="Profile"
                         className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                         loading="lazy"/>

                    {/* Advanced hover effects - desktop only */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
                        <div
                            className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100"/>
                        <div
                            className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
));

const StatCard = memo(({icon: Icon, color, value, label, description, animation}: {
    icon: SvgIconComponent;
    color: string;
    value: number;
    label: string;
    description: string;
    animation: string;
}) => (
    <div data-aos={animation} data-aos-duration={1300} className="relative group">
        <div
            className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
            <div
                className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}/>

            <div className="flex items-center justify-between mb-4">
                <div
                    className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-white"/>
                </div>
                <span className="text-4xl font-bold text-white"
                      data-aos="fade-up-left"
                      data-aos-duration="1500"
                      data-aos-anchor-placement="top-bottom">
                    {value}
                </span>
            </div>

            <div>
                <p className="text-sm uppercase tracking-wider text-gray-300 mb-2"
                   data-aos="fade-up"
                   data-aos-duration="800"
                   data-aos-anchor-placement="top-bottom">
                    {label}
                </p>
                <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400"
                       data-aos="fade-up"
                       data-aos-duration="1000"
                       data-aos-anchor-placement="top-bottom">
                        {description}
                    </p>
                    <ArrowUpward className="w-4 h-4 text-white/50 group-hover:text-white transition-colors"/>
                </div>
            </div>
        </div>
    </div>
));

function About() {
    // Memoized calculations
    const {yearExperience} = useMemo(() => {
        const startDate = new Date("2020-03-02");
        const today = new Date();
        const experience = today.getFullYear() - startDate.getFullYear() -
            (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

        return {
            yearExperience: experience
        };
    }, []);

    // Optimized AOS initialization
    useEffect(() => {
        const initAOS = () => {
            AOS.init({
                once: false,
            });
        };

        initAOS();

        // Debounced resize handler
        let resizeTimer: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(initAOS, 250);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);

    // Memoized stats data
    const statsData = useMemo(() => [
        {
            icon: Public,
            color: "from-[#6366f1] to-[#a855f7]",
            value: yearExperience,
            label: "Years of Experience",
            description: "Continuous learning journey",
            animation: "fade-left",
        },
        {
            icon: Code,
            color: "from-[#6366f1] to-[#a855f7]",
            value: PROJECTS.length,
            label: "Total Projects",
            description: "Innovative web solutions crafted",
            animation: "fade-right",
        },
        {
            icon: EmojiEvents,
            color: "from-[#a855f7] to-[#6366f1]",
            value: ACHIEVEMENTS.length,
            label: "Achievements",
            description: "Professional skills validated",
            animation: "fade-up",
        }
    ], [yearExperience]);

    return (
        <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
             id="About">

            <Header/>

            <div className="w-full mx-auto pt-8 sm:pt-12 relative">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                            data-aos="fade-right"
                            data-aos-duration="1000">
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                                Hello, I am
                            </span>
                            <span className="block mt-2 text-gray-200"
                                  data-aos="fade-right"
                                  data-aos-duration="1300">
                                Nguyen Hong Sy Nguyen
                            </span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
                           data-aos="fade-right"
                           data-aos-duration="1500">
                            A Software Engineer at <b>Bosch Global Software Technologies Vietnam</b>, passionate about
                            technology and continuous learning.
                            I love exploring new tech stacks and building applications that not only solve real-world
                            problems but also serve my own.
                            <br/>
                            For me, coding is more than just work — it’s a way to create, innovate and bring ideas to
                            life. 🚀
                        </p>

                        <div
                            className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
                            <a href="/public/files/cv.pdf" download="cv.pdf" className="w-full lg:w-auto">
                                <button data-aos="fade-up"
                                        data-aos-duration="800"
                                        className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow cursor-pointer">
                                    <Description className="w-4 h-4 sm:w-5 sm:h-5"/>
                                    Download CV
                                </button>
                            </a>
                            <a href="#Projects" className="w-full lg:w-auto">
                                <button data-aos="fade-up"
                                        data-aos-duration="1000"
                                        className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200 cursor-pointer">
                                    <Code className="w-4 h-4 sm:w-5 sm:h-5"/>
                                    View Projects
                                </button>
                            </a>
                        </div>
                    </div>

                    <ProfileImage/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
                    {statsData.map((stat) => (
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>
            </div>

            <style>
                {`
                    .animate-spin-slower {
                        animation: spin 20s linear infinite;
                    }
                    
                    .animate-pulse-slow {
                        animation: pulse 2s infinite;
                    }
                    
                    .animate-float {
                        animation: float 6s infinite;
                    }
                    
                    @keyframes spin {
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                    
                    @keyframes pulse {
                        0%, 100% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0.5;
                        }
                    }
                    
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10%);
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default memo(About);