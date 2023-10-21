// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
// import CountUp from "react-countup";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import icon1 from "assets/images/support.svg";

function DefaultCounterCard({ title, description }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      {/* <MKTypography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={1} {...rest} />
      </MKTypography> */}
      {<img src={icon1} alt="" width={40} height={40} />}
      {title && (
        <MKTypography variant="h5" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
  icon: null,
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

export default DefaultCounterCard;
