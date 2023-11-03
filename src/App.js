import { useCallback, useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import routes from "routes";
import MKBox from "components/MKBox";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKTypography from "components/MKTypography";
// import footerRoutes from "footer.routes";
import { CardMedia } from "@mui/material";
import logo from "assets/images/logos/arenadis-logo-white.png";
import ProductInfo from "./products/AboutUs";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Category from "Category/AboutUs";
// import { useCallback } from "react";
// import { loadFull } from "tsparticles";
// import Particles from "react-particles";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const options = {
    fullScreen: {
      enable: true,
    },
    fpsLimit: 30,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "slow",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 200,
          duration: 1,
        },
      },
    },
    particles: {
      color: {
        value: ["#4A90E2", "#6BB9F0", "#AFCBF4", "#D1E4F7"],
      },
      links: {
        color: "#D1E4F7",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 120,
        },
        value: 10,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 3 },
      },
    },
    detectRetina: false,
  };
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      {/* <Particles options={options} init={particlesInit} /> */}
      <Particles options={options} init={particlesInit} />
      <CssBaseline />
      <Routes>
        <Route exact path="/urun-detay/:productid" element={<ProductInfo />} />
        <Route
          exact
          path="/urunler/:productcategory?/:productsubcategory?"
          element={<Category />}
        />
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />

        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>{" "}
      <div
        style={{
          height: "200px",
          background: "#0C2540",
        }}
      >
        <MKBox component="footer">
          {" "}
          <Grid container style={{ paddingTop: "40px" }}>
            <Grid
              onClick={() => navigate("/")}
              className="d-flex"
              item
              xs={12}
              md={3}
              lg={3}
              sx={{ ml: "auto", mb: 3 }}
            >
              <CardMedia
                style={{ cursor: "pointer", width: "302px", height: "77px" }}
                image={logo}
                alt="Logo"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              sx={{
                ml: "auto",
                mb: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MKBox mt={1}>
                <MKTypography
                  display="block"
                  variant="button"
                  fontWeight="bold"
                  textTransform="capitalize"
                  mb={1}
                >
                  <p style={{ color: "rgb(205,205,206)", fontSize: "20px" }}>
                    <LocationOnIcon style={{ marginRight: "5px", marginTop: "20px" }} /> Adres:
                  </p>
                </MKTypography>

                <MKTypography
                  component="a"
                  target="_blank"
                  rel="noreferrer"
                  color="dark"
                  opacity={0.8}
                >
                  <p style={{ color: "#F2F2F2", fontSize: "15px" }}>
                    {" "}
                    Sokullu Mehmet Paşa, 1361. Sk. <br /> No:6 D:25, 06420 Çankaya/Ankara
                  </p>
                </MKTypography>
              </MKBox>
            </Grid>

            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              sx={{
                ml: "auto",
                mb: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MKBox mt={1}>
                <MKTypography
                  display="block"
                  variant="button"
                  fontWeight="bold"
                  textTransform="capitalize"
                  mb={1}
                >
                  <p style={{ color: "rgb(205,205,206)", fontSize: "20px" }}>
                    <PhoneIcon style={{ marginRight: "5px", marginTop: "20px" }} /> Telefon:
                  </p>
                </MKTypography>

                <MKTypography
                  component="a"
                  target="_blank"
                  rel="noreferrer"
                  color="dark"
                  opacity={0.8}
                >
                  <p style={{ color: "#F2F2F2", fontSize: "15px" }}>
                    {" "}
                    +90 312 433 27 35
                    <br />
                    +90 507 868 89 53
                  </p>
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              sx={{
                ml: "auto",
                mb: 3,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MKBox mt={1}>
                <MKTypography
                  display="block"
                  variant="button"
                  fontWeight="bold"
                  textTransform="capitalize"
                  mb={1}
                >
                  <p style={{ color: "rgb(205,205,206)", fontSize: "20px" }}>
                    <EmailIcon style={{ marginRight: "5px", marginTop: "20px" }} /> E-mail:
                  </p>
                </MKTypography>

                <MKTypography target="_blank" rel="noreferrer" color="dark" opacity={0.8}>
                  <p style={{ color: "#F2F2F2", fontSize: "15px" }}> info@arenadis.com.tr</p>
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
      </div>
    </ThemeProvider>
  );
}
