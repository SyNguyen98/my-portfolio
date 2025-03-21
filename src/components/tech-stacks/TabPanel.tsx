import {Box, Direction} from "@mui/material";
import {ReactNode} from "react";

type TabPanelProps = {
    children: ReactNode;
    value: number;
    index: number;
    direction: Direction;
}

export default function TabPanel({children, value, index, direction}: TabPanelProps) {
    return (
        <div id={`full-width-tabpanel-${index}`}
             role="tabpanel"
             hidden={value !== index}
             aria-labelledby={`full-width-tab-${index}`}
             dir={direction}>
            {value === index && (
                <Box sx={{p: {xs: 1, sm: 3}}}>
                    {children}
                </Box>
            )}
        </div>
    );
}