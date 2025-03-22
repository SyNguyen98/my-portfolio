import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {ArrowBack, ChevronRight, Code, GitHub, OpenInNew, Star} from '@mui/icons-material';
import {Project} from "../../models/project.ts";
import {PROJECTS} from "../../constants/projects.ts";
import ProjectStats from "./ProjectStats.tsx";
import FeatureItem from "./FeatureItem.tsx";
import TechBadge from "./TechBadge.tsx";

function ProjectDetail() {
    const [project, setProject] = useState<Project | null>(null);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        setProject(PROJECTS.find(project => project.id === id) || null);
    }, [id]);

    return (
        project && (
            <div className="min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden">
                {/* Background animations remain unchanged */}
                <div className="fixed inset-0">
                    <div className="absolute -inset-[10px] opacity-20">
                        <div
                            className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"/>
                        <div
                            className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"/>
                        <div
                            className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"/>
                    </div>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"/>
                </div>

                <div className="relative">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
                        <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
                            <button onClick={() => navigate(-1)}
                                    className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base cursor-pointer">
                                <ArrowBack
                                    className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform"/>
                                <span>
                                    Back
                                </span>
                            </button>
                            <div
                                className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
                                <span>
                                    Projects
                                </span>
                                <ChevronRight className="w-3 h-3 md:w-4 md:h-4"/>
                                <span className="text-white/90 truncate">
                                    {project.title}
                                </span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
                            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
                                <div className="space-y-4 md:space-y-6">
                                    <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                                        {project.title}
                                    </h1>
                                    <div className="relative h-1 w-16 md:w-24">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"/>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm"/>
                                    </div>
                                </div>

                                <div className="prose prose-invert max-w-none">
                                    <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <ProjectStats project={project}/>

                                <div className="flex flex-wrap gap-3 md:gap-4">
                                    {/* Action buttons */}
                                    {project.link && (
                                        <a href={project.link}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base">
                                            <div
                                                className="absolute inset-0 m-0 translate-y-[100%] bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%]"/>
                                            <OpenInNew
                                                className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform"/>
                                            <span className="relative font-medium">
                                                Live Demo
                                            </span>
                                        </a>
                                    )}

                                    {project.githubLink && (
                                        <a href={project.githubLink}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base">
                                            <div
                                                className="absolute inset-0 m-0 translate-y-[100%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%]"/>
                                            <GitHub
                                                className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform"/>
                                            <span className="relative font-medium">
                                                GitHub
                                            </span>
                                        </a>
                                    )}
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-white/90 mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3">
                                        <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-400"/>
                                        Technologies Used
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
                                        className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                    <img src={project.imageUrl}
                                         alt={project.title}
                                         className="w-full  object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"/>
                                    <div
                                        className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl"/>
                                </div>

                                {/* Key Features */}
                                <div
                                    className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                                    <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                                        <Star
                                            className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300"/>
                                        Key Features
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
