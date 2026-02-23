import {memo} from "react";
import {useTranslation} from "react-i18next";
import {IoDocumentTextOutline} from "react-icons/io5";

const DownloadCVButton = memo(() => {
    const {t} = useTranslation();

    return (
        <a href="https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/files/cv.pdf?raw=true"
           target="_blank" rel="noopener noreferrer">
            <button className="group relative w-40 cursor-pointer">
                <div
                    className="absolute -inset-0.5 bg-neon-cyan rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"/>
                <div
                    className="relative h-11 bg-neon-cyan rounded-lg border border-white leading-none overflow-hidden">
                    <div
                        className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-linear-to-r from-cobalt-blue/10 to-deep-purple/10"/>
                    <span
                        className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                    <span className="text-black font-medium z-10">
                        {t('homepage.buttons.download')}
                    </span>
                    <IoDocumentTextOutline className="w-4 h-4 text-black transform transition-all duration-300 z-10"/>
                </span>
                </div>
            </button>
        </a>
    )
});

export default DownloadCVButton;