// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
// import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
// import { WhatsApp } from "@mui/icons-material";
// import { Phone } from "@mui/icons-material";
// import { Mail } from "@mui/icons-material";

// Routes
import routes from "routes";
// import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/bg-about-us.jpg";
// import { useNavigate, useParams } from "react-router-dom";
// import { Button } from "@mui/material";
import { useEffect } from "react";
import CategoryMenu from "./sections/Information";
import DashboardImg from "assets/images/dashboard/perfect-healthy-teeth-smile-young-woman.jpg";

function Category() {
  // const navigate = useNavigate();
  // const { name } = useParams();
  // const test = () => {
  //   navigate("/urunler/agiz-ici-tarayicilar/:asdasd");
  // };
  useEffect(() => {
    console.log(name);
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
      />
      <MKBox
        // minHeight="75vh"
        minHeight="60vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${DashboardImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            mt={-7}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            {/* <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Category Title
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Urunler SubTitle
            </MKTypography>
            <Button onClick={() => test()}> TEST BUTTON</Button> */}

            <MKTypography variant="h6" color="blue" mt={1} mb={1}>
              Daha Fazla Bilgi İçin Bize Ulaşın
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="blue" href="#" mr={3}>
                <i className="fa fa-whatsapp" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="blue" href="#" mr={3}>
                <i className="fa fa-phone" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="blue" href="#" mr={3}>
                <i className="fa fa-envelope  " />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          // mx: { xs: 2, lg: 3 },
          mt: -15,
          mb: 0,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <CategoryMenu />
        {/* <Team />
        <Featuring />
        <Newsletter /> */}
      </Card>
    </>
  );
}

export default Category;
