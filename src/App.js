import { useCallback, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import routes from "routes";
import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import { CardMedia } from "@mui/material";
import logo from "assets/images/logos/arenadis-logo-white.png";
import wp from "assets/images/wp-3.gif";
import ProductInfo from "./products/AboutUs";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Category from "Category/AboutUs";

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
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "fixed",
            top: "80%",
            right: "0px",
            zIndex: 9999999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ backgroundColor: "transparent", borderRadius: "30px" }}
              width={50}
              height={"auto"}
              src={wp}
              alt="WhatsApp"
            />
          </a>
        </div>
      </div>
      <div
        style={{
          background: "#0C2540",
          padding: "20px",
        }}
      >
        <MKBox component="footer">
          <Grid container spacing={3}>
            <Grid
              onClick={() => navigate("/home")}
              className="d-flex"
              item
              xs={12}
              md={3}
              sx={{
                mb: 3,
                textAlign: "center",
              }}
            >
              <CardMedia
                style={{
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: "302px",
                  height: "77px",
                }}
                image={logo}
                alt="Logo"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
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
                    <LocationOnIcon style={{ marginRight: "5px" }} /> Adres:
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
                    Sokullu Mehmet Paşa, 1361. Sk. <br /> No:6 D:25, 06420 Çankaya/Ankara
                  </p>
                </MKTypography>
              </MKBox>
            </Grid>

            <Grid
              item
              xs={12}
              md={3}
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
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
                    <PhoneIcon style={{ marginRight: "5px" }} /> Telefon:
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
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
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
                    <EmailIcon style={{ marginRight: "5px" }} /> E-mail:
                  </p>
                </MKTypography>

                <MKTypography target="_blank" rel="noreferrer" color="dark" opacity={0.8}>
                  <p style={{ color: "#F2F2F2", fontSize: "15px" }}>info@arenadis.com.tr</p>
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
      </div>
    </ThemeProvider>
  );
}
