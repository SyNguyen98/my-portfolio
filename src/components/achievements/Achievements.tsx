import {memo} from "react";
import {useTranslation} from "react-i18next";
import SectionTitle from "../SectionTitle.tsx";
import AchievementCard from "./AchievementCard.tsx";
import AchievementText from "./AchievementText.tsx";
import {ACHIEVEMENTS} from "../../constants/achievements.ts";

function Achievements() {
    const {t} = useTranslation();

    return (
        <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
             id="Achievements">

            <SectionTitle title={t('achievements.title')} subTitle={t('achievements.sub_title')}/>

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

                    <AchievementText achievement={ACHIEVEMENTS[2]} textPosition="left"/>

                    <AchievementCard achievement={ACHIEVEMENTS[2]}/>
                </div>
            </div>
        </div>
    );
}

export default memo(Achievements);