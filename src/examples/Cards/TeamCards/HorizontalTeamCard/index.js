import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

function HorizontalTeamCard({ image, name, position, index, description }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isOdd = index % 2 === 1;

  return (
    <Card
      style={{ width: "100%", backgroundColor: "#F8F9FF" }}
      sx={{ mt: isMobile ? 1 : isOdd ? 0 : 20 }}
    >
      <Grid container direction={isMobile ? "column" : "row"}>
        {isOdd && (
          <Grid item xs={12} sm={6} sx={{ mt: isMobile ? 0 : -6, ml: isMobile ? 0 : -3 }}>
            {isMobile ? null : ( // Render image only if not in mobile view
              <MKBox width="100%" pt={2} pb={1} px={0} sx={{ textAlign: "center" }}>
                <MKBox
                  bgColor="#F8F9FF"
                  borderRadius="xl"
                  shadow="lg"
                  minHeight="10rem"
                  sx={{
                    overflow: "hidden",
                    transform: "perspective(999px) rotateX(0deg) translate3d(10px, -10px, 0)",
                    transformOrigin: "50% 0",
                    willChange: "transform, box-shadow",
                    transition: "transform 200ms ease-out",
                    "&:hover": {
                      transform: "perspective(999px) rotateX(7deg) translate3d(10px, -20px, 50px)",
                    },
                  }}
                  component="img"
                  src={image}
                  alt={name}
                  width="100%"
                  height="300px"
                />
              </MKBox>
            )}
          </Grid>
        )}

        <Grid item xs={12} sm={6}>
          <MKBox pt={5} pb={7} pl={3} lineHeight={1.5}>
            <MKTypography sx={{ textAlign: "center" }} mb={2} variant="h4">
              <Link to={position.route}>{name}</Link>
            </MKTypography>
            <MKTypography sx={{ textAlign: "center" }} variant="body2" color="text">
              {description}
            </MKTypography>
          </MKBox>
        </Grid>

        {!isOdd && (
          <Grid item xs={12} sm={6} sx={{ mt: isMobile ? 0 : -6, marginLeft: isMobile ? 0 : 0 }}>
            {isMobile ? null : ( // Render image only if not in mobile view
              <MKBox width="100%" pt={2} pb={1} px={0} sx={{ textAlign: "center" }}>
                <MKBox
                  bgColor="#F8F9FF"
                  borderRadius="xl"
                  shadow="lg"
                  minHeight="10rem"
                  sx={{
                    overflow: "hidden",
                    transform: "perspective(999px) rotateX(0deg) translate3d(10px, -10px, 0)",
                    transformOrigin: "50% 0",
                    willChange: "transform, box-shadow",
                    transition: "transform 200ms ease-out",
                    "&:hover": {
                      transform: "perspective(999px) rotateX(7deg) translate3d(10px, -20px, 50px)",
                    },
                  }}
                  component="img"
                  src={image}
                  alt={name}
                  width="100%"
                  height="300px"
                />
              </MKBox>
            )}
          </Grid>
        )}
      </Grid>
    </Card>
  );
}

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
