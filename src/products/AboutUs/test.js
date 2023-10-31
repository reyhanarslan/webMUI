// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";

function HorizontalTeamCard({ image, name, position, index, description }) {
  return (
    <>
      {" "}
      {index % 2 === 1 ? (
        <>
          <Card className="home-card-left" style={{ width: "800px", backgroundColor: "#F8F9FF" }}>
            <Grid container>
              <Grid item xs={12} sm={6}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <MKBox p={3}>
                  <MKTypography variant="h4">
                    <Link to={position.route}>{name}</Link>
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    {description}
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
        </>
      ) : (
        <Card
          className="home-card-right"
          style={{ width: "800px", backgroundColor: "#F8F9FF" }}
          sx={{ mt: 40 }}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <MKBox p={3}>
                <MKTypography sx={{ textAlign: "center" }} mb={3} variant="h3">
                  {" "}
                  <Link to={position.route}> {name}</Link>{" "}
                </MKTypography>{" "}
                <MKTypography sx={{ textAlign: "center" }} variant="body2" color="text">
                  {description}
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid item xs={12} sm={6}>
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
