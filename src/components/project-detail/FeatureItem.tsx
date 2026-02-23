import {useTranslation} from "react-i18next";

const FeatureItem = ({feature}: { feature: string }) => {
    const {t} = useTranslation();

    return (
        <li className="flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
            <div className="relative mt-2">
                <div
                    className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-ghost-white transition-transform duration-300"/>
            </div>
            <span className="text-sm md:text-base text-ghost-white transition-colors">
                {t(feature)}
            </span>
        </li>
    );
};

export default FeatureItem;