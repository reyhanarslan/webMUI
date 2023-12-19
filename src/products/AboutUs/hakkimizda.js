import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import routes from "routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import about from "./about.jpg";
import DashboardImg from "assets/images/products/kurumsal.jpg";
import MKTypography from "components/MKTypography";
import logo from "assets/images/logos/arenadis-logo-white.png";
import { useNavigate } from "react-router-dom";
import { useLogoWidth } from "utils";
import { useMediaQuery, useTheme } from "@mui/material";

export function Hakkimizda() {
  const logoWidth = useLogoWidth();

  const navigate = useNavigate();
  const theme1 = useTheme();
  const isMobile = useMediaQuery(theme1.breakpoints.down("sm"));
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
          cursor: "pointer",
        }}
      >
        <div
          style={{
            zIndex: 1,
          }}
        >
          <img
            onClick={() => navigate("/home")}
            src={logo}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </MKBox>
      <Grid>
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
                  Hakkımızda{" "}
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
          <div className="kurumsal slide-in-container ">
            <Grid
              style={{ marginBottom: isMobile ? 10 : 450 }}
              className="kurumsal-grid"
              marginTop={5}
              container
              alignItems="center"
            >
              <Grid px={6} style={{ marginRight: "70px" }} item xs={12} md={5}>
                <div className="page-title-about">Türkiye’nin Diş Malzemeleri</div>
                <div className="page-content-about" style={{ marginBottom: isMobile ? 20 : 0 }}>
                  Diş Hekimliği sektöründe faaliyet gösteren Arena Diş Deposu A.Ş. Dental klinik ve
                  diş laboratuvar ekipmanları ile sarf malzemeleri satışlarını kapsayan ticari
                  faaliyetlerini yurt içinde ve yurt dışında sürdürmektedir. Merkezi Ankara’da
                  bulunan şirketimiz, ürün seçeneklerinin tanıtıldığı Arena Dijital Akademi ile diş
                  hekimlerine ve diş teknisyenlerine ürünler ile ilgili eğitim olanakları
                  sağlamaktadır. Arena Diş Deposu, geçmişte olduğu gibi gelecekte de “İşi Vaktinden
                  Çok Olanlar İçin” yaklaşımını devam ettirerek sürekli yüksek kaliteli ürünler ile
                  fark yaratmaya devam edecektir.
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={about} alt="About Image" className="about-image" />
              </Grid>
            </Grid>
          </div>
        </MKBox>
      </Grid>
    </div>
  );
}
