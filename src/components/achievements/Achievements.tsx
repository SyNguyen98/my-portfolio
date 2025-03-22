import {memo, useEffect} from "react"
import {AutoAwesome} from '@mui/icons-material';
import AOS from 'aos'
import AchievementCard from "./AchievementCard.tsx";
import {ACHIEVEMENTS} from "../../constants/achievements.ts";
import AchievementText from "./AchievementText.tsx";

// Memoized Components
const Header = memo(() => (
    <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <div className="inline-block relative group">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                data-aos="zoom-in-up"
                data-aos-duration="600">
                Achievements
            </h2>
        </div>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
           data-aos="zoom-in-up"
           data-aos-duration="800">
            <AutoAwesome className="w-5 h-5 text-purple-400"/>
            Turning challenges into milestones, one achievement at a time.
            <AutoAwesome className="w-5 h-5 text-purple-400"/>
        </p>
    </div>
));

function Achievements() {

    // Optimized AOS initialization
    useEffect(() => {
        const initAOS = () => {
            AOS.init({
                once: false,
            });
        };

        initAOS();

        // Debounced resize handler
        let resizeTimer: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(initAOS, 250);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);

    return (
        <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
             id="Achievements">

            <Header/>

            <div className="w-full mx-auto pt-8 sm:pt-12 relative">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <AchievementText achievement={ACHIEVEMENTS[0]} textPosition="left"/>

                    <AchievementCard achievement={ACHIEVEMENTS[0]}/>

                    <div className="space-y-6 sm:hidden">
                        <AchievementText achievement={ACHIEVEMENTS[1]} textPosition="right"/>
                    </div>

                    <AchievementCard achievement={ACHIEVEMENTS[1]}/>

                    <div className="space-y-6 hidden sm:block">
                        <AchievementText achievement={ACHIEVEMENTS[1]} textPosition="right"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Achievements);