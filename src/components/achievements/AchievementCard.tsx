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
                className="relative overflow-hidden rounded-xl bg-linear-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                <div
                    className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

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
                        className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"/>
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;