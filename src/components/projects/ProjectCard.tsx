import {Link} from "react-router";
import {useTranslation} from "react-i18next";
import {Project} from '../../models/project.ts';
import {MdArrowForward, MdLink} from "react-icons/md";

type Props = {
    project: Project;
}

const ProjectCard = ({project}: Props) => {
    const {t} = useTranslation();

    return (
        <div className="group relative w-full">
            <div
                className="relative overflow-hidden rounded-xl bg-layered-slate backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-deep-purple/20">
                <div className="relative p-5 z-10">
                    <div className="relative overflow-hidden rounded-lg">
                        <img src={project.imageUrl}
                             alt={project.title}
                             className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
                    </div>

                    <div className="mt-4 space-y-3">
                        <h3 className="text-xl font-semibold text-white">
                            {project.title}
                        </h3>

                        <p className="text-ghost-white text-sm leading-relaxed line-clamp-2">
                            {t(project.description)}
                        </p>

                        <div className="pt-4 flex items-center justify-between">
                            <Link to={`/projects?id=${project.id}`}
                                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                                <span className="text-sm font-medium">
                                    {t('projects.detail_btn')}
                                </span>
                                <MdArrowForward className="w-6 h-6"/>
                            </Link>

                            {project.link && (
                                <a href={project.link || "#"}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex items-center space-x-2 text-neon-cyan hover:text-neon-cyan/80 transition-colors duration-200">
                                    <span className="text-sm font-medium">
                                        {t('projects.demo_btn')}
                                    </span>
                                    <MdLink className="w-6 h-6"/>
                                </a>
                            )}
                        </div>
                    </div>

                    <div
                        className="absolute inset-0 border border-white/0 group-hover:border-steel-blue rounded-xl transition-colors duration-300 -z-50"/>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;