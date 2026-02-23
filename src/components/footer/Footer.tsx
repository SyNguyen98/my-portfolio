import {useTranslation} from "react-i18next";

function Footer() {
    const {t} = useTranslation();

    return (
        <footer>
            <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center"/>
            <div className="px-[5%] sm:px-[5%] lg:px-[10%] flex justify-between">
                <span className="max-w-1/2 sm:max-w-none text-xs sm:text-sm pb-4 text-dark-navy text-left dark:text-white">
                    © SyNguyen™ - {t("footer.love_code")}
                </span>
                <span className="max-w-1/3 sm:max-w-none text-xs sm:text-sm pb-4 text-dark-navy text-right dark:text-white">
                    {t("footer.last_update")}
                </span>
            </div>
        </footer>
    );
}

export default Footer;