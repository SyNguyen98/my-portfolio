import {Project} from "../models/project";
import {FaReact} from "react-icons/fa";
import {SiSpringboot} from "react-icons/si";
import {VscAzure} from "react-icons/vsc";
import {RiTailwindCssFill} from "react-icons/ri";

export const PROJECTS: Project[] = [
    {
        id: "1",
        imageUrl: 'https://github.com/SyNguyen98/image-storage/blob/main/my-portfolio/projects/chika.webp?raw=true',
        title: "Chika Web App",
        description: "A student project, the beginning of everything",
        githubLink: "https://github.com/SyNguyen98/Chika_Web_App",
        techStack: [
            {icon: FaReact, name: "React"},
            {icon: SiSpringboot, name: "Spring Boot"},
        ],
        features: [
            "Provide information for those interested in smart homes.",
            "Offer an interface and features that allow administrators to manage users and smart home products.",
            "Provide an interface and features that enable users to manage and control home devices remotely in real time.",
            "Help users create scheduled automation scenarios for devices."
        ]
    },
    {
        id: "2",
        imageUrl: 'https://github.com/SyNguyen98/image-storage/blob/main/my-portfolio/projects/memoria.webp?raw=true',
        title: "MEMORIA",
        description: "A website storages all your memory resources.",
        link: "https://www.memoria.com.vn",
        techStack: [
            {icon: FaReact, name: "React"},
            {icon: SiSpringboot, name: "Spring Boot"},
            {icon: VscAzure, name: "Microsoft Azure"},
        ],
        features: [
            "Capture meaningful memories through each photo, turning every moment into a precious story.",
            "Save happy moments with family and friends, so memories remain intact even as time passes.",
            "Pin locations to remember the places you've been, preserving every unforgettable journey."
        ]
    },
    {
        id: "3",
        imageUrl: 'https://github.com/SyNguyen98/image-storage/blob/main/my-portfolio/projects/portfolio.webp?raw=true',
        title: "My Portfolio",
        description: "A place to showcase my projects and achievements.",
        githubLink: "https://github.com/SyNguyen98/my-portfolio",
        techStack: [
            {icon: FaReact, name: "React"},
            {icon: RiTailwindCssFill, name: "Tailwind CSS"},
        ],
        features: [
            "Showcase my projects and achievements.",
            "Provide a brief introduction about myself.",
            "Offer a way for visitors to contact me."
        ]
    }
];