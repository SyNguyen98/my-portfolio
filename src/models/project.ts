import type {IconType} from "react-icons";

export type Project = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    link?: string;
    githubLink?: string;
    techStack: {
        icon: IconType;
        name: string;
    }[];
    features: string[];
}