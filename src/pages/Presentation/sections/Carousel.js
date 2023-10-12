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

import { Grid } from "@mui/material";
function CarouselImages() {
  const [images] = useState([sld1, sld2, sld3]);
  return (
    <MKBox
      sx={{
        background: "#fffff",
        borderRadius: "30px",
      }}
      py={12}
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

            // Carousel bileşeninin genişliği burada ayarlanıyor
            // style={{ width: "1920px" }}
          >
            {images.map((item, i) => (
              <img key={i} src={item} />
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
