import {useTranslation} from "react-i18next";
import {Project} from "../../models/project.ts";
import {MdCode, MdLayers} from "react-icons/md";

const ProjectStats = ({project}: { project: Project }) => {
    const {t} = useTranslation();

    return (
        <div className="grid grid-cols-2 gap-3 md:gap-4 p-1 md:p-2 rounded-xl overflow-hidden relative">
            <div
                className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-layered-slate p-2 md:p-3 rounded-lg border border-steel-blue">
                <div className="bg-steel-blue p-1.5 md:p-2 rounded-full">
                    <MdCode className="text-white/80 w-4 h-4 md:w-6 md:h-6"/>
                </div>
                <div className="grow">
                    <div className="text-lg md:text-xl font-semibold text-white/80">
                        {project.techStack.length}
                    </div>
                    <div className="text-[10px] md:text-xs text-ghost-white">
                        {t('projects.technologies')}
                    </div>
                </div>
            </div>

            <div
                className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-layered-slate p-2 md:p-3 rounded-lg border border-steel-blue">
                <div className="bg-steel-blue p-1.5 md:p-2 rounded-full">
                    <MdLayers className="text-white/80 w-4 h-4 md:w-6 md:h-6"/>
                </div>
                <div className="grow">
                    <div className="text-lg md:text-xl font-semibold text-white/80">
                        {project.features.length}
                    </div>
                    <div className="text-[10px] md:text-xs text-ghost-white">
                        {t('projects.features')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectStats;