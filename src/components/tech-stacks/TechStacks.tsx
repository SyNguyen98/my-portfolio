import {useTheme} from "@mui/material/styles";
import {SyntheticEvent, useState} from "react";
import {useTranslation} from "react-i18next";
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import SectionTitle from "../SectionTitle.tsx";
import TechIcon from "./TechIcon.tsx";
import TabPanel from "./TabPanel.tsx";
import {BACK_END, FRONT_END, OTHERS} from "../../constants/tech.ts";
import {MdApi, MdCloud, MdWeb} from "react-icons/md";

export default function TechStacks() {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const {t} = useTranslation();

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-12 bg-deep-space overflow-hidden" id="TechStacks">
            <SectionTitle title={t('tech_stacks.title')} subTitle={t('tech_stacks.sub_title')}/>

            <Box sx={{width: "100%"}}>
                {/* AppBar and Tabs section - unchanged */}
                <AppBar position="static"
                        elevation={0}
                        sx={{
                            bgcolor: "transparent",
                            border: "1px solid #1E293B",
                            borderRadius: "20px",
                            position: "relative",
                            overflow: "hidden",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "#161B22",
                                backdropFilter: "blur(10px)",
                                zIndex: 0,
                            },
                        }}
                        className="md:px-4">
                    {/* Tabs remain unchanged */}
                    <Tabs value={value}
                          onChange={handleChange}
                          textColor="secondary"
                          indicatorColor="secondary"
                          variant="fullWidth"
                          sx={{
                              // Existing styles remain unchanged
                              minHeight: "70px",
                              "& .MuiTab-root": {
                                  fontSize: {xs: "0.9rem", md: "1rem"},
                                  fontWeight: "600",
                                  color: "white",
                                  textTransform: "none",
                                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                  padding: "20px 0",
                                  zIndex: 1,
                                  margin: "8px",
                                  borderRadius: "12px",
                                  "&:hover": {
                                      color: "#BDBDBD",
                                      background: "#1E293B",
                                      backdropFilter: "blur(10px)",
                                      transform: "translateY(-2px)"
                                  },
                                  "&.Mui-selected": {
                                      color: "#00F5FF",
                                      background: "#1E293B",
                                      boxShadow: "0 4px 15px -3px #1E293B"
                                  },
                              },
                              "& .MuiTabs-indicator": {
                                  height: 0,
                              },
                              "& .MuiTabs-flexContainer": {
                                  gap: "8px",
                              },
                          }}>
                        <Tab icon={<MdApi className="mb-2 w-6 h-6 transition-all duration-300"/>}
                             label={t('tech_stacks.backend')}
                             id='full-width-tab-0' aria-controls='full-width-tabpanel-0'/>
                        <Tab icon={<MdWeb className="mb-2 w-5 h-5 transition-all duration-300"/>}
                             label={t('tech_stacks.frontend')}
                             id='full-width-tab-1' aria-controls='full-width-tabpanel-1'/>
                        <Tab icon={<MdCloud className="mb-2 w-5 h-5 transition-all duration-300"/>}
                             label={t('tech_stacks.others')}
                             id='full-width-tab-2' aria-controls='full-width-tabpanel-2'/>
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} direction={theme.direction}>
                    <div className="container mx-auto flex justify-center items-center overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                            {BACK_END.map((stack, index) => (
                                <div key={index}
                                     data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                                     data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                                    <TechIcon icon={stack.icon} name={stack.language}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={1} direction={theme.direction}>
                    <div className="container mx-auto flex justify-center items-center overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                            {FRONT_END.map((stack, index) => (
                                <div key={index}
                                     data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                                     data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                                    <TechIcon icon={stack.icon} name={stack.language}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={2} direction={theme.direction}>
                    <div className="container mx-auto flex justify-center items-center overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                            {OTHERS.map((stack, index) => (
                                <div key={index}
                                     data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                                     data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                                    <TechIcon icon={stack.icon} name={stack.language}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
}