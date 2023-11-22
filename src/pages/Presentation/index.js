import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Information from "pages/Presentation/sections/Information";
import Testimonials from "pages/Presentation/sections/Testimonials";
import logo from "assets/images/logos/arenadis-logo-web-1.png";
import routes from "routes";
// import intro from "assets/videos/UP3D.mp4";
import ReactPlayer from "react-player";
// import sld1 from "assets/images/carousel/SLIDER-1psd.jpg";
// import sld2 from "assets/images/carousel/SLIDER-2.jpg";
// import sld3 from "assets/images/carousel/SLIDER-3.jpg";
import React, { useRef } from "react";
import UrunlerCard from "./sections/UrunlerCards";
import CarouselImages from "./sections/Carousel";
// import videoBg from "assets/images/test1.mp4";
import MKBox from "components/MKBox";
import { useNavigate } from "react-router-dom";

import EtkinlikImages from "./sections/etkinlik";
import { useLogoWidth } from "utils";
import Pages from "./sections/Pages";
import("./video.css");

function Presentation() {
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const logoWidth = useLogoWidth();
 

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route:
            "https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum",
          // label: "Whatsapp ıle Sipariş",
          color: "default",
        }}
        blue
      />{" "}
      <MKBox
        sx={{
          position: "absolute",
          top: "15px",
          left: "20px",
          zIndex: 3,
          size: "cover",
          maxWidth: logoWidth,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            zIndex: 1,
          }}
        >
          <img
            onClick={() => navigate("/home")}
            src={logo}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
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
            url={
              "https://video.wixstatic.com/video/f30992_0d74c04a6deb42979d1a7fa1270d39e1/1080p/mp4/file.mp4"
            }
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
            backgroundColor: "#F8F9FF",
            borderRadius: "0px",
            zIndex: 56456,
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            position: "relative",
          }}
        >
          <div style={{ position: "relative" }}>
            <CarouselImages />
          </div>
        </Card>
        <Pages></Pages>
        <UrunlerCard />
        <Card
          sx={{
            p: 0,
            mt: 0,
            backgroundColor: "#F8F9FF",
            borderRadius: "0px",
            zIndex: 56456,
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            position: "relative",
          }}
        >
          <div style={{ position: "relative" }}>
            <EtkinlikImages />{" "}
          </div>
        </Card>
        <Card
          sx={{
            p: 0,
            borderRadius: "30px",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Testimonials />
        </Card>
      </div>
    </>
  );
}

export default Presentation;
