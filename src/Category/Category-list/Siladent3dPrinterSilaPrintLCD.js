import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { Icon, useMediaQuery, useTheme } from "@mui/material";
import MKTypography from "components/MKTypography";

import Slider from "react-slick";
import Products from "products/ProductDatas/products";
function Siladent3dPrinterSilaPrintLCD() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 2,
    variableWidth: true,
    autoplay: true,
  };
  const filteredProducts = Products[1].product.filter(
    (product) => product.model !== "SILADENT 3D PRINTER SILAPRINT LCD"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Işlev</div> <br />
              <div className="page-content">
                Hava temizleme sistemi (aktif karbon filtresi), rahat 7 inç dokunmatik ekran
                kontrolü ve W-LAN & Ethernet ile kolay baskı gibi özel işlevler.
              </div>{" "}
              <br />
              <div className="page-title">Kontrol ve Kullanım Kolaylığı</div> <br />
              <div className="page-content">
                Eğilen 7 inç dokunmatik ekranlı monitör kullanıcıları, entegre kontrol panelini
                kullanarak yazdırma ayarlarını ve yazdırma durumunu her an kolayca kontrol edebilir.
              </div>{" "}
              <br />
              <div className="page-title">Dental 3D yazılım</div> <br />
              <div className="page-content">
                Geliştirilen özel Dental üretim gereksinimleri için özel bir yazılım özel olarak
                tasarlanmıştır.
              </div>{" "}
              <br />
              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}></Grid>
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

export default Siladent3dPrinterSilaPrintLCD;

export const Siladent3dPrinterSilaPrintLCDTitle = () => {
  // const pdfDownloader = () => {};
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <MKBox component="section">
        <Container
          style={{
            backgroundColor: "#0C2540",
            padding: 10,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          {" "}
          <Grid container item sx={{ justifyContent: "flex-start" }}>
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
              Sıladent 3D Printer Sılaprint LCD
            </MKTypography>
          </Grid>
        </Container>
        <MKTypography
          sx={{ mx: "auto", textAlign: "center", marginTop: 8 }}
          className="productTitle"
        >
          {" "}
          Sıladent 3D Printer Sılaprint LCD
        </MKTypography>
        <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
            spacing={1}
            marginBottom={2}
          >
            {" "}
            <Grid item xs={12} lg={12}>
              <br />
              <div className="page-content">
                1 Cihaz, 12 Kusursuz İşlem!
                <br />
                SilaPrint LCD, LCD teknolojisi ve çift lineer Z ekseni yardımıyla ayrıntılı,
                boyutsal olarak doğru modeller sağlayan ve aynı zamanda daha düşük giriş fiyatı
                nedeniyle daha az model yazdırmak için ekonomik olan profesyonel ve çok yönlü bir 3D
                yazıcıdır.
                <br />
                <li>DLP teknolojisi</li>
                <li>Yüksek çözünürlük</li>
                <li>Tam boyutsal doğruluk</li>
                <li>SilaPrint reçineleriyle mükemmel uyum</li>
                <li>Sezgisel kontrol ve kullanılabilirlik</li>
              </div>
            </Grid>
          </Grid>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <Button onClick={() => pdfDownloader()} style={{ fontSize: "16px" }}>
              <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "36px", marginRight: "8px" }} />
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>Ürün Kataloğu</span>
            </Button>
          </div> */}
        </Container>
      </MKBox>
    </div>
  );
};
