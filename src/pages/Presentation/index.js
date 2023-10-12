import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

import Information from "pages/Presentation/sections/Information";
import Testimonials from "pages/Presentation/sections/Testimonials";

import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import logo from "assets/images/logos/arenadis-logo-web-1.png";
import { CardMedia } from "@mui/material";
import routes from "routes";

// import bgImage from "assets/images/dashboard/perfect-healthy-teeth-smile-young-woman.jpg";
import bgImage1 from "assets/images/dashboard/test.jpg";
import CarouselImages from "./sections/Carousel";
import intro from "assets/videos/UP3D.mp4";
import ReactPlayer from "react-player";
import { useEffect } from "react";

import("./video.css");

function Presentation() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bgPosition = `-${scrollY / 15}px 0`;
      const divBackground = document.querySelector(".div-background");

      if (divBackground) {
        divBackground.style.backgroundPosition = bgPosition;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
        <MKBox>
          <Grid container>
            <Grid className="d-flex" item xs={12} md={6} lg={3} sx={{ ml: 0, mb: 3 }}>
              {" "}
              {/* marginLeft'u 0 olarak ayarladık */}
              <CardMedia style={{ width: "302px", height: "77px" }} image={logo} alt="Logo" />
            </Grid>
          </Grid>
        </MKBox>
        <Card>
          <MKBox
            minHeight="90vh"
            width="100%"
            sx={{
              padding: 2,
              backgroundImage: `url(${bgImage1})`, //video gelecek
              backgroundSize: "cover",
              backgroundPosition: "top",
              display: "grid",
              placeItems: "center",
            }}
          >
            {/* <CardMedia
            <DefaultNavbar
              routes={routes}
              action={{
                type: "external",
                route:
                  "https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum",
                label: "Whatsapp ıle Sipariş ",
                color: "success",
              }}
              sticky
            />
          </Grid>
        </Grid>
      </MKBox>
      <Card
        style={{
          marginRight: "100px",
          marginLeft: "100px",
        }}
      >
        <MKBox
          minHeight="90vh"
          width="100%"
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "grid",
            placeItems: "center",
          }}
        >
          {/* <CardMedia
          width={300}
          height={300}
          component="video"
          src="video"
          // className={classes.media}
          image={intro}
          autoPlay
        /> */}
            <div className="d-flex justify-content-center align-items-center video-card">
              <ReactPlayer
                style={{ opacity: "0.90" }}
                width={"100%"}
                height="100%"
                url={intro}
                playing={true}
                muted={true}
                controls={true}
              />
            </div>
          </MKBox>
        </Card>
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
          {/* <Counters /> */}
          <Information />
          {/* <DesignBlocks /> */}
          <CarouselImages />
          <Container sx={{ mt: 6 }}>
            <BuiltByDevelopers />
          </Container>

          <Testimonials />
        </Card>
      </div>
    </>
  );
}

export default Presentation;
