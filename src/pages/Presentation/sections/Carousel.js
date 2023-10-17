import Container from "@mui/material/Container";
import Carousel from "react-material-ui-carousel";
import MKBox from "components/MKBox";
import sld1 from "assets/images/carousel/SLIDER-1psd.jpg";
import sld2 from "assets/images/carousel/SLIDER-2.jpg";
import sld3 from "assets/images/carousel/SLIDER-3.jpg";
import DashboardImg1 from "assets/images/dashboard/perfect-healthy-teeth-smile-young-woman.jpg";
import { useState } from "react";
import { Grid } from "@mui/material";

function CarouselImages() {
  const [images] = useState([sld1, sld2, sld3]);

  return (
    <>
      <div
      // style={{
      //   background: "linear-gradient(90deg, rgba(188, 188, 189, 0), #11304C 20.71%)",
      // }}
      >
        <MKBox
          component="section"
          sx={{
            display: "flex",

            borderRadius: "30px",
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.light.main, 0.3),
                rgba(gradients.arena.state, 0.9)
              )}, url(${DashboardImg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            animation: "slideRight 10s linear infinite",
            height: "800px",
          }}
        >
          <Container>
            <Grid
              sx={{ marginTop: "100px" }}
              className="d-flex justify-content-left align-items-left"
              lg={3}
            >
              <Carousel
                animation="fade"
                duration={1500}
                height={"700px"}
                navButtonsAlwaysVisible={false}
                fullHeightHover={true}
                stopAutoPlayOnHover={true}
                swipe={false}
                className="custom-carousel"
              >
                {images.map((item, i) => (
                  <img key={i} src={item} />
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
