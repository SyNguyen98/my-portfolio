import {memo, useContext} from 'react';
import {InputAdornment, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {LanguageContext} from "../../providers/LanguageProvider.tsx";
import {MdLanguage} from "react-icons/md";

function SelectLanguage() {
    const {language, changeLanguage} = useContext(LanguageContext);

    const handleChangeLanguage = (event: SelectChangeEvent) => {
        changeLanguage(event.target.value);
        localStorage.setItem('i18nextLng', event.target.value);
    }

    return (
        <Select autoWidth
                value={language}
                onChange={handleChangeLanguage}
                startAdornment={
                    <InputAdornment position="start">
                        <MdLanguage className="text-white w-5 h-5"/>
                    </InputAdornment>
                }
                sx={{
                    color: "white",
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
                        color: "white",
                    }
                }}
                MenuProps={{
                    slotProps: {
                        paper: {
                            sx: {
                                backgroundColor: "rgb(255 255 255 / 0.1)",
                                color: "#E0E0E0",
                            },
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

export default memo(SelectLanguage);