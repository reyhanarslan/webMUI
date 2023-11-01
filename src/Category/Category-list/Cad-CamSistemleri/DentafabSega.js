import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { Icon } from "@mui/material";
import MKTypography from "components/MKTypography";
import Content_1 from "assets/content/DentafabSega3D/1.png";
import Slider from "react-slick";
import Products from "products/ProductDatas/products";

export function DentaFabSega3D() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true,
    autoplay: true,
  };
  const filteredProducts = Products[1].product.filter(
    (product) => product.model !== "DentaFab Sega 3D Printer"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">
                Tüm diş uygulamalarınız için olağanüstü hız ve kalitede üretim!
              </div>
              <div className="page-content">
                Son derece hassas cerrahi kılavuzlar, geçici dişler, kronlar, köprüler, kısmi
                çerçeveler, özel ölçü tepsileri veya dişeti ve bunların hepsini birkaç dakika içinde
                üretebilirsiniz.
                <ul style={{ listStyleType: "circle" }}>
                  <li> Dental üretim için Ultra Hızlı DLP teknolojisi</li>
                  <li>Taban gerektirmeyen mükemmel yapışma teknolojisi</li>
                  <li>Mükemmel doğruluk ve hassasiyet</li>
                  <li>Köprüler</li>
                  <li>%99,9’un üzerinde başarılı baskı oranıyla kararlı üretim</li>
                  <li>20.000 saat projektör garantisi</li>
                  <li>Dakikalar içinde hızlı baskı için hızlı kürlenme özellikleri!</li>
                </ul>
              </div>
              <div className="page-title">Hız Önemlidir!</div>
              <div className="page-content">
                Tüm uygulamalarda olağanüstü hız, doğruluk ve kalite!
              </div>
              <div className="page-title">Teknik Özellikler</div>{" "}
              <div className="page-title">Baskı Teknolojisi</div>
              <div className="page-content">Fast DLP</div>
              <div className="page-title">Baskı Alanı</div>
              <div className="page-content">12 cm x 6,8 cm</div>
              <div className="page-title">Z Katman Kalınlığı</div>
              <div className="page-content">50 / 30 / 15 mikron</div>
              <div className="page-title">Baskı Hızı</div>
              <div className="page-content">50 mikronda 90 mm/saat</div>{" "}
              <div className="page-title">Projektör</div>
              <div className="page-content">385nm / 405nm seçenekleri</div>{" "}
              <div className="page-title">Bağlantı</div>
              <div className="page-content">5GHz Wi-Fi – USB Sürücü</div>{" "}
              <div className="page-title">Yazıcı Kontrolü</div>
              <div className="page-content">7″ Dokunmatik Ekran</div>
              <div className="page-title">Yazıcı Boyutları</div>
              <div className="page-content">32,5 cm x 32,5 cm x 56 cm</div>
              <div className="page-title">Yazıcı Ağırlığı</div>
              <div className="page-content">22 Kg</div>
              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}></Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={12} my={3}>
            <MKBox component="img" src={Content_1} width="100%" />
          </Grid>
          <div className="page-title" style={{ marginBottom: "10px" }}>
            Benzer Ürünleri İncele
          </div>

          <div style={{ marginTop: "30px !important" }}>
            <Slider {...settings}>
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  style={{
                    width: "300px",
                    height: "200px",
                  }}
                >
                  <CenteredBlogCard
                    image={product.img[0]}
                    title={product.model}
                    action={{
                      type: "internal",
                      route: `/urun-detay/${product.id}`,
                      color: "info",
                      label: "Ürünü İncele",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </MKBox>
    </div>
  );
}

export function DentaFabSega3DTitle() {
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={3}>
            <Grid item xs={12} lg={12}>
              {/* Başlık */}
              <div className="page-title">
                <h5 className="dark-text"> 1 Cihaz, 12 Kusursuz İşlem!</h5>
              </div>

              <div className="page-content">
                1 Cihaz, 12 Kusursuz İşlem! Sega 3D Yazıcı, olağanüstü hızda yazdırırken çok yüksek
                doğruluk sağlamak için Ultra Hızlı DLP teknolojimizi kullanır.
              </div>

              {/* ... */}
            </Grid>
          </Grid>
        </Container>
        <Container style={{ backgroundColor: "#358EED", borderRadius: "20px" }}>
          <Grid container item mt={3} sx={{ justifyContent: "flex-start" }}>
            <MKTypography
              component="a"
              href="/urunler/cad-cam-sistemleri"
              target="_blank"
              rel="noreferrer"
              variant="h6"
              color="white"
              fontWeight="regular"
              sx={{
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: `translateX(3px)`,
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },
                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: `translateX(6px)`,
                },
              }}
            >
              CAD/CAM Sistemleri
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
            <MKTypography
              component="a"
              href="/urunler/cad-cam-sistemleri/3d-printer"
              target="_blank"
              rel="noreferrer"
              variant="h6"
              color="white"
              fontWeight="regular"
              sx={{
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: `translateX(3px)`,
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },
                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: `translateX(6px)`,
                },
              }}
            >
              3D Printerlar
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
            <MKTypography
              component="a"
              target="_blank"
              rel="noreferrer"
              variant="h6"
              color="white"
              fontWeight="regular"
              sx={{
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: `translateX(3px)`,
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },
              }}
            >
              DentaFab Sega 3D Printer
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}
