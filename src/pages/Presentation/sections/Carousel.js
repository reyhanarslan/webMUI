// @mui material components
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@mui/material";
// import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import sld1 from "assets/images/carousel/SLIDER-1psd.jpg";
import sld2 from "assets/images/carousel/SLIDER-2.jpg";
import sld3 from "assets/images/carousel/SLIDER-3.jpg";

import { useState } from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { Grid } from "@mui/material";
function CarouselImages() {
  const [images] = useState([sld1, sld2, sld3]);
  const options = {
    // background: {
    //   color: {
    //     value: "#0d47a1",
    //   },
    // },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "slow",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#4A90E2", "#6BB9F0", "#AFCBF4", "#D1E4F7"],
      },
      links: {
        color: "#D1E4F7",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 400,
        },
        value: 20,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <>
      {" "}
      <div
        style={{
          background: "linear-gradient(90deg, rgba(188, 188, 189, 0), #11304C 20.71%)",

          // background: "linear-gradient(90deg, rgba(188, 188, 189, 0), rgba(7, 7, 67, 0.8) 25.71%)",
        }}
      >
        <Particles
          options={options}
          init={particlesInit}
          className="custom-particles" // Özel bir CSS sınıf ekleyin
        />
        <MKBox
          sx={{
            background: "#fffff",
            borderRadius: "30px",
          }}
          py={6}
        >
          <Container>
            <Grid lg={3}></Grid>
            <Grid className="d-flex justify-content-center align-items-center" lg={3}>
              <Carousel
                animation="fade"
                duration={1500}
                height={"600px"}
                navButtonsAlwaysVisible={false}
                fullHeightHover={true}
                stopAutoPlayOnHover={true}
                swipe={false}
                className="custom-carousel"

                // style={{ width: "1920px" }}
              >
                {images.map((item, i) => (
                  <img key={i} src={item} />
                ))}
              </Carousel>
            </Grid>
            <Grid lg={3}></Grid>
          </Container>
        </MKBox>{" "}
      </div>
    </>
  );
}

export default CarouselImages;

// function Item(props) {
//   console.log(props);
//   return (
//     <Paper>
//       <h2>{props.item}</h2>

//       <Button className="CheckButton">Check it out!</Button>
//     </Paper>
//   );
// }
