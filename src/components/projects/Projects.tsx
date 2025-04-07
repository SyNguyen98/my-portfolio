import {memo, useEffect} from "react"
import {useTranslation} from "react-i18next";
import AOS from 'aos';
import SectionTitle from "../SectionTitle.tsx";
import ProjectCard from "./ProjectCard.tsx";
import {PROJECTS} from "../../constants/projects.ts";

function Projects() {
    const {t} = useTranslation();

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

            <SectionTitle title={t('projects.title')} subTitle={t('projects.sub_title')}/>

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