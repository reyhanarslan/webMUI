import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Katalog from "assets/docs/CeramicMasterPress/CM-Press_stepper-motor_en_v6.pdf";

import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";
import Slider from "react-slick";
import Products from "products/ProductDatas/products";
function CeramicMasterPress() {
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
    (product) => product.model !== "CERAMICMASTER PRESS"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Teknik Bilgiler</div>
              <div className="page-content">Güç kaynağı: 110/230v ±10%, 50/60 hz</div>
              <br />
              <div className="page-title">Güç Tüketimi</div>
              <div className="page-content">Vakumlu pompalı fırın: 1700w</div>
              <br />
              <div className="page-title">Vakum Pompası Verileri</div>
              <div className="page-content">Emış kapasıtesı: 22 l/dk</div>
              <div className="page-content">Ayarlanabılır vakum: 0,1 ıla 0,92 bar</div>
              <div className="page-content">Maksımum ateşleme sıcaklığı: 1200 c</div>
              <div className="page-content">Ateşleme odası boyutları: ф 95 mm, h 60 mm</div> <br />
              <div className="page-title">Boyutlar</div>
              <div className="page-title">W/d/h: 370x380x740 mm</div>
              <div className="page-title">Ağırlık: 30кg</div>
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

export default CeramicMasterPress;

export const CeramicMasterPressTitle = () => {
  const pdfDownloader = () => {
    window.open(Katalog, "_blank");
  };

  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <h5>Metal, Saf ve Pres Seramikler İçin Programlanabilir Diş Fırını.</h5> <br />
              <div className="page-content">
                <li>Her türlü dental metal, saf ve preseramik için tasarlanmıştır</li>
                <li>Presleme işlemi için kompresöre gerek yoktur</li>
                <li>200 işletim programı</li>
                <li>Tamamen kontrollü ateşleme süreci</li>
                <li>Geliştirilmiş kendi kendine teşhis sistemi</li>
                <li>Sıcaklığın otomatik kalibrasyonu</li>
                <li>Kuvars susturucu</li>
              </div>
              <br />
              <h5>Aksesuarlar</h5> <br />
              <div className="page-content">
                <li>Yalıtım basın tablosu</li>
                <li>Seramik kesici uç 100 g halka</li>
                <li>Seramik kesici uç 200 g halka</li>
                <li>Yalıtım tablosu</li>
                <li>Ateşleme tepsisi</li>
                <li>Pinler</li>
                <li>Vakum pompası pvm122</li>
              </div>
            </Grid>
          </Grid>
          <Button onClick={() => pdfDownloader()} style={{ fontSize: "16px" }}>
            <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "36px", marginRight: "8px" }} />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>Ürün Kataloğu</span>
          </Button>
        </Container>
        <Container style={{ backgroundColor: "#358EED", borderRadius: "20px" }}>
          <Grid container item mt={3} sx={{ justifyContent: "flex-start" }}>
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
              href="/urunler/dental-firinlar/press-firinlar"
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
              Press Fırınları
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
              CeramicMaster Press
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
