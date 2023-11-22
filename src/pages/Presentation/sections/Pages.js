// react-router-dom components

// @mui material components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import { Container, Grid, Icon, Stack, Card } from "@mui/material";
import p53 from "assets/images/products-images/cad-cam-sistemleri/kaziyicilar/up3d-p53-dental-frezleme-cihazi/UP3D-P53-Gorsel.jpg";
import dentafab from "assets/images/products-images/cad-cam-sistemleri/3d-printer/dentafab-sega-3d-printer/Sega-double.jpg";
import zirconmasters from "assets/images/products-images/dental-firinlar/zirkon-sinterleme-firinlari/zirconmatser-s/Z.M.S-1.jpg";
import ceramicmastere20 from "assets/images/products-images/dental-firinlar/ceramic-processing-porselen-firinlari/ceramic-matser-e20/E-20-3.jpg";
import blz from "assets/images/products-images/blz/LS100-1_resize.jpg";
import zirdent from "assets/images/products-images/zirdent/6_resize.jpg";

function Pages() {
  return (
    <>
      <Card style={{ borderRadius: "0px 0px 30px 30px", overflowX: "hidden" }}>
        <Grid container item xs={12} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid
            item
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 3, mx: "auto" }}
          >
            <MKTypography style={{ marginBottom: "20px" }} variant="h2" fontWeight="bold">
              Ürünlerimiz
            </MKTypography>
            <MKTypography variant="body1">
              Ürünlerimiz sektörün ihtiyaçlarına uygun çözümler sunuyor.
            </MKTypography>
          </Grid>
        </Grid>

        <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
          <Container>
            <Grid container alignItems="center" flexDirection={{ xs: "column-reverse", lg: "row" }}>
              <Grid item xs={12} lg={5}>
                <div style={{ marginBottom: "20px" }}>
                  <img src={p53} loading="lazy" style={{ width: "100%", height: "auto" }} />
                </div>
              </Grid>
              <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                <Stack>
                  <MKTypography variant="h3" my={1}>
                    Up3D P53 Dental Frezeleme Cihazı
                  </MKTypography>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">mediation</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Tek tıkla otomatik kalibrasyon, kazıyıcının yüksek
                      <br />
                      hassasiyette işlemesine olanak sağlar.
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">settings_overscan</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      90 derece dikey frezeleme yöntemi, ön dişlerin
                      <br />
                      tasarımını daha estetik hale getirebilir.
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">token</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Çoklu operasyonlar için tek arayüz, kullanımı kolay
                      <br />
                      ve tek tıkla işleme
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="body2"
                      color="info"
                      fontWeight="regular"
                      sx={{
                        width: "max-content",
                        display: "flex",
                        alignItems: "center",

                        "& .material-icons-round": {
                          fontSize: "1.125rem",
                          transform: "translateX(3px)",
                          transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                        },

                        "&:hover .material-icons-round, &:focus .material-icons-round": {
                          transform: "translateX(6px)",
                        },
                      }}
                    >
                      İncele
                      <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                    </MKTypography>
                  </MKBox>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
          <Container>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                <Stack>
                  <MKTypography variant="h3" my={1}>
                    DentaFab Sega 3D Printer
                  </MKTypography>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">mediation</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Dental üretim için Ultra Hızlı DLP teknolojisi
                      {/* <br />
                        hassasiyette işlemesine olanak sağlar. */}
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">settings_overscan</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      %99,9’un üzerinde başarılı baskı oranıyla kararlı üretim
                      {/* <br />
                        tasarımını daha estetik hale getirebilir. */}
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">token</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Dakikalar içinde hızlı baskı için hızlı kürlenme özellikleri!
                      <br />
                      {/* ve tek tıkla işleme */}
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="body2"
                      color="info"
                      fontWeight="regular"
                      sx={{
                        width: "max-content",
                        display: "flex",
                        alignItems: "center",

                        "& .material-icons-round": {
                          fontSize: "1.125rem",
                          transform: "translateX(3px)",
                          transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                        },

                        "&:hover .material-icons-round, &:focus .material-icons-round": {
                          transform: "translateX(6px)",
                        },
                      }}
                    >
                      İncele
                      <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                    </MKTypography>
                  </MKBox>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={5}>
                <div style={{ marginBottom: "20px" }}>
                  <img src={dentafab} loading="lazy" style={{ width: "100%", height: "auto" }} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
          <Container>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={5}>
                <div style={{ marginBottom: "20px" }}>
                  <img src={blz} loading="lazy" style={{ width: "100%", height: "auto" }} />
                </div>
              </Grid>
              <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                <Stack>
                  <MKTypography variant="h3" my={1}>
                    BLZ
                  </MKTypography>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">mediation</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Tek tıkla otomatik kalibrasyon, kazıyıcının yüksek
                      <br />
                      hassasiyette işlemesine olanak sağlar.
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">settings_overscan</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      90 derece dikey frezeleme yöntemi, ön dişlerin
                      <br />
                      tasarımını daha estetik hale getirebilir.
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">token</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Çoklu operasyonlar için tek arayüz, kullanımı kolay
                      <br />
                      ve tek tıkla işleme
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="body2"
                      color="info"
                      fontWeight="regular"
                      sx={{
                        width: "max-content",
                        display: "flex",
                        alignItems: "center",

                        "& .material-icons-round": {
                          fontSize: "1.125rem",
                          transform: "translateX(3px)",
                          transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                        },

                        "&:hover .material-icons-round, &:focus .material-icons-round": {
                          transform: "translateX(6px)",
                        },
                      }}
                    >
                      İncele
                      <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                    </MKTypography>
                  </MKBox>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
          <Container>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                <Stack>
                  <MKTypography variant="h3" my={1}>
                    Zirdent
                  </MKTypography>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">mediation</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Tek tıkla otomatik kalibrasyon, kazıyıcının yüksek
                      <br />
                      hassasiyette işlemesine olanak sağlar.
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">settings_overscan</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      90 derece dikey frezeleme yöntemi, ön dişlerin
                      <br />
                      tasarımını daha estetik hale getirebilir.
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">token</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Çoklu operasyonlar için tek arayüz, kullanımı kolay
                      <br />
                      ve tek tıkla işleme
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="body2"
                      color="info"
                      fontWeight="regular"
                      sx={{
                        width: "max-content",
                        display: "flex",
                        alignItems: "center",

                        "& .material-icons-round": {
                          fontSize: "1.125rem",
                          transform: "translateX(3px)",
                          transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                        },

                        "&:hover .material-icons-round, &:focus .material-icons-round": {
                          transform: "translateX(6px)",
                        },
                      }}
                    >
                      İncele
                      <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                    </MKTypography>
                  </MKBox>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={5}>
                <div style={{ marginBottom: "20px" }}>
                  <img src={zirdent} loading="lazy" style={{ width: "100%", height: "auto" }} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
          <Container>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={5}>
                <div style={{ marginBottom: "20px" }}>
                  <img
                    src={zirconmasters}
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                <Stack>
                  <MKTypography variant="h3" my={1}>
                    ZirconMaster S
                  </MKTypography>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">mediation</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Zno2’nin her türlü diş hekimi için tasarlanmıştır
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">settings_overscan</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      10 işletim programı
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">token</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Yüksek kaliteli mosi2 ısıtma elemanları
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="body2"
                      color="info"
                      fontWeight="regular"
                      sx={{
                        width: "max-content",
                        display: "flex",
                        alignItems: "center",

                        "& .material-icons-round": {
                          fontSize: "1.125rem",
                          transform: "translateX(3px)",
                          transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                        },

                        "&:hover .material-icons-round, &:focus .material-icons-round": {
                          transform: "translateX(6px)",
                        },
                      }}
                    >
                      İncele
                      <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                    </MKTypography>
                  </MKBox>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
          <Container>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                <Stack>
                  <MKTypography variant="h3" my={1}>
                    CeramicMaster E20
                  </MKTypography>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">mediation</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Mevcut tüm dental metal seramik türleri için tasarlanmıştır.
                      {/* <br />
                        hassasiyette işlemesine olanak sağlar. */}
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">settings_overscan</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      Geliştirilmiş kendi kendine teşhis ve otomatik kalibrasyon sistemi
                      {/* <br />
                        tasarımını daha estetik hale getirebilir. */}
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKBox
                      width="3rem"
                      height="3rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <Icon fontSize="small">token</Icon>
                    </MKBox>
                    <MKTypography variant="body2" color="text" pl={2}>
                      201 işletim programları
                      {/* <br />
                        ve tek tıkla işleme */}
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" p={2}>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="body2"
                      color="info"
                      fontWeight="regular"
                      sx={{
                        width: "max-content",
                        display: "flex",
                        alignItems: "center",

                        "& .material-icons-round": {
                          fontSize: "1.125rem",
                          transform: "translateX(3px)",
                          transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                        },

                        "&:hover .material-icons-round, &:focus .material-icons-round": {
                          transform: "translateX(6px)",
                        },
                      }}
                    >
                      İncele
                      <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                    </MKTypography>
                  </MKBox>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={5}>
                <div style={{ marginBottom: "20px" }}>
                  <img
                    src={ceramicmastere20}
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
    </>
  );
}

export default Pages;
