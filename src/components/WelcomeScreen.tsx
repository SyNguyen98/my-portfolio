import {memo, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {AnimatePresence, motion} from 'framer-motion';
import {Variants} from "motion-dom";
import AOS from 'aos';
import {IconType} from "react-icons";
import {MdCode, MdLanguage, MdPerson} from "react-icons/md";
import {FaGithub} from "react-icons/fa";

const TextWriter = () => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const text = "synguyen.id.vn";
        let index = 0;
        const timer = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 200);

        return () => clearInterval(timer);
    }, []);

    return (
        <span className="inline-block">
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const IconButton = ({Icon}: { Icon: IconType }) => (
    <div className="relative group hover:scale-110 transition-transform duration-300">
        <div
            className="absolute -inset-2 bg-linear-to-r from-cobalt-blue to-deep-purple rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300"/>
        <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"/>
        </div>
    </div>
);

const WelcomeScreen = ({onLoadingComplete}: { onLoadingComplete: (loadingComplete?: boolean) => void }) => {
    const [isLoading, setIsLoading] = useState(true);

    const {t} = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
        });

        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                onLoadingComplete?.();
            }, 1000);
        }, 4000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    const containerVariants: Variants = {
        exit: {
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                when: "beforeChildren",
                delayChildren: 0.1
            }
        }
    };

    const childVariants: Variants = {
        exit: {
            y: -20,
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            }
        }
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div className="fixed inset-0 bg-layered-slate"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit="exit"
                            variants={containerVariants}>
                    <div className="relative min-h-screen flex items-center justify-center px-4">
                        <div className="w-full max-w-4xl mx-auto">
                            {/* Icons */}
                            <motion.div className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12"
                                        variants={childVariants}>
                                {[MdCode, MdPerson, FaGithub].map((Icon, index) => (
                                    <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                                        <IconButton Icon={Icon}/>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Welcome Text */}
                            <motion.div className="text-center mb-6 sm:mb-8 md:mb-12"
                                        variants={childVariants}>
                                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
                                    <div className="mb-2 sm:mb-4">
                                        <span data-aos="fade-right" data-aos-delay="200"
                                              className="py-2 inline-block px-2 bg-linear-to-r from-white  to-ghost-white bg-clip-text text-transparent">
                                            {t('welcome.1')}
                                        </span>{' '}
                                        <span data-aos="fade-right" data-aos-delay="400"
                                              className="py-2 inline-block px-2 bg-linear-to-r from-ghost-white to-white bg-clip-text text-transparent">
                                            {t('welcome.2')}
                                        </span>{' '}
                                        <span data-aos="fade-right" data-aos-delay="600"
                                              className="py-2 inline-block px-2 bg-linear-to-r from-white  to-ghost-white bg-clip-text text-transparent">
                                            {t('welcome.3')}
                                        </span>
                                    </div>
                                    <div>
                                        <span data-aos="fade-up" data-aos-delay="800"
                                              className="py-2 inline-block px-2 bg-linear-to-r from-cobalt-blue to-deep-purple bg-clip-text text-transparent">
                                            {t('welcome.4')}
                                        </span>{' '}
                                        <span data-aos="fade-up" data-aos-delay="1000"
                                              className="py-2 inline-block px-2 bg-linear-to-r from-cobalt-blue to-deep-purple bg-clip-text text-transparent">
                                            {t('welcome.5')}
                                        </span>
                                    </div>
                                </h1>
                            </motion.div>

                            {/* Website Link */}
                            <motion.div className="text-center"
                                        variants={childVariants}
                                        data-aos="fade-up"
                                        data-aos-delay="1200">
                                <div
                                   className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-300">
                                    <div
                                        className="absolute inset-0 bg-linear-to-r from-cobalt-blue/20 to-deep-purple/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"/>
                                    <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                                        <MdLanguage className="w-4 h-4 sm:w-5 sm:h-5 text-cobalt-blue"/>
                                        <span
                                            className="bg-linear-to-r from-deep-purple to-cobalt-blue bg-clip-text text-transparent">
                                            <TextWriter />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default memo(WelcomeScreen);