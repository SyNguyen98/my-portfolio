import {useTranslation} from "react-i18next";

const FeatureItem = ({feature}: { feature: string }) => {
    const {t} = useTranslation();

    return (
        <li className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
            <div className="relative mt-2">
                <div
                    className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300"/>
                <div
                    className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-linear-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300"/>
            </div>
            <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
                {t(feature)}
            </span>
        </li>
    );
};

export default FeatureItem;