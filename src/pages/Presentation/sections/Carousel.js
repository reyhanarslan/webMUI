import Container from "@mui/material/Container";
// import Carousel from "react-material-ui-carousel";
import MKBox from "components/MKBox";
import sld1 from "assets/images/carousel/SLIDER-1psd.jpg";
import sld2 from "assets/images/carousel/SLIDER-2.jpg";
import sld3 from "assets/images/carousel/SLIDER-3.jpg";
// import DashboardImg1 from "assets/images/dashboard/perfect-healthy-teeth-smile-young-woman.jpg";
import { useState } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../video.css";

function CarouselImages() {
  const [images] = useState([sld1, sld2, sld3]);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div>
        <MKBox
          className="kategoriler-carousel"
          component="section"
          sx={{
            display: "flex",
            borderRadius: "30px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: isMobile ? 250 : 550,
          }}
        >
          <Container>
            <Grid
              sx={{ marginTop: "70px" }}
              className="d-flex justify-content-left align-items-left"
              lg={6}
              xs={12}
            >
              <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false}>
                {images.map((item, i) => (
                  <div key={i}>
                    <img key={i} src={item} />
                  </div>
                ))}
              </Carousel>
            </Grid>
          </Container>
        </MKBox>{" "}
      </div>
    </>
  );
}

export default CarouselImages;
