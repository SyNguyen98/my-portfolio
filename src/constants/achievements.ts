import {Achievement} from "../models/achievement.ts";

export const ACHIEVEMENTS: Achievement[] = [
    {
        id: '1',
        imageUrl: `${import.meta.env.BASE_URL}achievements/chika.webp`,
        title: 'CIC 2020',
        description: 'A contest entered as a student'
    },
    {
        id: '2',
        imageUrl: `${import.meta.env.BASE_URL}achievements/thermalon.webp`,
        title: 'ThermalON',
        description: 'First award in Bosch'
    }
]