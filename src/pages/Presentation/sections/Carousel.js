import Container from "@mui/material/Container";
// import Carousel from "react-material-ui-carousel";
import MKBox from "components/MKBox";
import sld1 from "assets/images/carousel/SLIDER-1psd.jpg";
import sld2 from "assets/images/carousel/SLIDER-2.jpg";
import sld3 from "assets/images/carousel/SLIDER-3.jpg";
// import DashboardImg1 from "assets/images/dashboard/perfect-healthy-teeth-smile-young-woman.jpg";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselImages() {
  const [images] = useState([sld1, sld2, sld3]);

  return (
    <>
      <div>
        <MKBox
          component="section"
          sx={{
            display: "flex",
            mt: 0,

            borderRadius: "30px",
            animation: "changeBackgroundColor 10s linear infinite",
            transition: "background-color 0.5s ease-in-out",

            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: "550px",
          }}
        >
          <Container>
            <Grid
              sx={{ marginTop: "100px" }}
              className="d-flex justify-content-left align-items-left"
              lg={3}
            >
              <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                showThumbs={false}
                // animation="fade"
                // duration={1500}
                // height={"700px"}
                // navButtonsAlwaysVisible={false}
                // fullHeightHover={true}
                // stopAutoPlayOnHover={true}
                // swipe={false}
                // className="custom-carousel"
              >
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
