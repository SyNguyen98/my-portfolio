import {MouseEvent, useEffect, useState} from "react";
import {Close, Menu} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import SelectLanguage from "./SelectLanguage.tsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const {t} = useTranslation();

    const navItems = [
        {href: "#Home", label: t("navbar.homepage")},
        {href: "#About", label: t("navbar.about")},
        {href: "#Projects", label: t("navbar.projects")},
        {href: "#Achievements", label: t("navbar.achievements")},
        {href: "#TechStacks", label: t("navbar.tech_stacks")},
        {href: "#Contact", label: t("navbar.contact")},
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href) as HTMLElement | null;
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 550,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section =>
                section &&
                currentPosition >= section.offset &&
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const section = document.querySelector(href) as HTMLElement | null;
        if (section) {
            const top = section.offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
            isOpen
                ? "bg-[#030014] opacity-100"
                : scrolled
                    ? "bg-[#030014]/50 backdrop-blur-xl"
                    : "bg-transparent"
        }`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#Home"
                           onClick={(e) => scrollToSection(e, "#Home")}
                           className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
                            Sy Nguyen
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-8 flex items-center space-x-8">
                            {navItems.map((item) =>
                                <a key={item.label}
                                   href={item.href}
                                   onClick={(e) => scrollToSection(e, item.href)}
                                   className="group relative px-1 py-2 text-sm font-medium">
                                    <span className={`relative z-10 transition-colors duration-300 ${
                                        activeSection === item.href.substring(1)
                                            ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                            : "text-[#e2d3fd] group-hover:text-white"
                                    }`}>
                                        {item.label}
                                    </span>
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                                            activeSection === item.href.substring(1)
                                                ? "scale-x-100"
                                                : "scale-x-0 group-hover:scale-x-100"
                                        }`}/>
                                </a>
                            )}
                            <SelectLanguage/>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}
                                className={`relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform 
                                            ${isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"}`}>
                            {isOpen ? (
                                <Close className="w-6 h-6"/>
                            ) : (
                                <Menu className="w-6 h-6"/>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden h-fit top-16 fixed inset-0 bg-[#030014] transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-[-100%] pointer-events-none"
                }`}>
                <div className="flex flex-col h-full">
                    <div className="px-4 py-6 space-y-4 flex-1 ">
                        {navItems.map((item, index) => (
                            <a key={item.label}
                               href={item.href}
                               onClick={(e) => scrollToSection(e, item.href)}
                               className={`block px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                                   activeSection === item.href.substring(1)
                                       ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                       : "text-[#e2d3fd] hover:text-white"
                               }`}
                               style={{
                                   transitionDelay: `${index * 100}ms`,
                                   transform: isOpen ? "translateX(0)" : "translateX(50px)",
                                   opacity: isOpen ? 1 : 0,
                               }}>
                                {item.label}
                            </a>
                        ))}
                        <SelectLanguage/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;