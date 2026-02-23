import {memo} from "react";
import {MdAutoAwesome} from "react-icons/md";

type Props = {
    title: string;
    subTitle: string;
}

const SectionTitle = memo(({title, subTitle}: Props) => (
    <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <div className="inline-block relative group">
            <h2 className="p-2 text-4xl md:text-5xl font-bold text-white"
                data-aos="zoom-in-up"
                data-aos-duration="600">
                {title}
            </h2>
        </div>
        <p className="mt-2 text-ghost-white max-w-4xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
           data-aos="zoom-in-up"
           data-aos-duration="800">
            <MdAutoAwesome className="w-5 h-5 text-neon-cyan"/>
            {subTitle}
            <MdAutoAwesome className="w-5 h-5 text-neon-cyan"/>
        </p>
    </div>
));

export default SectionTitle;