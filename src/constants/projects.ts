import {Project} from "../models/project";
import {FaReact} from "react-icons/fa";
import {SiSpringboot} from "react-icons/si";
import {VscAzure} from "react-icons/vsc";
import {RiTailwindCssFill} from "react-icons/ri";

export const PROJECTS: Project[] = [
    {
        id: "1",
        imageUrl: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/projects/chika.webp',
        title: "Chika Web App",
        description: "projects.list.chika.description",
        githubLink: "https://github.com/SyNguyen98/Chika_Web_App",
        techStack: [
            {icon: FaReact, name: "React"},
            {icon: SiSpringboot, name: "Spring Boot"},
        ],
        features: [
            "projects.list.chika.features.1",
            "projects.list.chika.features.2",
            "projects.list.chika.features.3",
            "projects.list.chika.features.4",
        ]
    },
    {
        id: "2",
        imageUrl: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/projects/memoria.webp',
        title: "MEMORIA",
        description: "projects.list.memoria.description",
        link: "https://www.memoria.com.vn",
        techStack: [
            {icon: FaReact, name: "React"},
            {icon: SiSpringboot, name: "Spring Boot"},
            {icon: VscAzure, name: "Microsoft Azure"},
        ],
        features: [
            "projects.list.memoria.features.1",
            "projects.list.memoria.features.2",
            "projects.list.memoria.features.3",
        ]
    },
    {
        id: "3",
        imageUrl: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/projects/portfolio.webp',
        title: "My Portfolio",
        description: "projects.list.portfolio.description",
        githubLink: "https://github.com/SyNguyen98/my-portfolio",
        techStack: [
            {icon: FaReact, name: "React"},
            {icon: RiTailwindCssFill, name: "Tailwind CSS"},
            {icon: VscAzure, name: "Microsoft Azure"},
        ],
        features: [
            "projects.list.portfolio.features.1",
            "projects.list.portfolio.features.2",
            "projects.list.portfolio.features.3",
        ]
    }
];