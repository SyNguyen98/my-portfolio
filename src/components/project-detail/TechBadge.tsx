import type {IconType} from "react-icons";

const TechBadge = ({icon: Icon, tech}: { icon: IconType, tech: string }) => {

    return (
        <div
            className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"/>
            <div className="relative flex items-center gap-1.5 md:gap-2">
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors"/>
                <span
                    className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
                    {tech}
                </span>
            </div>
        </div>
    );
};

export default TechBadge;