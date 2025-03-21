import {useTheme} from "@mui/material/styles";
import {SyntheticEvent, useEffect, useRef, useState} from "react";
import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import AOS from "aos";
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import {Api, Cloud, SettingsEthernet} from "@mui/icons-material";
import TechIcon from "./TechIcon.tsx";
import {BACK_END, FRONT_END, OTHERS} from "../../constants/tech.ts";
import TabPanel from "./TabPanel.tsx";

export default function TechStacks() {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    useEffect(() => {
        // Initialize AOS once
        AOS.init({
            once: false, // This will make animations occur only once
        });
    }, []);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
        if (swiperRef.current) {
            swiperRef.current.slideTo(newValue);
        }
    };

    return (
        <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="TechStacks">
            <div className="text-center pb-10"
                 data-aos="fade-up"
                 data-aos-duration="1000">
                <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                        Tech Stacks
                    </span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
                    Powering innovation with the best in modern technology.
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
                                      transform: "translateY(-2px)"
                                  },
                                  "&.Mui-selected": {
                                      color: "#fff",
                                      background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                                      boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)"
                                  },
                              },
                              "& .MuiTabs-indicator": {
                                  height: 0,
                              },
                              "& .MuiTabs-flexContainer": {
                                  gap: "8px",
                              },
                          }}>
                        <Tab icon={<Api className="mb-2 w-5 h-5 transition-all duration-300"/>}
                             label="Back-End"
                             id='full-width-tab-0' aria-controls='full-width-tabpanel-0'/>
                        <Tab icon={<SettingsEthernet className="mb-2 w-5 h-5 transition-all duration-300"/>}
                             label="Front-End"
                             id='full-width-tab-1' aria-controls='full-width-tabpanel-1'/>
                        <Tab icon={<Cloud className="mb-2 w-5 h-5 transition-all duration-300"/>}
                             label="Others"
                             id='full-width-tab-2' aria-controls='full-width-tabpanel-2'/>
                    </Tabs>
                </AppBar>

                <Swiper onSlideChange={(swiper) => setValue(swiper.activeIndex)}
                        initialSlide={value}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSwiper={(swiper) => swiperRef.current = swiper}>

                    <SwiperSlide>
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
                    </SwiperSlide>

                    <SwiperSlide>
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
                    </SwiperSlide>

                    <SwiperSlide>
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
                    </SwiperSlide>
                </Swiper>
            </Box>
        </div>
    );
}