// @mui material components
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";
// const cardContainerStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
// };

const cardStyle = {
  width: "600px",
  height: "150px",
  padding: "1rem",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  borderRadius: "8px",
  marginBottom: "1rem",
  textAlign: "center",
  color: "black",
};

function ContactUs() {
  const email =
    "https://img.freepik.com/free-vector/envelope-mail-set_271628-376.jpg?w=1380&t=st=1695843032~exp=1695843632~hmac=66cd42de91d33fb0d67caa3d7edd2750815cbfd4e61f92eec84cce7ebbb1314e";
  const adres = "https://cdn.pixabay.com/photo/2018/04/12/18/13/marker-3314279_1280.png";
  const phone =
    "https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139106.jpg?w=1380&t=st=1695842013~exp=1695842613~hmac=bbe8d7b00c95f26157f7c4875836bedd0f7c5de0c8ce47128eef4fbc1f81ea77";
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0.5rem",
          width: "100%",
          background: "#11304C ",

          // backgroundColor: "linear-gradient(90deg, rgba(188, 188, 189, 0), #117789 20.71%)",
        }}
      >
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
          blue
        />
      </div>
      <Grid container spacing={3} alignItems="center" marginTop={"8rem"}>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={12} marginLeft={"10rem"}>
              <Grid container spacing={2}>
                <Grid marginBottom={"2rem"} item xs={12} sm={4}>
                  <Card
                    sx={{
                      backgroundImage: ({
                        palette: { black },
                        functions: { linearGradient, rgba },
                      }) =>
                        `${linearGradient(
                          rgba(black.main, 0.1),
                          rgba(black.main, 0.5)
                        )}, url(${adres})`,
                      backgroundSize: "cover",
                    }}
                    style={cardStyle}
                  >
                    {" "}
                    <CardContent>
                      <MKTypography variant="h4">Adres</MKTypography>
                      <p> Sokullu Mehmet Paşa, 1361. Sk. No:6 D:25, 06420 Çankaya/Ankara</p>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid marginBottom={"2rem"} item xs={12} sm={4}>
                  <Card
                    sx={{
                      backgroundImage: ({
                        palette: { black },
                        functions: { linearGradient, rgba },
                      }) =>
                        `${linearGradient(
                          rgba(black.main, 0.1),
                          rgba(black.main, 0.5)
                        )}, url(${phone})`,
                      backgroundSize: "cover",
                    }}
                    style={cardStyle}
                  >
                    <CardContent>
                      <MKTypography variant="h4">
                        {" "}
                        <i className="fa fa-phone" style={{ marginRight: "8px" }} />
                        Telefon
                      </MKTypography>
                      <p>+90 312 433 27 35</p>
                      <p>+90 507 868 89 53</p>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid marginBottom={"2rem"} item xs={12} sm={4}>
                  <Card
                    sx={{
                      backgroundImage: ({
                        palette: { black },
                        functions: { linearGradient, rgba },
                      }) =>
                        `${linearGradient(
                          rgba(black.main, 0.1),
                          rgba(black.main, 0.5)
                        )}, url(${email})`,
                      backgroundSize: "cover",
                    }}
                    style={cardStyle}
                  >
                    <CardContent>
                      <MKTypography variant="h4">
                        {" "}
                        <i className="fa fa-envelope " style={{ marginRight: "8px" }} />
                        Mail
                      </MKTypography>
                      <p>arenadis@gmail.com</p>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} md={6} xs={12} lg={6} xl={6}>
          <Grid container spacing={3}>
            <Grid item sm={6} md={6} lg={6} xl={6} xs={12}>
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mx={3}
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
            <Grid item sm={6} md={6} lg={6} xl={6} xs={12}>
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mx={3}
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
            <Grid item sm={8} md={8} lg={12} xl={12} xs={6}>
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mx={3}
              >
                <MKInput
                  variant="outlined"
                  type="text"
                  label="Nasıl yardımcı olabiliriz?"
                  placeholder="Describe your problem in at least 250 characters"
                  InputLabelProps={{ shrink: true }}
                  multiline
                  fullWidth
                  rows={8}
                />
              </MKBox>
            </Grid>
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
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        ml={{ xs: "auto", lg: 12 }}
        mr={{ xs: "auto", lg: 12 }}
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
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </div>
  );
}

export default ContactUs;
