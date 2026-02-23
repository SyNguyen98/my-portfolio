import type {IconType} from "react-icons";

const TechBadge = ({icon: Icon, tech}: { icon: IconType, tech: string }) => {

    return (
        <div
            className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-layered-slate rounded-xl border border-steel-blue">
            <div className="relative flex items-center gap-1.5 md:gap-2">
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-neon-cyan transition-colors"/>
                <span
                    className="text-xs md:text-sm font-medium text-neon-cyan transition-colors">
                    {tech}
                </span>
            </div>
        </div>
    );
};

export default TechBadge;