import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import routes from "routes";
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
        </>
        <MKBox py={10} display="flex" justifyContent="center" alignItems="center">
          <div className="kurumsal slide-in-container ">
            <Grid className="kurumsal-grid" marginTop={4} container alignItems="center">
              <Grid px={6} style={{ marginRight: "70px" }} item xs={12} md={5}>
                <div className="page-title-about">Türkiye’nin Diş Malzemeleri</div>
                <div className="page-content-about">
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
