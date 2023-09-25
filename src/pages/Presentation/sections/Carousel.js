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
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";
import { useState } from "react";

import Examplescompo from "assets/images/examples/blog2.jpg";
import { CardMedia, Grid } from "@mui/material";
function CarouselImages() {
  const [images] = useState([
    Examplescompo,
    digitalOceanLogo,
    vodafoneLogo,
    nasaLogo,
    facebookLogo,
    appleLogo,
  ]);
  return (
    <MKBox py={12} px={35}>
      <Container>
        <Grid lg={3}></Grid>
        <Grid className="d-flex justify-content-center align-items-center" lg={3}>
          <Carousel
            className="d-flex justify-content-center align-items-center"
            animation="slide"
            duration={500}
            height={300}
            navButtonsAlwaysVisible={true}
            fullHeightHover={true}
            stopAutoPlayOnHover={true}
            swipe={true}
          >
            {images.map((item, i) => (
              // <Item key={i} item={item} />

              <CardMedia
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: 1200,
                  height: 250,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "70px",
                }}
                key={i}
                image={item}
                alt="Logo"
              />
            ))}
          </Carousel>
        </Grid>
        <Grid lg={3}></Grid>
      </Container>
    </MKBox>
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
