import {useTranslation} from "react-i18next";
import {Facebook, GitHub, Instagram, LinkedIn, YouTube, Link as ExternalLink} from "@mui/icons-material";
import {FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, YOUTUBE_URL} from "../../constants";

const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        displayName: "contact.let_connect",
        subText: "contact.on_linkedin",
        icon: LinkedIn,
        url: LINKEDIN_URL,
        color: "#0A66C2",
        gradient: "from-[#0A66C2] to-[#0077B5]"
    },
    {
        name: "Instagram",
        displayName: "Instagram",
        subText: "synguyen998",
        icon: Instagram,
        url: INSTAGRAM_URL,
        color: "#E4405F",
        gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
    },
    {
        name: "Facebook",
        displayName: "Facebook",
        subText: "Sỹ Nguyên",
        icon: Facebook,
        url: FACEBOOK_URL,
        color: "#125AC7",
        gradient: "from-[#4285F4] via-[#1877F2] to-[#125AC7]"
    },
    {
        name: "GitHub",
        displayName: "Github",
        subText: "SyNguyen98",
        icon: GitHub,
        url: GITHUB_URL,
        color: "#ffffff",
        gradient: "from-[#333] to-[#24292e]"
    },
    {
        name: "YouTube",
        displayName: "Youtube",
        subText: "@nguyenandbuddies",
        icon: YouTube,
        url: YOUTUBE_URL,
        color: "#FF0000",
        gradient: "from-[#FF0000] to-[#CC0000]"
    }
];

const SocialLinks = () => {
    const {t} = useTranslation();

    const linkedIn = SOCIAL_LINKS[0];
    const instagram = SOCIAL_LINKS[1];
    const facebook = SOCIAL_LINKS[2];
    const github = SOCIAL_LINKS[3];
    const youtube = SOCIAL_LINKS[4];

    return (
        <div className="w-full bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
            <a href="mailto:nguyen.nguyenhongsy@outlook.com.vn">
                <h3 className="text-base sm:text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
                    nguyen.nguyenhongsy@outlook.com.vn
                </h3>
            </a>

            <div className="flex flex-col gap-4">
                {/* LinkedIn - Primary Row */}
                <a href={linkedIn.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
                    {/* Hover Gradient Background */}
                    <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-r ${linkedIn.gradient}`}/>

                    {/* Content Container */}
                    <div className="relative flex items-center gap-4">
                        {/* Icon Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500group-hover:scale-110 group-hover:opacity-30"
                                style={{backgroundColor: linkedIn.color}}/>
                            <div className="relative p-2 rounded-md">
                                <linkedIn.icon className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                                               style={{color: linkedIn.color}}/>
                            </div>
                        </div>

                        {/* Text Container */}
                        <div className="flex flex-col text-left">
                            <span
                                className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                                {t(linkedIn.displayName)}
                            </span>
                            <span
                                className="m-0.5 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {t(linkedIn.subText)}
                            </span>
                        </div>
                    </div>

                    {/* External Link */}
                    <ExternalLink
                        className="relative w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-1"/>

                    {/* Shine Effect */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                        <div
                            className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
                    </div>
                </a>


                {/* Second Row - Instagram & Facebook */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[instagram, facebook].map((link) => (
                        <a key={link.name}
                           href={link.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-r ${link.gradient}`}/>

                            <div className="relative flex items-center justify-center">
                                <div
                                    className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                                    style={{backgroundColor: link.color}}/>
                                <div className="relative p-2 rounded-lg">
                                    <link.icon className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                                               style={{color: link.color}}/>
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="flex flex-col min-w-0 text-left">
                                <span
                                    className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {link.displayName}
                                </span>
                                <span
                                    className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                                    {link.subText}
                                </span>
                            </div>

                            <ExternalLink
                                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2"/>

                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Third Row - GitHub & YouTube */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[github, youtube].map((link) => (
                        <a key={link.name}
                           href={link.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
                            <div
                                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-r ${link.gradient}`}/>

                            <div className="relative flex items-center justify-center">
                                <div
                                    className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                                    style={{backgroundColor: link.color}}/>
                                <div className="relative p-2 rounded-lg">
                                    <link.icon className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                                               style={{color: link.color}}/>
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="flex flex-col min-w-0 text-left">
                                <span
                                    className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {link.displayName}
                                </span>
                                <span
                                    className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                                    {link.subText}
                                </span>
                            </div>

                            <ExternalLink
                                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2"/>

                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;