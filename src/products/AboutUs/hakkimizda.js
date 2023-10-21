import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import routes from "routes";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import about from "./about.jpg";
import DashboardImg from "assets/images/dashboard/arena-dis-banner-2-2.jpg";
import MKTypography from "components/MKTypography";
export function Hakkimizda() {
  return (
    <div style={{ marginBottom: "223px" }}>
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
      <Grid py={10}>
        <>
          <Container>
            <Grid container>
              <Grid item xs={12} lg={12}>
                <MKBox
                  display="flex"
                  alignItems="center"
                  borderRadius="xl"
                  py={10}
                  className="slide-in-container"
                  sx={{
                    borderRadius: "30px",
                    backgroundImage: ({
                      functions: { linearGradient, rgba },
                      palette: { gradients },
                    }) =>
                      `${linearGradient(
                        rgba(gradients.light.main, 0.3),
                        rgba(gradients.arena.state, 0.9)
                      )}, url(${DashboardImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
                        Hakkımızda{" "}
                      </MKTypography>
                    </Grid>
                  </Container>
                </MKBox>
              </Grid>
            </Grid>
          </Container>
        </>

        <MKBox component="section">
          <Container>
            <Grid marginTop={4} container spacing={6} alignItems="center">
              <Grid className="product-card-right" item xs={12} sm={12} md={6} lg={6}>
                <div className="page-title-about">Türkiye’nin Diş Malzemeleri</div>
                <div className="page-content-about">
                  Diş Hekimliği sektöründe faaliyet gösteren Arena Diş Deposu A.Ş. Dental klinik ve
                  diş laboratuvar ekipmanları ile sarf malzemeleri satışlarını kapsayan ticari
                  faaliyetlerini yurt içinde ve yurt dışında sürdürmektedir Merkezi Ankara’da
                  bulunan şirketimiz, ürün seçeneklerinin tanıtıldığı Arena Dijital Akademi ile diş
                  hekimlerine ve diş teknisyenlerine ürünler ile ilgili eğitim olanakları
                  sağlamaktadır. Arena Diş Deposu, geçmişte olduğu gibi gelecekte de “İşi Vaktiden
                  Çok Olanlar İçin” yenilikçi, rekabetçi ve kaliteli çözümler sunan yaklaşımını
                  devam ettirerek sürekli yüksek kaliteli ürünler ile fark yaratmaya devam
                  edecektir.
                </div>
              </Grid>
              <Grid className="product-card-left" item xs={12} sm={12} md={6} lg={6}>
                <img src={about} alt="About Image" className="about-image" />
              </Grid>
            </Grid>
          </Container>
          <Container></Container>
        </MKBox>
      </Grid>
    </div>
  );
}

export function Carestream3600Title() {
  const navigate = useNavigate();
  const test = () => {
    navigate("https://www.arenadis.com.tr/wp-content/uploads/2021/04/CS-3600-ARENA-KATALOG.pdf");
  };
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="page-title">
                <h5 className="dark-text">Ürün Özellikleri:</h5>
                <span className="light-text">Ultra Hızlı Direkt Dijital Ölçü Sistemi</span>
              </div>
              <div className="page-content">{/* Your content */}</div>
            </Grid>
          </Grid>
          <Button onClick={() => test()} className="pdf-button">
            <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" />
            <span className="pdf-label">Ürün Kataloğu</span>
          </Button>
        </Container>
      </MKBox>
    </div>
  );
}
