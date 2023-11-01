import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Information from "pages/Presentation/sections/Information";
import Testimonials from "pages/Presentation/sections/Testimonials";
import logo from "assets/images/logos/arenadis-logo-web-1.png";
import routes from "routes";
import intro from "assets/videos/UP3D.mp4";
import ReactPlayer from "react-player";
// import sld1 from "assets/images/carousel/SLIDER-1psd.jpg";
// import sld2 from "assets/images/carousel/SLIDER-2.jpg";
// import sld3 from "assets/images/carousel/SLIDER-3.jpg";
import React, { useRef } from "react";
import UrunlerCard from "./sections/UrunlerCards";
import CarouselImages from "./sections/Carousel";
import videoBg from "assets/images/test1.mp4";
import MKBox from "components/MKBox";
import("./video.css");

function Presentation() {
  // const [images] = useState([sld1, sld2, sld3]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const playerRef = useRef(null);

  // const imageDuration = 30000;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isVideoPlaying) {
  //       if (playerRef.current) {
  //         const player = playerRef.current;
  //         if (player && player.getCurrentTime) {
  //           const currentTime = player.getCurrentTime();
  //           if (currentTime >= player.getDuration()) {
  //             setIsVideoPlaying(false);
  //             setCurrentIndex(0);
  //             setTimeout(() => {
  //               setIsVideoPlaying(true);
  //             }, imageDuration);
  //           }
  //         }
  //       }
  //     } else {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //       setTimeout(() => {
  //         setIsVideoPlaying(true);
  //       }, imageDuration);
  //     }
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [currentIndex, isVideoPlaying]);

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
          label: "Whatsapp ıle Sipariş",
          color: "default",
        }}
        blue
      />{" "}
      <MKBox
        style={{}}
        sx={{
          position: "absolute",
          top: "15px",
          left: "20px",
          zIndex: 3,
          size: "cover",
        }}
      >
        <div
          style={{
            zIndex: 1,
          }}
        >
          <img src={logo} alt="Logo" style={{ width: "302px", height: "77px" }} />
        </div>
      </MKBox>
      <Card
        sx={{
          zIndex: 1,
          p: 0,
          mt: 0,
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div className="video-card">
          <ReactPlayer
            ref={playerRef}
            style={{ borderRadius: "15px", zIndex: 0 }}
            width="100%"
            height="100%"
            url={intro}
            playing={true}
            muted={true}
            controls={false}
            loop={true}
          />
        </div>
      </Card>
      <div
        style={{
          background: "#0C2540 ",
        }}
      >
        <Card
          sx={{
            p: 0,
            mt: -25,
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            zIndex: 56456,
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Information />
        </Card>{" "}
        <Card
          sx={{
            p: 0,
            mt: 0,
            backgroundColor: "#0C2540",

            zIndex: 56456,
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            position: "relative",
          }}
        >
          <div style={{ position: "relative" }}>
            <video
              src={videoBg}
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
                borderBottomLeftRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            />{" "}
            <CarouselImages />
          </div>
        </Card>
        <UrunlerCard />
        <Card
          sx={{
            p: 0,
            borderRadius: "30px",
            // backdropFilter: "saturate(200%) blur(30px)",
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
