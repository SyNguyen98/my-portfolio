import {useTranslation} from "react-i18next";

function Footer() {
    const {t, i18n} = useTranslation();

    return (
        <footer>
            <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center"/>
            <div className="px-[5%] sm:px-[5%] lg:px-[10%] flex justify-between">
                <span className="max-w-1/2 sm:max-w-none text-xs sm:text-sm pb-4 text-gray-500 text-left dark:text-gray-400">
                    © SyNguyen™ - {t("footer.love_code")}
                </span>
                <span className="max-w-1/3 sm:max-w-none text-xs sm:text-sm pb-4 text-gray-500 text-right dark:text-gray-400">
                    {t("footer.last_update")} {i18n.language === "en" ? "April 7th, 2025" : "7/4/2025"}
                </span>
            </div>
        </footer>
    );
}

export default Footer;