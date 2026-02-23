import {memo} from "react";
import {GrProjects} from "react-icons/gr";
import {useTranslation} from "react-i18next";

const ProjectButton = memo(() => {
    const {t} = useTranslation();

    return (
        <a href="#Projects">
            <button className="group relative w-40 cursor-pointer">
                <div
                    className="absolute -inset-0.5 bg-dark-navy rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"/>
                <div
                    className="relative h-11 rounded-lg border-2 border-deep-purple leading-none overflow-hidden">
                    <div
                        className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-linear-to-r from-cobalt-blue/10 to-deep-purple/10"/>
                    <span
                        className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                    <span className="text-white font-medium z-10">
                        {t('homepage.buttons.project')}
                    </span>
                    <GrProjects className="w-4 h-4 text-white transform transition-all duration-300 z-10"/>
                </span>
                </div>
            </button>
        </a>
    )
});

export default ProjectButton;