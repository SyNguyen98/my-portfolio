import {ReactNode, SyntheticEvent, useEffect, useState} from "react";
import SwipeableViews from "react-swipeable-views";
import {useTheme} from "@mui/material/styles";
import {AppBar, Box, Direction, Tab, Tabs, Typography} from "@mui/material";
import {Code, EmojiEvents, ViewModule} from '@mui/icons-material';
import ProjectCard from "./ProjectCard.tsx";
import TechIcon from "./TechIcon.tsx";
import AOS from "aos";
import {PROJECTS} from "../../constants/projects.ts";
import {TECH_STACKS} from "../../constants/tech.ts";
import AchievementCard from "./AchievementCard.tsx";
import {ACHIEVEMENTS} from "../../constants/achievements.ts";

type TabPanelProps = {
    children: ReactNode;
    value: number;
    index: number;
    direction: Direction;
}

function TabPanel({children, value, index, direction}: TabPanelProps) {
    return (
        <div id={`full-width-tabpanel-${index}`}
             role="tabpanel"
             hidden={value !== index}
             aria-labelledby={`full-width-tab-${index}`}
             dir={direction}>
            {value === index && (
                <Box sx={{p: {xs: 1, sm: 3}}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function Portfolio() {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    useEffect(() => {
        // Initialize AOS once
        AOS.init({
            once: false, // This will make animations occur only once
        });
    }, []);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portfolio">
            {/* Header section - unchanged */}
            <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                    <span style={{
                        color: '#6366f1',
                        backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Showcase
                    </span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
                    Explore my journey through projects, technical expertise and achievements.
                    <br/>
                    Each section represents a milestone in my learning path.
                </p>
            </div>

            <Box sx={{width: "100%"}}>
                {/* AppBar and Tabs section - unchanged */}
                <AppBar position="static"
                        elevation={0}
                        sx={{
                            bgcolor: "transparent",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
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
                                background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
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
                                  color: "#94a3b8",
                                  textTransform: "none",
                                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                  padding: "20px 0",
                                  zIndex: 1,
                                  margin: "8px",
                                  borderRadius: "12px",
                                  "&:hover": {
                                      color: "#ffffff",
                                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                                      transform: "translateY(-2px)",
                                      "& .lucide": {
                                          transform: "scale(1.1) rotate(5deg)",
                                      },
                                  },
                                  "&.Mui-selected": {
                                      color: "#fff",
                                      background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                                      boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                                      "& .lucide": {
                                          color: "#a78bfa",
                                      },
                                  },
                              },
                              "& .MuiTabs-indicator": {
                                  height: 0,
                              },
                              "& .MuiTabs-flexContainer": {
                                  gap: "8px",
                              },
                          }}>
                        <Tab icon={<Code className="mb-2 w-5 h-5 transition-all duration-300"/>}
                             label="Projects"
                             id='full-width-tab-0' aria-controls='full-width-tabpanel-0'/>
                        <Tab icon={<ViewModule className="mb-2 w-5 h-5 transition-all duration-300"/>}
                             label="Tech Stacks"
                             id='full-width-tab-1' aria-controls='full-width-tabpanel-1'/>
                        <Tab icon={<EmojiEvents className="mb-2 w-5 h-5 transition-all duration-300"/>}
                             label="Achievements"
                             id='full-width-tab-2' aria-controls='full-width-tabpanel-2'/>
                    </Tabs>
                </AppBar>

                <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                                index={value}
                                onChangeIndex={setValue}>
                    <TabPanel value={value} index={0} direction={theme.direction}>
                        <div className="container mx-auto flex justify-center items-center overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                                {PROJECTS.map((project, index) => (
                                    <div key={project.id}
                                         data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                                         data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                                        <ProjectCard project={project}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={1} direction={theme.direction}>
                        <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                                {TECH_STACKS.map((stack, index) => (
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
                            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                                {ACHIEVEMENTS.map((achievement, index) => (
                                    <div key={index}
                                         data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                                         data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                                        <AchievementCard achievement={achievement}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div>
    );
}