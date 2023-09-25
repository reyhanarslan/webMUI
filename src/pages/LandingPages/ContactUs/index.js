// @mui material components
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";

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

      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKTypography>Adres</MKTypography>
          <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="row justify-content-start">
                    <div className="col-md-3">
                      <div className="card info">
                        <i className="material-icons text-3xl text-gradient text-info mb-3">
                          <span role="img" aria-label="Adres">
                            🏢
                          </span>
                        </i>
                        <h5>Adres</h5>
                        <p>Sokullu Mehmet Paşa, 1361. Sk. No:6 D:25, 06420 Çankaya/Ankara</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="row justify-content-start">
                    <div className="col-md-3">
                      <div className="card info">
                        <i className="material-icons text-3xl text-gradient text-info mb-3">
                          <span role="img" aria-label="Telefon">
                            ☎️
                          </span>
                        </i>
                        <h5>Telefon</h5>
                        <p>+90 312 433 27 35</p>
                        <p>+90 507 868 89 53</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="row justify-content-start">
                    <div className="col-md-3">
                      <div className="card info">
                        <i className="material-icons text-3xl text-gradient text-info mb-3">
                          <span role="img" aria-label="E-mail">
                            ✉️
                          </span>
                        </i>
                        <h5>E-mail</h5>
                        <p>info@arenadis.com.tr</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ms-auto mt-lg-0 mt-4"></div>
              </div>
            </div>
          </div>
          {/* <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          /> */}
          <iframe
            style={{
              width: "70%", // Genişlik: 100%
              height: "calc(60vh - 5rem)", // Yükseklik: ekran yüksekliği - 2rem
              borderRadius: "lg", // Kenar yarıçapı: lg (bunu gerektiği şekilde güncelleyin)
              marginLeft: "20rem", // Sol boşluk: 2rem (bunu gerektiği şekilde güncelleyin)
              marginTop: "2rem", // Üst boşluk: 2rem (bunu gerektiği şekilde güncelleyin)
            }}
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4299.443701551748!2d32.8357730760411!3d39.8896592975134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8df2ae40e3%3A0x5be6915b99fe5ed7!2zQVJFTkEgRMSwxZ4gREVQT1NVIEEuxZ4u!5e0!3m2!1str!2str!4v1671102703358!5m2!1str!2str"
            }
          ></iframe>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
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
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Bizimle İletişime Geçin
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions, including partnership opportunities, please email
                hello@creative-tim.com or contact using our contact form.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Adınız"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email adresiniz"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Nasıl yardımcı olabiliriz?"
                      placeholder="Describe your problem in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Gönder
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
