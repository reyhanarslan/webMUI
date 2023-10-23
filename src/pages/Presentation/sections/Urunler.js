import React from "react";
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Define Urunler component
function Urunler({ image, name, position, description }) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              bgColor="white"
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
              width="100%"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography variant="h6" color={position.color} mb={1}>
              {position.label}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              {description}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the Urunler component
Urunler.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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

export default Urunler;
