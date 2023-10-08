// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
import "./product.css";
import {
  Carestream3600,
  Carestream3600Title,
} from "Category/Category-list/agiz-ici/carestream3600";
import {
  Carestream3700,
  Carestream3700Title,
} from "Category/Category-list/agiz-ici/carestream3700";
import {
  DentaFabSega3D,
  DentaFabSega3DTitle,
} from "Category/Category-list/Cad-CamSistemleri/DentafabSega";
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
import { Link, useParams } from "react-router-dom";
import { CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import Products from "products/ProductDatas/products";
import Carousel from "react-material-ui-carousel";

export function ProductSlider({ images }) {
  return (
    <Carousel
      className="d-flex justify-content-center align-items-center"
      animation="slide"
      duration={500}
      width={800}
      height={600}
      navButtnsAlwaysVisible={false}
      fullHeightHover={true}
      stopAutoPlayOnHover={true}
      swipe={true}
    >
      {images.map((item, i) => (
        <CardMedia
          className="d-flex justify-content-center align-items-center carousel-item"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "0", // Sol boşluk yok
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
  const { productid } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [productModel, setProductModel] = useState([]);

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
          setProductModel(section.model);
          console.log(section);
        }
      });
    });
    console.log(productInfo);
  }, []);
  const renderProductComponent = () => {
    switch (productModel) {
      case "Carestream CS 3600 Ağız İçi Tarayıcı":
        return <Carestream3600 />;
      case "Carestream CS 3700 Ağız İçi Tarayıcı":
        return <Carestream3700 />;
      case "DentaFab Sega 3D Printer":
        return <DentaFabSega3D />;
      default:
        return null;
    }
  };
  const renderProductComponentTitle = () => {
    switch (productModel) {
      case "Carestream CS 3600 Ağız İçi Tarayıcı":
        return <Carestream3600Title />;
      case "Carestream CS 3700 Ağız İçi Tarayıcı":
        return <Carestream3700Title />;
      case "DentaFab Sega 3D Printer":
        return <DentaFabSega3DTitle />;
      default:
        return null;
    }
  };
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
      <Grid paddingX={20} container paddingBottom={5}>
        <Grid marginTop={15} item xs={4} md={5} lg={7}>
          <ProductSlider
            sx={{
              width: "100%",
              height: "auto",
            }}
            images={productImages}
          />
        </Grid>

        <Grid marginTop={4} item xs={4} md={5} lg={5}>
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
              <MKTypography className="productTitle"> {productInfo.model}</MKTypography>

              <MKTypography marginBottom={3} color="white" opacity={0.8}>
                {renderProductComponentTitle()}
              </MKTypography>

              <MKTypography marginTop={5} variant="h6" color="white">
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
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {renderProductComponent()}
      </Card>
    </>
  );
}

export default ProductInfo;
