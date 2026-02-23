import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router";
import {useTranslation} from "react-i18next";
import {Project} from "../../models/project.ts";
import {PROJECTS} from "../../constants/projects.ts";
import ProjectStats from "./ProjectStats.tsx";
import FeatureItem from "./FeatureItem.tsx";
import TechBadge from "./TechBadge.tsx";
import Background from "../Background.tsx";
import {MdArrowBack, MdChevronRight, MdCode, MdOpenInNew, MdStar} from "react-icons/md";
import {FaGithub} from "react-icons/fa";

function ProjectDetail() {
    const [project, setProject] = useState<Project | null>(null);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setProject(PROJECTS.find(project => project.id === searchParams.get("id")) || null);
        }, 0);
    }, [searchParams]);

    return (
        project && (
            <div className="min-h-screen bg-deep-space px-[2%] sm:px-0 relative overflow-hidden">
                {/* Background animations remain unchanged */}
                <Background/>

                <div className="relative">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
                        <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
                            <button onClick={() => navigate(-1)}
                                    className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 backdrop-blur-xl rounded-xl text-white hover:text-white/80 transition-all duration-300 border-2 border-deep-purple hover:border-deep-purple/80 text-sm md:text-base cursor-pointer">
                                <MdArrowBack
                                    className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform"/>
                                <span>
                                    {t('projects.back_btn')}
                                </span>
                            </button>
                            <div
                                className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-ghost-white">
                                <span>
                                    {t('projects.title')}
                                </span>
                                <MdChevronRight className="w-3 h-3 md:w-4 md:h-4"/>
                                <span className="text-white/90 truncate">
                                    {project.title}
                                </span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
                            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
                                <div className="space-y-4 md:space-y-6">
                                    <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
                                        {project.title}
                                    </h1>
                                    <div className="relative h-1 w-16 md:w-24">
                                        <div
                                            className="absolute inset-0 bg-linear-to-r from-cobalt-blue to-deep-purple rounded-full animate-pulse"/>
                                        <div
                                            className="absolute inset-0 bg-linear-to-r from-cobalt-blue to-deep-purple rounded-full blur-sm"/>
                                    </div>
                                </div>

                                <div className="prose prose-invert max-w-none">
                                    <p className="text-base md:text-lg text-ghost-white leading-relaxed">
                                        {t(project.description)}
                                    </p>
                                </div>

                                <ProjectStats project={project}/>

                                <div className="flex flex-wrap gap-3 md:gap-4">
                                    {/* Action buttons */}
                                    {project.link && (
                                        <a href={project.link}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-neon-cyan hover:from-neon-cyan/20 hover:to-neon-cyan/10 text-black rounded-xl transition-all duration-300 backdrop-blur-xl overflow-hidden text-sm md:text-base">
                                            <div
                                                className="absolute inset-0 m-0 translate-y-full bg-linear-to-r from-cobalt-blue/10 to-deep-purple/10 transition-transform duration-300 group-hover:translate-y-[0%]"/>
                                            <MdOpenInNew
                                                className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform"/>
                                            <span className="relative font-medium">
                                                {t('projects.demo_btn')}
                                            </span>
                                        </a>
                                    )}

                                    {project.githubLink && (
                                        <a href={project.githubLink}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-transparent text-white rounded-xl transition-all duration-300 border-2 border-deep-purple hover:border-deep-purple/40 overflow-hidden text-sm md:text-base">
                                            <div
                                                className="absolute inset-0 m-0 translate-y-full bg-linear-to-r from-cobalt-blue/10 to-deep-purple/10 transition-transform duration-300 group-hover:translate-y-[0%]"/>
                                            <FaGithub
                                                className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform"/>
                                            <span className="relative font-medium">
                                                GitHub
                                            </span>
                                        </a>
                                    )}
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-white/80 mt-12 md:mt-0 flex items-center gap-2 md:gap-3">
                                        <MdCode className="w-4 h-4 md:w-5 md:h-5"/>
                                        {t('projects.tech_used')}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {project.techStack.map((tech, index) => (
                                            <TechBadge key={index} icon={tech.icon} tech={tech.name}/>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 md:space-y-10 animate-slideInRight">
                                <div
                                    className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                                    <div
                                        className="absolute inset-0 bg-linear-to-t from-layered-slate via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                    <img src={project.imageUrl}
                                         alt={project.title}
                                         className="w-full  object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"/>
                                    <div
                                        className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl"/>
                                </div>

                                {/* Key Features */}
                                <div
                                    className="bg-layered-slate backdrop-blur-xl rounded-2xl p-8 border border-steel-blue space-y-6 hover:border-white/20 transition-colors duration-300 group">
                                    <h3 className="text-xl font-semibold text-neon-cyan flex items-center gap-3">
                                        <MdStar className="w-5 h-5"/>
                                        {t('projects.features')}
                                    </h3>
                                    <ul className="list-none space-y-2">
                                        {project.features.map((feature, index) => (
                                            <FeatureItem key={index} feature={feature}/>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>
                    {`
                        .animate-fadeIn {
                            animation: fadeIn 0.5s ease-out;
                        }
                        .animate-slideInLeft {
                            animation: slideInLeft 0.5s ease-out;
                        }
                        .animate-slideInRight {
                            animation: slideInRight 0.5s ease-out;
                        }
                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                                transform: translateY(1rem);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        @keyframes slideInLeft {
                            from {
                                opacity: 0;
                                transform: translateX(-1rem);
                            }
                            to {
                                opacity: 1;
                                transform: translateX(0);
                            }
                        }
                        @keyframes slideInRight {
                            from {
                                opacity: 0;
                                transform: translateX(1rem);
                            }
                            to {
                                opacity: 1;
                                transform: translateX(0);
                            }
                        }
                    `}
                </style>
            </div>
        )
    )
}

export default ProjectDetail;
