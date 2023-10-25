// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";
// import { ParticleTest } from "pages/Presentation/sections/UrunlerCards";
// import Particles from "react-particles"; // React Particles'ı ekledik

function HorizontalTeamCard({ image, name, position, index, description }) {
  // const particlesConfig = {
  //   particles: {
  //     number: {
  //       value: 50, // Parçacık sayısı
  //     },
  //     size: {
  //       value: 3, // Parçacık boyutu
  //     },
  //     color: {
  //       value: "#000000", // Parçacık rengi
  //     },
  //     opacity: {
  //       value: 0.5, // Parçacık opaklığı
  //     },
  //     line_linked: {
  //       enable: false, // Parçacıklar arasında çizgi etkileşimi
  //     },
  //   },
  // };
  return (
    <>
      {" "}
      {index % 2 === 1 ? (
        <>
          {" "}
          <Card
            className="home-card-right"
            width="100%"
            style={{ height: "300px", width: "900px", backgroundColor: "#F8F9FF" }}
            sx={{ mt: 0 }}
          >
            <Grid container>
              <Grid item xs={12} md={6} lg={4} sx={{ mt: -6, marginLeft: -6 }}>
                <MKBox width="300px" pt={2} pb={1} px={0}>
                  <MKBox
                    bgColor="#F8F9FF"
                    borderRadius="xl"
                    shadow="lg"
                    minHeight="10rem"
                    sx={{
                      overflow: "hidden",
                      transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
                      transformOrigin: "50% 0",
                      willChange: "transform, box-shadow",
                      transition: "transform 200ms ease-out",
                      "&:hover": {
                        transform: "perspective(999px) rotateX(7deg) translate3d(0px, -10px, 50px)",
                      },
                    }}
                    component="img"
                    src={image}
                    alt={name}
                    width="350px"
                    height="300px"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6} lg={8} sx={{ my: "auto", marginLeft: "auto" }}>
                <MKBox pt={5} pb={7} px={4} lineHeight={1.5}>
                  <MKTypography sx={{ textAlign: "center" }} mb={3} variant="h3">
                    <Link to={position.route}>{name}</Link>
                  </MKTypography>
                  <MKTypography sx={{ textAlign: "center" }} variant="body2" color="text">
                    {description}
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
        </>
      ) : (
        <Card
          className="home-card-left"
          width="100%"
          style={{ height: "300px", width: "900px", backgroundColor: "#F8F9FF" }}
          sx={{ mt: 40 }}
        >
          <Grid container>
            <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
              <MKBox pt={5} pb={7} pl={3} pr={{ xs: 4, lg: 1 }} lineHeight={1.5}>
                <MKTypography sx={{ textAlign: "center" }} mb={3} variant="h3">
                  {" "}
                  <Link to={position.route}> {name}</Link>{" "}
                </MKTypography>{" "}
                <MKTypography sx={{ textAlign: "center" }} variant="body2" color="text">
                  {description}
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
              <MKBox width="300px" pt={2} pb={1} px={0}>
                <MKBox
                  bgColor="#F8F9FF"
                  borderRadius="xl"
                  shadow="lg"
                  minHeight="10rem"
                  sx={{
                    overflow: "hidden",
                    transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
                    transformOrigin: "50% 0",
                    willChange: "transform, box-shadow",
                    transition: "transform 200ms ease-out",

                    "&:hover": {
                      transform: "perspective(999px) rotateX(7deg) translate3d(0px, -10px, 50px)",
                    },
                  }}
                  component="img"
                  src={image}
                  alt={name}
                  width="350px"
                  height="300px"
                />
              </MKBox>
            </Grid>
          </Grid>
        </Card>
      )}
    </>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  position: PropTypes.shape({
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;
