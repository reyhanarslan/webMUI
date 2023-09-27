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
const cardContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const cardStyle = {
  width: "1000px",
  height: "200px",
  padding: "1rem",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  marginBottom: "1rem",
  marginRight: "1rem",
};

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route:
              "https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum",
            label: "Whatsapp ıle Sipariş ",
            color: "info",
          }}
        />
      </MKBox>
      <Grid
        item
        xs={8}
        sm={8}
        md={7}
        lg={6}
        xl={4}
        ml={{ xs: "auto", lg: 6 }}
        mr={{ xs: "auto", lg: 6 }}
      >
        <MKBox
          bgColor="white"
          borderRadius="xl"
          shadow="lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mt={{ xs: 20, sm: 18, md: 20 }}
          mb={{ xs: 20, sm: 18, md: 20 }}
          mx={3}
        >
          {" "}
          <Grid
            item
            xs={8}
            sm={8}
            md={7}
            lg={6}
            xl={4}
            ml={{ xs: "auto", lg: 6 }}
            mr={{ xs: "auto", lg: 6 }}
          >
            <MKTypography variant="h3" color="white">
              Bizimle İletişime Geçin ggfgg
            </MKTypography>{" "}
          </Grid>
        </MKBox>
        <MKBox p={10}>
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
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
                    variant="standard"
                    label="Adınız"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
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
                    variant="standard"
                    label="Email adresiniz"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />{" "}
                </MKBox>
              </Grid>
              <Grid item xs={8}>
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
                    variant="standard"
                    label="Nasıl yardımcı olabiliriz?"
                    placeholder="Describe your problem in at least 250 characters"
                    InputLabelProps={{ shrink: true }}
                    multiline
                    fullWidth
                    rows={6}
                  />
                </MKBox>
              </Grid>
            </Grid>
            <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
              <MKButton type="submit" variant="gradient" color="info">
                Gönder
              </MKButton>
            </Grid>
          </MKBox>
        </MKBox>
      </Grid>
      <Grid container spacing={5} alignItems="center" marginTop={"5rem"} marginLeft={"5rem"}>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={12} marginLeft={"30rem"}>
              <div style={cardContainerStyle}>
                <Card style={cardStyle}>
                  <CardContent>
                    <MKTypography variant="h5">Adres</MKTypography>
                    <p>Sokullu Mehmet Paşa, 1361. Sk. No:6 D:25, 06420 Çankaya/Ankara</p>
                  </CardContent>
                </Card>
                <Card style={cardStyle}>
                  <CardContent>
                    <MKTypography variant="h5">Telefon</MKTypography>
                    <p>+90 312 433 27 35</p>
                    <p>+90 507 868 89 53</p>
                  </CardContent>
                </Card>
                <Card style={cardStyle}>
                  <CardContent>
                    <MKTypography variant="h5">Email</MKTypography>
                    <p>info@arenadis.com.tr</p>
                  </CardContent>
                </Card>
              </div>
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
            ></Grid>
            <iframe
              style={{
                width: "100%",
                height: "calc(60vh - 5rem)",
                borderRadius: "lg",
                // marginLeft: "10rem",
                marginTop: "1rem",
              }}
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4299.443701551748!2d32.8357730760411!3d39.8896592975134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8df2ae40e3%3A0x5be6915b99fe5ed7!2zQVJFTkEgRMSwxZ4gREVQT1NVIEEuxZ4u!5e0!3m2!1str!2str!4v1671102703358!5m2!1str!2str"
              }
            ></iframe>{" "}
          </Grid>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
