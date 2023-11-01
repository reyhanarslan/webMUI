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
function DFM75E() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    autoplay: true,
  };
  const filteredProducts = Products[6].product.filter((product) => product.model !== "DFM 75E");
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Teknik Bilgiler</div>

              <div className="page-content">Güç kaynağı: 230 v ±10%, 50 hz</div>
              <div className="page-content">Güç tüketimi: 140 w</div>
              <div className="page-content">Mikromotor: 3m160-2</div>
              <div className="page-content">Türü: fırçasız</div>
              <div className="page-content">Güç çıkışı: 160 w</div>
              <div className="page-content">Hız: 450 ıle 30000 rpm arasında</div>
              <div className="page-content">Ters: evet</div>
              <br />
              <div className="page-content">Çalışma bölgesi:</div>
              <div className="page-content">Y ekseni hareketi: 75 mm</div>
              <div className="page-content">Zaxıs hareketi: 30 mm</div>
              <div className="page-content">Φ eksenı döndürme: 360°c</div>
              <div className="page-content">Yürütme mekanızmasının dıkey seyahatı: 70 mm</div>
              <div className="page-title">Boyutlar</div>
              <div className="page-content">W/d/h: 245x340x520 mm</div>
              <div className="page-content">Ağırlık: 18кg</div>

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

export default DFM75E;

export const DFM75ETitle = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <h5>Diş Freze Ünitesi </h5> <br />
              <div className="page-content">
                <li>Hem balmumu hem de diş alaşımlarının frezesi</li>
                <li>Hassas frezeleme ve delme</li>
                <li>olarak kullanılma imkanı</li>
                <li>Çalışma masasının elektromanyetik fiksasyonu</li>
              </div>
              <h5>Aksesuarlar:</h5>
              <div className="page-content">
                <li>Araçlar Başlangıç Kümesi</li>
                <li>Tablo</li>
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
              href="/urunler/laboratuvar-ekipmanlari"
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
              Laboratuvar Ekipmanları
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
              DFM 75E
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
