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
import logo from "assets/images/logos/arenadis-logo-white.png";
import { useNavigate } from "react-router-dom";
import { useLogoWidth } from "utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const recaptchaKey = "6LczBg4pAAAAALi8Hrgmqlr6WkHUSwmUVzit5SfB";
// const recaptchaSecretKey = "6LczBg4pAAAAALGMfw7h4zr04LjtupH_GHxdEKDF";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Iletisim() {
  // const [message, setMessage] = useState("");
  // const [gmail, setGmail] = useState("");
  // const [name, setName] = useState("");
  const [form, setForm] = useState({
    message: "",
    from_name: "",
    from_email: "",
    to_name: "arenadis",
  });
  const [success, setSuccess] = useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [dangerOpen, setDangerOpen] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const successHandler = () => {
    setSuccess(true);
    setButtonDisabled(false);
  };
  console.log(success);
  const navigate = useNavigate();
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
  const logoWidth = useLogoWidth();
  const emailChange = (e) => {
    // setGmail(e.target.value);
    setForm({
      ...form,
      from_email: e.target.value,
    });
  };
  const nameChange = (e) => {
    // setName(e.target.value);
    setForm({
      ...form,
      from_name: e.target.value,
    });
  };
  const messageChange = (e) => {
    // setMessage(e.target.value);
    setForm({
      ...form,
      message: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send("service_m7jk5hi", "template_9cq6u2c", form, "V8J_a9Y8gT14LhJAt").then(
      // emailjs.send("service_m7hi", "template_9cq6u2c", form, "V8J_a9Y8gT14LhJAt").then(
      (result) => {
        console.log(result.text);
        setSuccessOpen(true);
      },
      (error) => {
        console.log(error.text);
        setDangerOpen(true);
      }
    );
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessOpen(false);
  };
  console.log(form);
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
        sx={{
          position: "absolute",
          top: "10px",
          left: "20px",
          zIndex: 1,
          size: "cover",
          maxWidth: logoWidth,
        }}
      >
        <div
          style={{
            zIndex: 1,
          }}
        >
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
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
                        onChange={(e) => nameChange(e)}
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
                        onChange={(e) => emailChange(e)}
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
                        onChange={(e) => messageChange(e)}
                        variant="outlined"
                        type="text"
                        label="Nasıl yardımcı olabiliriz?"
                        // placeholder="Describe your problem in at least 250 characters"
                        InputLabelProps={{ shrink: true }}
                        multiline
                        fullWidth
                        rows={12}
                      />
                    </MKBox>
                  </Grid>
                  <Grid
                    container
                    marginLeft={8}
                    justifyContent="flex-start"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                    xl={11}
                    mt={3}
                  >
                    <ReCAPTCHA sitekey={recaptchaKey} onChange={successHandler} />
                  </Grid>
                  <Grid
                    container
                    marginLeft={8}
                    justifyContent="flex-end"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                    xl={11}
                    mt={3}
                    mb={2}
                  >
                    <MKButton
                      disabled={buttonDisabled}
                      type="submit"
                      variant="gradient"
                      color="arena"
                      onClick={sendEmail}
                    >
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
      <Snackbar open={successOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Mailiniz iletildi!
        </Alert>
      </Snackbar>
      <Snackbar open={dangerOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="danger" sx={{ width: "100%" }}>
          Mailiniz iletilirken bir sorunla karşılaştık!
        </Alert>
      </Snackbar>
    </div>
  );
}
