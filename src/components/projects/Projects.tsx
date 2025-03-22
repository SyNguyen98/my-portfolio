import {memo, useEffect} from "react"
import {AutoAwesome} from '@mui/icons-material';
import AOS from 'aos'
import ProjectCard from "./ProjectCard.tsx";
import {PROJECTS} from "../../constants/projects.ts";

function Projects() {

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
             id="Projects">

            <div className="text-center lg:mb-8 mb-2 px-[5%]">
                <div className="inline-block relative group">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                        data-aos="zoom-in-up"
                        data-aos-duration="600">
                        Projects
                    </h2>
                </div>
                <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
                   data-aos="zoom-in-up"
                   data-aos-duration="800">
                    <AutoAwesome className="w-5 h-5 text-purple-400"/>
                    Bringing ideas to life with innovative and impactful projects.
                    <AutoAwesome className="w-5 h-5 text-purple-400"/>
                </p>
            </div>

            <div className="w-full mx-auto pt-8 sm:pt-12 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                    {PROJECTS.map((project, index) => (
                        <div key={project.id}
                             data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                             data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                            <ProjectCard project={project}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default memo(Projects);