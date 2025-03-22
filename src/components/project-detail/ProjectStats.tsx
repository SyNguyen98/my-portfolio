import {Project} from "../../models/project.ts";
import {Code, Layers} from "@mui/icons-material";

const ProjectStats = ({project}: { project: Project }) => {
    return (
        <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative">
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0"/>

            <div
                className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
                <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
                    <Code className="text-blue-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5}/>
                </div>
                <div className="flex-grow">
                    <div className="text-lg md:text-xl font-semibold text-blue-200">
                        {project.techStack.length}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400">
                        Total Technology
                    </div>
                </div>
            </div>

            <div
                className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
                <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
                    <Layers className="text-purple-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5}/>
                </div>
                <div className="flex-grow">
                    <div className="text-lg md:text-xl font-semibold text-purple-200">
                        {project.features.length}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400">
                        Key Features
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectStats;