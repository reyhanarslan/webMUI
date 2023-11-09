import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function CenteredBlogCard({ image, title, description, action }) {
  return (
    <Card style={{ marginRight: "40px", height: 350 }}>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          width="100%"
          height="200px"
          position="relative"
          zIndex={1}
        />
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h6" textTransform="capitalize" fontWeight="regular">
          {title?.length > 20 ? title.slice(0, 19) + "..." : title}
        </MKTypography>
        <MKBox mt={1} mb={2}>
          <MKTypography variant="body2" component="p" color="text">
            {description}
          </MKTypography>
        </MKBox>
        <MKBox bottom={0}>
          {action.type === "external" ? (
            <MKButton
              component={MuiLink}
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              size="small"
              color={action.color ? action.color : "dark"}
            >
              {action.label}
            </MKButton>
          ) : (
            <MKButton
              component={Link}
              to={action.route}
              variant="gradient"
              size="small"
              color={action.color ? action.color : "dark"}
            >
              {action.label}
            </MKButton>
          )}
        </MKBox>
      </MKBox>
    </Card>
  );
}

CenteredBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
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
};

export default CenteredBlogCard;
