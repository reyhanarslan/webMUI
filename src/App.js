import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

import routes from "routes";
import MKBox from "components/MKBox";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKTypography from "components/MKTypography";
import footerRoutes from "footer.routes";
import { CardMedia } from "@mui/material";
import logo from "assets/images/logos/arenadis-logo-web-1.png";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
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
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>

      <MKBox component="footer">
        <div>
          <Grid container>
            <Grid className="d-flex" item xs={12} md={3} lg={3} sx={{ ml: "auto", mb: 3 }}>
              <CardMedia style={{ width: "302px", height: "77px" }} image={logo} alt="Logo" />
            </Grid>
            <Grid item xs={12} md={3} lg={3} sx={{ ml: "auto", mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                Bize Ulaşın:
              </MKTypography>
              <MKBox display="flex" alignItems="center" mt={3}>
                {footerRoutes.socials.map(({ icon, link }, key) => (
                  <MKTypography
                    key={link}
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    variant="h5"
                    color="dark"
                    opacity={0.8}
                    mr={key === footerRoutes.socials.length - 1 ? 0 : 2.5}
                  >
                    {icon}
                  </MKTypography>
                ))}
              </MKBox>
            </Grid>
            <Grid item xs={12} md={3} lg={3} sx={{ ml: "auto", mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                Bize Ulaşın:
              </MKTypography>
              <MKBox display="flex" alignItems="center" mt={3}>
                {footerRoutes.socials.map(({ icon, link }, key) => (
                  <MKTypography
                    key={link}
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    variant="h5"
                    color="dark"
                    opacity={0.8}
                    mr={key === footerRoutes.socials.length - 1 ? 0 : 2.5}
                  >
                    {icon}
                  </MKTypography>
                ))}
              </MKBox>
            </Grid>
            <Grid item xs={12} md={3} lg={3} sx={{ ml: "auto", mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                Bize Ulaşın:
              </MKTypography>
              <MKBox display="flex" alignItems="center" mt={3}>
                {footerRoutes.socials.map(({ icon, link }, key) => (
                  <MKTypography
                    key={link}
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    variant="h5"
                    color="dark"
                    opacity={0.8}
                    mr={key === footerRoutes.socials.length - 1 ? 0 : 2.5}
                  >
                    {icon}
                  </MKTypography>
                ))}
              </MKBox>
            </Grid>

            {/* <Grid item xs={6} md={2} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                Telefon:
              </MKTypography>
            </Grid> */}
          </Grid>
        </div>
      </MKBox>
    </ThemeProvider>
  );
}
