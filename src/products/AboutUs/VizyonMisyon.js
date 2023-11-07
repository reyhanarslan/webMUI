import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import routes from "routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DashboardImg from "assets/images/products/kurumsal.jpg";
import MKTypography from "components/MKTypography";
import logo from "assets/images/logos/arenadis-logo-white.png";
import { useNavigate } from "react-router-dom";

export function VizyonMizyon() {
  const navigate = useNavigate();
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
          zIndex: 1,
          size: "cover",
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
            style={{ cursor: "pointer", width: "302px", height: "77px" }}
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
                  Vizyonumuz ve Misyonumuz{" "}
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
            <Grid className="kurumsal-grid" marginTop={4} container alignItems="center">
              <Grid item style={{ marginRight: "70px" }} xs={12} md={5}>
                <div className="page-title-about">Vizyonumuz</div>
                <div className="page-content-about">
                  Arena Diş Deposu A.Ş. olarak vizyonumuz, diş sağlığı sektöründe lider bir kaynak
                  olmayı hedeflemektedir. Vizyonumuz, sektördeki en yenilikçi ve en yüksek kalitede
                  diş ekipmanlarını sunarak sağlık profesyonellerine ve hastalara daha iyi bir
                  gelecek sunmaktır. Biz, diş sağlığı alanındaki mükemmellik ve ilerlemenin öncüsü
                  olmayı taahhüt ederiz. Bu vizyonu gerçekleştirmek için sürekli olarak uluslararası
                  standartlara uygun, en son teknolojiye dayalı ürünler sunarak, diş hekimleri, diş
                  teknisyenleri ve sağlık profesyonellerine destek oluyoruz. Arena Diş Deposu A.Ş.
                  olarak, diş sağlığı alanında yeni fikirlerin ve en son gelişmelerin yayılmasını
                  teşvik ederiz. Müşterilerimize ve işbirliği yaptığımız profesyonellere en yüksek
                  düzeyde hizmet sunarak, diş sağlığı sektörünün öncüsü olmaya devam etmek için
                  tutkuyla çalışırız. Diş sağlığının geleceğini inşa etmek, bizim önceliğimizdir.
                </div>
              </Grid>
              <Grid marginTop={4} item xs={12} md={6}>
                <div className="page-title-about">Misyonumuz</div>
                <div className="page-content-about">
                  Arena Diş Deposu A.Ş., diş hekimleri, diş teknisyenleri ve diş sağlığı
                  profesyonellerine en yüksek kalitede diş ekipmanlarını sunarak sektörün önde gelen
                  bir kaynağı olmayı taahhüt eder. Misyonumuz, bu alanın sürekli ilerlemesi ve
                  gelişmesine katkıda bulunmaktır. Şirket olarak, sürekli olarak yenilikçi ve
                  güvenilir diş ekipmanları tedarik etmek için çaba gösteriyoruz. Diş hekimleri ve
                  diş teknisyenleri, hastalarına en üst düzeyde bakım ve tedavi sunma kapasitelerini
                  artırmak amacıyla sunduğumuz ekipmanlarla güvenebilirler. Müşterilerimize,
                  sektördeki en son teknoloji ve yüksek kaliteli ürünlerle mükemmel bir müşteri
                  hizmeti sunarak diş sağlığı alanında çözüm odaklı bir kaynak olmayı amaçlıyoruz.
                  Her müşterimizin benzersiz ihtiyaçlarını anlamak ve karşılamak için
                  kişiselleştirilmiş yaklaşımlar geliştiriyoruz. Arena Diş Deposu A.Ş. olarak, diş
                  hekimleri ve diş teknisyenleri ile güçlü işbirlikleri kurmayı sürdürerek, diş
                  sağlığı sektörünün geleceğini şekillendirmek için tutku ve kararlılıkla
                  çalışıyoruz. Müşteri memnuniyeti ve profesyonellerin başarısı, işimizin temelini
                  oluşturur ve bu doğrultuda sürekli olarak çaba gösteririz. Diş sağlığı konusundaki
                  en son trendleri takip ederek, sektörümüzü ileri taşımaya ve daha parlak bir
                  gelecek inşa etmeye devam ediyoruz.
                </div>{" "}
              </Grid>
            </Grid>
          </div>
        </MKBox>
      </Grid>
    </div>
  );
}
