import {Achievement} from "../../models/achievement.ts";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

type Props = {
    achievement: Achievement;
}

const AchievementCard = ({achievement}: Props) => {
    return (
        <div className="group relative w-full">
            <div
                className="relative overflow-hidden rounded-xl bg-layered-slate backdrop-blur-lg border border-steel-blue shadow-2xl transition-all duration-300 hover:shadow-deep-purple/20">
                <div className="relative p-5 z-10">
                    <div className="relative overflow-hidden rounded-lg">
                        <Swiper spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Autoplay]}
                                className="h-[20vh] sm:h-[50vh]">
                            {achievement.imageUrl.map((url, index) => (
                                <SwiperSlide key={index}>
                                    <img src={url}
                                         alt={achievement.title}
                                         className="w-auto h-full transform group-hover:scale-105 transition-transform duration-500"/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div
                        className="absolute inset-0 border border-steel-blue group-hover:border-deep-purple/50 rounded-xl transition-colors duration-300 -z-50"/>
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;