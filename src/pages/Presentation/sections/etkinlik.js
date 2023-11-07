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
import MKTypography from "components/MKTypography";

function EtkinlikImages() {
  const [images] = useState([sld2, sld1, sld3, sld2, sld3, sld1]);

  return (
    <>
      <div>
        <MKBox
          component="section"
          sx={{
            display: "flex",
            mt: 0,
            borderRadius: "0px 0px 30px 30px",
            animation: "changeBackgroundColor 10s linear infinite",
            transition: "background-color 0.5s ease-in-out",
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: "450px",
          }}
        >
          <Container>
            <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
              <Grid
                item
                xs={12}
                lg={6}
                flexDirection="column"
                alignItems="center"
                sx={{ textAlign: "center", my: 5, mx: "auto" }}
              >
                {" "}
                <MKTypography
                  style={{ marginBottom: "20px" }}
                  // color="white"
                  variant="h2"
                  fontWeight="bold"
                >
                  Etkinliklerimiz
                </MKTypography>
              </Grid>

              <Grid container justifyContent="center">
                <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false}>
                  {images.map((item, i) => (
                    <div key={i}>
                      <Grid container spacing={2} justifyContent="center">
                        {images.slice(i, i + 3).map((image, j) => (
                          <Grid item xs={4} key={j}>
                            <img src={image} alt={`Slide ${i + j}`} width="400px" height="250px" />
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  ))}
                </Carousel>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </div>
    </>
  );
}

export default EtkinlikImages;