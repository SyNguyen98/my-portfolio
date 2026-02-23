import {useTranslation} from "react-i18next";
import {IconType} from "react-icons";
import {MdLink} from "react-icons/md";

type Props = {
    social: {
        displayName: string;
        subText: string;
        icon: IconType;
        url: string;
        color: string;
        gradient: string;
    }
}

const SocialBox = ({social: {displayName, subText, icon: Icon, url, color, gradient}}: Props) => {
    const {t} = useTranslation();

    return (
        <a href={url}
           target="_blank"
           rel="noopener noreferrer"
           className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
            {/* Hover Gradient Background */}
            <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-r ${gradient}`}/>

            {/* Content Container */}
            <div className="relative flex items-center gap-4">
                {/* Icon Container */}
                <div className="relative flex items-center justify-center">
                    <div
                        className="absolute inset-0 opacity-20 rounded-md transition-all duration-500group-hover:scale-110 group-hover:opacity-30"
                        style={{backgroundColor: color}}/>
                    <div className="relative p-2 rounded-md">
                        <Icon className="w-6 h-6 transition-all duration-500 group-hover:scale-105" style={{color}}/>
                    </div>
                </div>

                {/* Text Container */}
                <div className="flex flex-col text-left">
                            <span
                                className="text-lg font-bold pt-[0.2rem] text-white tracking-tight leading-none group-hover:text-neon-cyan transition-colors duration-300">
                                {t(displayName)}
                            </span>
                    <span
                        className="m-0.5 text-sm text-ghost-white group-hover:text-white transition-colors duration-300">
                                {t(subText)}
                            </span>
                </div>
            </div>

            {/* External Link */}
            <MdLink
                className="relative w-5 h-5 text-white group-hover:text-neon-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-1"/>

            {/* Shine Effect */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
            </div>
        </a>
    );
};

export default SocialBox;