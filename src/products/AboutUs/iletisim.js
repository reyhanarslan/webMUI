import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import routes from "routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DashboardImg from "assets/images/contact/iletisim.jpg";
import MKTypography from "components/MKTypography";
import email from "assets/images/contact/email.jpg";
import phone from "assets/images/contact/phone.jpg";
import location from "assets/images/contact/location.jpg";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import logo from "assets/images/logos/arenadis-logo-web-1.png";

export function Iletisim() {
  const cardStyle = {
    width: "600px",
    height: "270px",
    padding: "3rem",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
    marginBottom: "1rem",
    textAlign: "left",
    color: "white",
  };

  return (
    <div>
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
        style={{}}
        sx={{
          position: "absolute",
          top: "10px",
          left: "20px",
          zIndex: 3,
          size: "cover",
        }}
      >
        <div
          style={{
            zIndex: 1,
          }}
        >
          <img src={logo} alt="Logo" style={{ width: "302px", height: "77px" }} />
        </div>
      </MKBox>
      <Grid py={0}>
        <>
          <MKBox
            // minHeight="75vh"
            minHeight="60vh"
            width="100%"
            sx={{
              backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.3),
                  rgba(gradients.dark.state, 0)
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
                lg={12}
                sx={{
                  ml: { xs: 0, lg: 0 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MKTypography variant="h1" color="white">
                  İletişim{" "}
                </MKTypography>
              </Grid>
            </Container>
          </MKBox>
          <Grid container>
            <Grid item xs={12} lg={12}></Grid>
          </Grid>
        </>
        <MKBox
          style={{ borderRadius: 15, marginTop: -20 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {" "}
          <div className="kurumsal slide-in-container">
            <Grid container px={10} spacing={5}>
              <Grid marginTop={10} item xs={12} lg={6} md={12}>
                <Grid item xs={12} sm={12}>
                  <Card
                    sx={{
                      backgroundImage: ({
                        palette: { blue },
                        functions: { linearGradient, rgba },
                      }) =>
                        `${linearGradient(
                          rgba(blue.main, 0.1),
                          rgba(blue.main, 0)
                        )}, url(${location})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    style={cardStyle}
                  >
                    <CardContent>
                      <p> Sokullu Mehmet Paşa,</p>
                      <p> 1361. Sk. No:6 D:25</p>
                      <p> 06420 Çankaya/Ankara</p>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card
                    sx={{
                      backgroundImage: ({
                        palette: { blue },
                        functions: { linearGradient, rgba },
                      }) =>
                        `${linearGradient(rgba(blue.main, 0), rgba(blue.main, 0))}, url(${email})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    style={cardStyle}
                  >
                    <CardContent>
                      <p>arenadis@gmail.com</p>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card
                    sx={{
                      backgroundImage: ({
                        palette: { blue },
                        functions: { linearGradient, rgba },
                      }) =>
                        `${linearGradient(
                          rgba(blue.main, 0.1),
                          rgba(blue.main, 0)
                        )}, url(${phone})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    style={cardStyle}
                  >
                    <CardContent>
                      <p>+90 312 433 27 35</p>
                      <p>+90 507 868 89 53</p>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid style={{ marginTop: 250 }} item xs={12} lg={6} md={12}>
                <div style={{ marginTop: "50px" }} className="page-title">
                  Bizimle iletişime geçin{" "}
                </div>{" "}
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <MKBox
                      bgColor="white"
                      borderRadius="xl"
                      shadow="lg"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <MKInput
                        size="large"
                        type="text"
                        variant="outlined"
                        label="Adınız Soyadınız"
                        InputLabelProps={{ shrink: true }}
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <MKBox
                      bgColor="white"
                      borderRadius="xl"
                      shadow="lg"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <MKInput
                        type="email"
                        variant="outlined"
                        label="Email adresiniz"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} sm={8} md={8} lg={6} xl={12}>
                    <MKBox
                      bgColor="white"
                      borderRadius="xl"
                      shadow="lg"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <MKInput
                        variant="outlined"
                        type="text"
                        label="Nasıl yardımcı olabiliriz?"
                        placeholder="Describe your problem in at least 250 characters"
                        InputLabelProps={{ shrink: true }}
                        multiline
                        fullWidth
                        rows={12}
                      />
                    </MKBox>
                  </Grid>
                  <Grid
                    container
                    justifyContent="flex-end"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                    xl={11}
                    mt={3}
                    mb={2}
                  >
                    <MKButton type="submit" variant="gradient" color="info">
                      Gönder
                    </MKButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              ml={{ xs: "auto", lg: 12 }}
              mr={{ xs: "auto", lg: 12 }}
              mt={8}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90%",
                  height: "calc(60vh - 5rem)",
                  margin: "0 auto",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginBottom: "150px",
                  }}
                >
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                    src={
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4299.443701551748!2d32.8357730760411!3d39.8896592975134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8df2ae40e3%3A0x5be6915b99fe5ed7!2zQVJFTkEgRMSwxZ4gREVQT1NVIEEuxZ4u!5e0!3m2!1str!2str!4v1671102703358!5m2!1str!2str"
                    }
                  ></iframe>
                </div>
              </div>
            </Grid>
          </div>
        </MKBox>
      </Grid>
    </div>
  );
}
