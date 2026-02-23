type Props = {
    icon: string;
    name: string;
}

const TechIcon = ({icon, name}: Props) => {
    return (
        <div
            className="h-32 w-[40vw] md:h-40 md:w-[10vw] group rounded-2xl bg-layered-slate hover:bg-layered-slate/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-xl">
            <div className="relative">
                <div
                    className="absolute -inset-1 bg-deep-purple rounded-full opacity-0 group-hover:opacity-10 blur transition duration-300"></div>
                <img src={`https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/techs/${icon}`}
                     alt={`${name} icon`}
                     className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"/>
            </div>
            <span className="text-ghost-white font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                {name}
            </span>
        </div>
    );
};

export default TechIcon;