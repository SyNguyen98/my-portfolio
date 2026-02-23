import {memo} from "react";
import {useTranslation} from "react-i18next";
import {MdAutoAwesome} from "react-icons/md";

const StatusBadge = memo(() => {
    const {t} = useTranslation();

    return (
        <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="relative group">
                <div
                    className="absolute -inset-0.5 bg-neon-cyan rounded-full"/>
                <div
                    className="relative px-3 sm:px-4 py-2 rounded-full border border-white/10">
                    <span
                        className="text-deep-purple sm:text-sm text-[0.7rem] font-medium flex items-center">
                        <MdAutoAwesome className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-deep-purple"/>
                        {t('homepage.ready_innovation')}
                    </span>
                </div>
            </div>
        </div>
    )
});

export default StatusBadge;