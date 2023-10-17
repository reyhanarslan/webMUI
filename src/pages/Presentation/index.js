// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

import Information from "pages/Presentation/sections/Information";
import Testimonials from "pages/Presentation/sections/Testimonials";
// import Pages from "pages/Presentation/sections/Pages";

import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import logo from "assets/images/logos/arenadis-logo-web-1.png";
// import { Container } from "@mui/material";
import routes from "routes";

// import bgImage from "assets/images/dashboard/perfect-healthy-teeth-smile-young-woman.jpg";
// import bgImage1 from "assets/images/dashboard/test.jpg";
import CarouselImages from "./sections/Carousel";
import intro from "assets/videos/UP3D.mp4";
import ReactPlayer from "react-player";
import sld1 from "assets/images/carousel/SLIDER-1psd.jpg";
import sld2 from "assets/images/carousel/SLIDER-2.jpg";
import sld3 from "assets/images/carousel/SLIDER-3.jpg";
import React, { useState, useEffect, useRef } from "react";
// import { useCallback } from "react";
// import { loadFull } from "tsparticles";
// import Particles from "react-particles";

import("./video.css");

function Presentation() {
  const [images] = useState([sld1, sld2, sld3]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const playerRef = useRef(null);

  const imageDuration = 30000;
  // const options = {
  //   // background: {
  //   //   color: {
  //   //     value: "#0d47a1",
  //   //   },
  //   // },
  //   fpsLimit: 120,
  //   interactivity: {
  //     events: {
  //       onClick: {
  //         enable: true,
  //         mode: "push",
  //       },
  //       onHover: {
  //         enable: true,
  //         mode: "slow",
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       push: {
  //         quantity: 1,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //       },
  //     },
  //   },
  //   particles: {
  //     color: {
  //       value: ["#4A90E2", "#6BB9F0", "#AFCBF4", "#D1E4F7"],
  //     },
  //     links: {
  //       color: "#D1E4F7",
  //       distance: 150,
  //       enable: true,
  //       opacity: 0.5,
  //       width: 1,
  //     },
  //     move: {
  //       direction: "none",
  //       enable: true,
  //       outModes: {
  //         default: "bounce",
  //       },
  //       random: false,
  //       speed: 2,
  //       straight: false,
  //     },
  //     number: {
  //       density: {
  //         enable: true,
  //         area: 400,
  //       },
  //       value: 20,
  //     },
  //     opacity: {
  //       value: 0.5,
  //     },
  //     shape: {
  //       type: "circle",
  //     },
  //     size: {
  //       value: { min: 1, max: 3 },
  //     },
  //   },
  //   detectRetina: true,
  // };
  useEffect(() => {
    const interval = setInterval(() => {
      if (isVideoPlaying) {
        if (playerRef.current) {
          const player = playerRef.current;
          if (player && player.getCurrentTime) {
            const currentTime = player.getCurrentTime();
            if (currentTime >= player.getDuration()) {
              setIsVideoPlaying(false);
              setCurrentIndex(0);
              setTimeout(() => {
                setIsVideoPlaying(true);
              }, imageDuration);
            }
          }
        }
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => {
          setIsVideoPlaying(true);
        }, imageDuration);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, isVideoPlaying]);
  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const bgPosition = `-${scrollY / 15}px 0`;
  //     const divBackground = document.querySelector(".div-background");

  //     if (divBackground) {
  //       divBackground.style.backgroundPosition = bgPosition;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route:
            "https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum",
          label: "Whatsapp ıle Sipariş ",
          color: "default",
        }}
        transparent
        light
      />
      <div
        style={{
          background: "linear-gradient(90deg, rgba(188, 188, 189, 0), #117789 20.71%)",

          // background: "linear-gradient(90deg, rgba(188, 188, 189, 0), rgba(7, 7, 67, 0.8) 25.71%)",
        }}
      >
        {/* <MKBox
            minHeight="90vh"
            width="100%"
            sx={{
              padding: 2,
              // backgroundImage: `url(${bgImage1})`, //video gelecek
              backgroundSize: "cover",
              backgroundPosition: "top",
              display: "grid",
              placeItems: "center",
            }}
          > */}
        {/* {isVideoPlaying ? ( */}
        <div
          style={{
            position: "relative",
          }}
        ></div>
        <div className="video-card">
          <ReactPlayer
            ref={playerRef}
            style={{ borderRadius: "15px" }}
            width="100%"
            height="100%"
            url={intro}
            playing={true}
            muted={true}
            controls={false}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "15px", // Adjust the top position as needed
            left: "40px", // Adjust the left position as needed
            zIndex: 1, // Ensure the logo appears above the video
          }}
        >
          <img src={logo} alt="Logo" style={{ width: "302px", height: "77px" }} />
        </div>
        {/* <MKBox>
          <Grid container>
            <Grid className="d-flex" item xs={12} md={6} lg={3} sx={{ ml: 0, mb: 1 }}>
              {" "}
              <CardMedia style={{ width: "302px", height: "77px" }} image={logo} alt="Logo" />
            </Grid>
          </Grid>
        </MKBox>{" "} */}
        {/* <Particles options={options} init={particlesInit} className="custom-particles" /> */}
        {/* ) : (
          <div
            className={`d-flex justify-content-center align-items-center custom-carousel ${
              isVideoPlaying ? "" : "active"
            }`}
          >
            <img
              width="100%"
              height="700px"
              src={images[currentIndex]}
              className="image-transition"
            />
          </div>
        )} */}
        {/* </MKBox> */}
        {/* <ReactPlayer
                style={{ opacity: "0.90" }}
                width={"100%"}
                height="100%"
                url={intro}
                playing={true}
                muted={true}
                controls={true}
              /> */}
        <Card
          // className="div-background"
          sx={{
            p: 0,
            // mx: { xs: 2, lg: 3 },
            mt: -25,
            // borderBottomLeftRadius: "30px",
            // borderBottomRightRadius: "30px",
            borderRadius: "30px",
            // borderRadius:"30px",
            zIndex: 56456,
            // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Information />

          <CarouselImages />
        </Card>
        <BuiltByDevelopers />
        <Card
          // className="div-background"
          sx={{
            p: 0,
            // mx: { xs: 2, lg: 3 },
            // mt: 2,
            // borderBottomLeftRadius: "30px",
            // borderBottomRightRadius: "30px",
            borderRadius: "30px",
            // borderRadius:"30px",

            // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          {/* <Container sx={{ mt: 6 }}>
            <Pages> </Pages>
          </Container> */}
          <Testimonials />
        </Card>
      </div>
    </>
  );
}

export default Presentation;
