import {memo, useEffect, useMemo} from "react"
import {Code, ContactPage, Description, EmojiEvents, Public} from '@mui/icons-material';
import AOS from 'aos'
import {PROJECTS} from "../../constants/projects.ts";
import {ACHIEVEMENTS} from "../../constants/achievements.ts";
import {Trans, useTranslation} from "react-i18next";
import SectionTitle from "../SectionTitle.tsx";
import StatCard from "./StatCard.tsx";

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

                    <img src='https://github.com/SyNguyen98/image-storage/blob/main/my-portfolio/Avatar.webp?raw=true'
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

function About() {
    const {t} = useTranslation();
    
    const {yearExperience} = useMemo(() => {
        const startDate = new Date("2020-03-02");
        const today = new Date();
        const experience = today.getFullYear() - startDate.getFullYear() -
            (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

        return {
            yearExperience: experience
        };
    }, []);

    const statsData = [
        {
            icon: Public,
            color: "from-[#6366f1] to-[#a855f7]",
            value: yearExperience,
            label: t('about_me.stats.experience.title'),
            description: t('about_me.stats.experience.description'),
            animation: "fade-left",
        },
        {
            icon: Code,
            color: "from-[#6366f1] to-[#a855f7]",
            value: PROJECTS.length,
            label: t('about_me.stats.projects.title'),
            description: t('about_me.stats.projects.description'),
            animation: "fade-right",
        },
        {
            icon: EmojiEvents,
            color: "from-[#a855f7] to-[#6366f1]",
            value: ACHIEVEMENTS.length,
            label: t('about_me.stats.achievements.title'),
            description: t('about_me.stats.achievements.description'),
            animation: "fade-up",
        }
    ];

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

    return (
        <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
             id="About">

            <SectionTitle title={t('about_me.title')} subTitle={t('about_me.sub_title')}/>

            <div className="w-full mx-auto pt-8 sm:pt-12 relative">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                            data-aos="fade-right"
                            data-aos-duration="1000">
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                                {t('about_me.hello')}
                            </span>
                            <span className="block mt-4 text-gray-200"
                                  data-aos="fade-right"
                                  data-aos-duration="1300">
                                {t('about_me.name')}
                            </span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
                           data-aos="fade-right"
                           data-aos-duration="1500">
                            <Trans i18nKey="about_me.description" components={{ b: <strong /> }} />
                        </p>

                        <div
                            className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
                            <a href="https://github.com/SyNguyen98/image-storage/blob/main/my-portfolio/files/cv.pdf?raw=true" download="cv.pdf" className="w-full lg:w-auto">
                                <button data-aos="fade-up"
                                        data-aos-duration="800"
                                        className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow cursor-pointer">
                                    <Description className="w-4 h-4 sm:w-5 sm:h-5"/>
                                    {t('about_me.buttons.download')}
                                </button>
                            </a>
                            <a href="#Contact" className="w-full lg:w-auto">
                                <button data-aos="fade-up"
                                        data-aos-duration="1000"
                                        className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200 cursor-pointer">
                                    <ContactPage className="w-4 h-4 sm:w-5 sm:h-5"/>
                                    {t('about_me.buttons.contact')}
                                </button>
                            </a>
                        </div>
                    </div>

                    <ProfileImage/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
                    {statsData.map((stat) => (
                        <StatCard key={stat.label} {...stat}/>
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