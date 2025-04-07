import {useContext} from 'react';
import {InputAdornment, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {Language} from "@mui/icons-material";
import {LanguageContext} from "../../providers/LanguageProvider.tsx";

function SelectLanguage() {
    const {language, changeLanguage} = useContext(LanguageContext);

    const handleChangeLanguage = (event: SelectChangeEvent) => {
        changeLanguage(event.target.value);
    }

    return (
        <Select autoWidth
                value={language}
                onChange={handleChangeLanguage}
                startAdornment={
                    <InputAdornment position="start">
                        <Language sx={{color: "#e2d3fd"}}/>
                    </InputAdornment>
                }
                sx={{
                    color: "#e2d3fd",
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none", // Removes the outline border
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "none", // Removes the border on hover
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "none", // Removes the border when focused
                    },
                    "& .MuiSelect-icon": {
                        color: "#e2d3fd",
                    }
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            backgroundColor: "rgb(255 255 255 / 0.1)",
                            color: "#a855f7",
                        },
                    },
                }}>
            <MenuItem value="vn">
                VI
            </MenuItem>
            <MenuItem value="en">
                EN
            </MenuItem>
        </Select>
    );
}

export default SelectLanguage;