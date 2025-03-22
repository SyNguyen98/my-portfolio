import {Achievement} from "../../models/achievement.ts";

type Props = {
    achievement: Achievement;
    textPosition: "left" | "right";
}

const AchievementText = ({achievement, textPosition}: Props) => {
    return (
        <div className={`space-y-6 text-center lg:text-${textPosition}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                data-aos="fade-left"
                data-aos-duration="1000">
                            <span className="block mt-2 text-gray-200"
                                  data-aos="fade-right"
                                  data-aos-duration="1300">
                                {achievement.title}
                            </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
               data-aos="fade-right"
               data-aos-duration="1500">
                {achievement.description}
            </p>
        </div>
    );
};

export default AchievementText;