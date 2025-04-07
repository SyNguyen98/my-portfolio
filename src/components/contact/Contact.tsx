import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import SocialLinks from "./SocialLinks.tsx";
import AOS from "aos";

const ContactPage = () => {
    const {t} = useTranslation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, []);

    return (
        <div id="Contact">
            <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
                <h2 data-aos="fade-down"
                    data-aos-duration="1000"
                    className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                        {t('contact.title')}
                    </span>
                </h2>
                <p data-aos="fade-up"
                   data-aos-duration="1100"
                   className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base mt-3">
                    {t('contact.sub_title')}
                </p>
            </div>

            <div className="max-w-2xl mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6">
                <SocialLinks/>
            </div>
        </div>
    );
};

export default ContactPage;