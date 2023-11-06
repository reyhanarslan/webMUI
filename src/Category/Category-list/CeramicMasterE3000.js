import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";
import Slider from "react-slick";
import Products from "products/ProductDatas/products";

function CeramicMasterE3000() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true,
    autoplay: true,
  };
  const filteredProducts = Products[2].product.filter(
    (product) => product.model !== "CERAMIC MASTER E3000"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Aksesuarlar</div>

              <li className="page-content">Yalıtım tablosu</li>
              <li className="page-content">Ateşleme tepsisi</li>
              <li className="page-content">Pinler</li>
              <li className="page-content">Vakum pompası pvm122</li>
              <br />

              <div className="page-title">Teknik Bilgiler</div>
              <div className="page-content">Güç kaynağı: ~230 v ±10%, 50/60 hz</div>
              <br />

              <div className="page-title">Güç tüketimi</div>
              <div className="page-content">Vakumlu pompalı fırın: 1700 w</div>
              <div className="page-content">Vakumlu pompasız fırın: 1550 w</div>
              <div className="page-content">Emiş kapasitesi: 22 l/dk</div>
              <div className="page-content">Ayarlanabılır vakum: 0,1 ıla 0,92 bar</div>
              <div className="page-content">Maksımum ateşleme sıcaklığı: 1200°с</div>
              <div className="page-content">Ateşleme odası boyutları: ф 95 mm, h 60 mm</div>
              <div className="page-content">Boyutlar (w/d/h): 265/370/565 mm</div>
              <div className="page-content">Ağırlık: 25 кg</div>

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

export default CeramicMasterE3000;

export const CeramicMasterE3000Title = () => {
  const pdfDownloader = () => {};
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
          <Grid container item sx={{ justifyContent: "flex-start" }}>
            <MKTypography
              component="a"
              href="/urunler/dental-firinlar"
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
              Dental Fırınlar
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
            <MKTypography
              component="a"
              href="/urunler/dental-firinlar/porselen-firinlar"
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
              Ceramic Processing - Porselen Fırınları
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
              CeramicMaster E3000
            </MKTypography>
          </Grid>
        </Container>
        <MKTypography
          sx={{ mx: "auto", textAlign: "center", marginTop: 8 }}
          className="productTitle"
        >
          CeramicMaster E3000
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
              <h5>Metal Ve Saf Seramikler İçin Otomatik Programlanabilir Diş Fırını.</h5> <br />
              <div className="page-content">
                <li>Mevcut tüm dental metal seramik türleri için tasarlanmıştır</li>
                <li>255 bireysel program</li>
                <li>Tamamen kontrollü süreç – her programda 16 programlanabilir parametre</li>
                <li>Geliştirilmiş kendi kendine teşhis ve otomatik kalibrasyon sistemi</li>
                <li>Koruyucu temperli camlı 7” tft ekran</li>
                <li>Sensör düğmeleri</li>
                <li>Süreçlerin ilerlemesinin grafiksel gösterimi</li>
                <li>Kuvars spiral tüpte ısıtma elemanı olan ısıtıcı</li>
                <li>Pt/ro termoka kapak</li>
                <li>Kısa güç kesintisinden sonra programın otomatik devamı</li>
                <li>Program parametrelerinin usb aktarımı</li>
                <li>Hasarın uzaktan analizi</li>
              </div>
            </Grid>
          </Grid>
          <div
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
          </div>
        </Container>
      </MKBox>
    </div>
  );
};
