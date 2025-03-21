type Props = {
    icon: string;
    name: string;
}

const TechIcon = ({icon, name}: Props) => {
    return (
        <div
            className="h-32 w-40 md:h-40 md:w-52 group rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
            <div className="relative">
                <div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                <img src={`${import.meta.env.BASE_URL}techs/${icon}`}
                     alt={`${name} icon`}
                     className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"/>
            </div>
            <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                {name}
            </span>
        </div>
    );
};

export default TechIcon;