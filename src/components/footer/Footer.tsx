function Footer() {
    return (
        <footer>
            <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center"/>
            <div className="px-[5%] sm:px-[5%] lg:px-[10%] flex justify-between">
                <span className="max-w-1/2 sm:max-w-none text-xs sm:text-sm pb-4 text-gray-500 text-left dark:text-gray-400">
                    © SyNguyen™ - A Guy Who Love Coding
                </span>
                <span className="max-w-1/3 sm:max-w-none text-xs sm:text-sm pb-4 text-gray-500 text-right dark:text-gray-400">
                    Last updated on March 13th, 2025.
                </span>
            </div>
        </footer>
    );
}

export default Footer;