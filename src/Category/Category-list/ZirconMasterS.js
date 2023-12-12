import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { Button, Icon, useMediaQuery, useTheme } from "@mui/material";
import MKTypography from "components/MKTypography";
import Slider from "react-slick";
import Products from "products/ProductDatas/products";

function ZirconMasterS() {
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
    (product) => product.model !== "ZIRCONMASTER S"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Teknik Teknik Bilgiler</div>

              <li className="page-content">Güç kaynağı: 110/230 v ±10%, 50/60 hz</li>
              <li className="page-content">Güç tüketımı: 1650 w</li>
              <li className="page-content">Ateşleme odası boyutları: 120x120x100</li>
              <li className="page-content">Maksımum ateşleme sıcaklığı: 1600°c</li>
              <br />
              <li className="page-content">Boyutlar</li>
              <li className="page-content">W/d/h: 420x400x870 mm</li>
              <li className="page-content">Ağırlık: 60 кg</li>

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

export default ZirconMasterS;

export const ZirconMasterSTitle = () => {
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
          {" "}
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
              href="/urunler/dental-firinlar/zirkon-sinterleme-firinlari"
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
              Zirkon Sinterleme Fırınları
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
            ></MKTypography>
          </Grid>
        </Container>
        <MKTypography
          sx={{ mx: "auto", textAlign: "center", marginTop: 8 }}
          className="productTitle"
        >
          {" "}
          CeramicMaster Press
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
              <h5>Zno2 Sinterleme İçin Programlanabilir Diş Fırını</h5>
              <br />
              <div className="page-content">
                <li>Zno2’nin her türlü diş hekimi için tasarlanmıştır</li>
                <li>10 işletim programı</li>
                <li>Hızlı sıcaklık artışı</li>
                <li>Kontrollü soğutma işlemi</li>
                <li>Yüksek kaliteli mosi2 ısıtma elemanları</li>
                <li>Ana ateşleme aşamasında düşük enerji tüketimi</li>
              </div>
              <br />
              <h5>Aksesuarlar</h5>
              <br />
              <div className="page-content">
                <li>Tepsi gts ref. No 234000001</li>
                <li>Tepsi ag ref. No 234000002</li>
                <li>İnci ag ref. No 234000003</li>
                <li>İnci noritake ref. No 234000004</li>
                <li>Tutucu tepsi ref. No 234000005</li>
                <li>Yalıtım tablosu alt ref. No 234020301</li>
                <li>Yalıtım tablosu üst ref. No 234020302</li>
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
