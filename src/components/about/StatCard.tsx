import {memo} from "react";
import {IconType} from "react-icons";

type Props = {
    icon: IconType;
    value: number;
    label: string;
    description: string;
    animation: string;
}

const StatCard = memo(({icon: Icon, value, label, description, animation}: Props) => (
    <div data-aos={animation}
         data-aos-duration={1300}
         className="relative group">
        <div
            className="relative z-10 bg-layered-slate rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
            <div
                className={`absolute -z-10 inset-0 bg-linear-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300`}/>

            <div className="flex items-center justify-between mb-4">
                <div
                    className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                    <Icon className="w-6 h-6 text-white"/>
                </div>
                <span className="text-4xl font-bold text-white"
                      data-aos="fade-up-left"
                      data-aos-duration="1500"
                      data-aos-anchor-placement="top-bottom">
                    {value}
                </span>
            </div>

            <div>
                <p className="text-sm uppercase tracking-wider text-white mb-2"
                   data-aos="fade-up"
                   data-aos-duration="800"
                   data-aos-anchor-placement="top-bottom">
                    {label}
                </p>
                <p className="mt-2 text-xs text-ghost-white"
                   data-aos="fade-up"
                   data-aos-duration="1000"
                   data-aos-anchor-placement="top-bottom">
                    {description}
                </p>
            </div>
        </div>
    </div>
));

export default StatCard;