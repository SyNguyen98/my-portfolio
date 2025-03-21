import {memo} from "react";

const MainTitle = memo(() => (
    <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"/>
                <span
                    className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                    Senior
                </span>
            </span>
            <br/>
            <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"/>
                <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                    Web Developer
                </span>
            </span>
        </h1>
    </div>
));

export default MainTitle;