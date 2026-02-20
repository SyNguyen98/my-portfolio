import {memo} from "react";
import {SvgIconComponent} from "@mui/icons-material";

type Props = {
    icon: SvgIconComponent;
    link: string;
}

const SocialLink = memo(({icon: Icon, link}: Props) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="group relative p-3 cursor-pointer">
            <div
                className="absolute inset-0 bg-linear-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"/>
            <div
                className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"/>
            </div>
        </button>
    </a>
));

export default SocialLink;