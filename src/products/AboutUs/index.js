// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import "./product.css";

// import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
// import { WhatsApp } from "@mui/icons-material";
// import { Phone } from "@mui/icons-material";
// import { Mail } from "@mui/icons-material";

// Routes
import routes from "routes";
import PropTypes from "prop-types";

// Images
// import bgImage from "assets/images/bg-about-us.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import Products from "products/ProductDatas/products";
import Carousel from "react-material-ui-carousel";

export function ProductSlider({ images }) {
  return (
    <Carousel
      className="d-flex justify-content-center align-items-center"
      animation="slide"
      duration={500}
      width={600}
      height={400}
      navButtnsAlwaysVisible={false}
      fullHeightHover={true}
      stopAutoPlayOnHover={true}
      swipe={true}
    >
      {images.map((item, i) => (
        <CardMedia
          className="d-flex justify-content-center align-items-center carousel-item"
          style={{
            width: 600,
            height: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "70px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            transition: "transform 0.3s ease-in-out",
          }}
          key={i}
          image={item}
          alt="Logo"
        />
      ))}
    </Carousel>
  );
}
ProductSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
function ProductInfo() {
  const navigate = useNavigate();
  const { productid } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [productImages, setProductImages] = useState([]);
  const test = () => {
    navigate("/urunler/agiz-ici-tarayicilar/:asdasd");
  };

  useEffect(() => {
    console.log(productid);
    let result = productid.replace(":", "");
    console.log(result);

    Products.map((item) => {
      item.product.map((section) => {
        console.log(section.id);
        if (result === section.id) {
          setProductInfo(section);
          setProductImages(section.img);
          console.log(section);
        }
      });
    });
    console.log(productInfo);
  }, []);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route:
            "https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum",
          label: "Whatsapp ıle Sipariş ",
          color: "default",
        }}
        transparent
        light
      />{" "}
      <Container>
        <Grid container>
          <Grid marginTop={"8rem"} item xs={12} md={8}>
            {/* <MKBox
              minHeight="50vh"
              width="100%"
              sx={{
                backgroundImage: ({
                  functions: { linearGradient, rgba },
                  palette: { gradients },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.6),
                    rgba(gradients.dark.state, 0.6)
                  )}, url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "grid",
                placeItems: "center",
              }}
            >
              {" "}
            </MKBox> */}
            {/* <div>
              {Products.map((product) => (
                <div key={product.index}>
                  {Products.product.map((item) => (
                    <ProductSlider key={item.id} images={item.img} />
                  ))}
                </div>
              ))}
            </div> */}
            <ProductSlider images={productImages} />
          </Grid>
          <Grid item xs={12} md={4}>
            <MKBox
              minHeight="75vh"
              width="100%"
              sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                sx={{ mx: "auto", textAlign: "center" }}
              >
                <MKTypography
                  className="productTitle"
                  variant="h1"
                  color="white"
                  // sx={({ breakpoints, typography: { size } }) => ({
                  //   [breakpoints.down("md")]: {
                  //     fontSize: size["3xl"],
                  //   },
                  // })}
                >
                  {productInfo.model}
                </MKTypography>
                <MKTypography
                  className="productSubtitle"
                  variant="body1"
                  color="white"
                  opacity={0.8}
                  mt={1}
                  mb={3}
                >
                  Urunler SubTitle
                  {productid} nolu id
                </MKTypography>
                <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                  {/* {productInfo.model} */}
                </MKTypography>
                <Button onClick={() => test()}> TEST BUTTON</Button>

                <MKTypography variant="h6" color="white" mt={8} mb={1}>
                  Daha Fazla Bilgi İçin Bize Ulaşın
                </MKTypography>
                <MKBox display="flex" justifyContent="center" alignItems="center">
                  <Link to="https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum">
                    <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                      <i className="fa fa-whatsapp" />
                    </MKTypography>
                  </Link>
                  <Link to="/src/pages/LandingPages/ContactUs/index">
                    <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                      <i className="fa fa-phone" />
                    </MKTypography>
                    <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                      <i className="fa fa-envelope  " />
                    </MKTypography>
                  </Link>
                </MKBox>
              </Grid>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        {/* <Team />
        <Featuring />
        <Newsletter /> */}
      </Card>
    </>
  );
}

export default ProductInfo;
