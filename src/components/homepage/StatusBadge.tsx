import {memo} from "react";
import {AutoAwesome} from "@mui/icons-material";
import {useTranslation} from "react-i18next";

const StatusBadge = memo(() => {
    const {t} = useTranslation();

    return (
        <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="relative group">
                <div
                    className="absolute -inset-0.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-1000"/>
                <div
                    className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                <span
                    className="bg-linear-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
                    <AutoAwesome className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400"/>
                    {t('homepage.ready_innovation')}
                </span>
                </div>
            </div>
        </div>
    )
});

export default StatusBadge;