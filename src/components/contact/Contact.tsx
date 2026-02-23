import {useTranslation} from "react-i18next";
import SectionTitle from "../SectionTitle.tsx";
import {FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, MAILTO_URL, YOUTUBE_URL} from "../../constants";
import SocialBox from "./SocialBox.tsx";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";

const SOCIAL_LINKS = [
    {
        displayName: "contact.let_connect",
        subText: "contact.on_linkedin",
        icon: FaLinkedin,
        url: LINKEDIN_URL,
        color: "#0A66C2",
        gradient: "from-[#0A66C2] to-[#0077B5]"
    },
    {
        displayName: "Instagram",
        subText: "synguyen998",
        icon: FaInstagram,
        url: INSTAGRAM_URL,
        color: "#E4405F",
        gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
    },
    {
        displayName: "Facebook",
        subText: "Sỹ Nguyên",
        icon: FaFacebook,
        url: FACEBOOK_URL,
        color: "#125AC7",
        gradient: "from-[#4285F4] via-[#1877F2] to-[#125AC7]"
    },
    {
        displayName: "Github",
        subText: "SyNguyen98",
        icon: FaGithub,
        url: GITHUB_URL,
        color: "#ffffff",
        gradient: "from-[#333] to-[#24292e]"
    },
    {
        displayName: "Youtube",
        subText: "@nguyenandbuddies",
        icon: FaYoutube,
        url: YOUTUBE_URL,
        color: "#FF0000",
        gradient: "from-[#FF0000] to-[#CC0000]"
    }
];

const ContactPage = () => {
    const {t} = useTranslation();

    return (
        <div className="lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]" id="Contact">
            <SectionTitle title={t('contact.title')} subTitle={t('contact.sub_title')}/>

            <div className="max-w-2xl mt-10 pt-6 border-t border-steel-blue flex justify-center space-x-6">
                <div className="w-full bg-linear-to-br from-layered-slate to-layered-slate/95 rounded-2xl p-6 py-8 backdrop-blur-xl">
                    <a href={MAILTO_URL}>
                        <h3 className="text-base sm:text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="inline-block w-8 h-1 bg-deep-purple rounded-full"/>
                            nguyen.nguyenhongsy@outlook.com.vn
                        </h3>
                    </a>

                    <div className="flex flex-col gap-4">
                        {/* LinkedIn - Primary Row */}
                        <SocialBox social={SOCIAL_LINKS[0]}/>


                        {/* Instagram & Facebook & GitHub & YouTube */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {SOCIAL_LINKS.slice(1).map((link) => (
                                <SocialBox key={link.displayName} social={link}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;