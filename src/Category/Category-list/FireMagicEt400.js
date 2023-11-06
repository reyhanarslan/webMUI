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
function FireMagicEt400() {
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
    (product) => product.model !== "FIREMAGIC ET400"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Aksesuarlar</div>
              <li className="page-content">Buhar çıkarıcı</li>
              <li className="page-content">Seramik tepsi seti</li>
              <br />
              <div className="page-title">Teknik Bilgiler</div>
              <div className="page-content">Güç kaynağı 230v±10%, 50hz</div>
              <div className="page-content">Güç tüketimi 2000 w</div>
              <div className="page-content">Maksimum ateşleme sıcaklığı 1100 ⁰c</div>
              <div className="page-content">Maksimum program süresı 100 saat</div>
              <div className="page-content">
                Bölgeler arasındaki artışın sıcaklık hızı 1 c/dk’dan 10 c/dk’ya
              </div>
              <div className="page-content">Ateşleme odası boyutları w/d/h 180/100/170 mm</div>
              <div className="page-content">Boyutlar (kontrol bloğu olmadan)</div>
              <div className="page-content">W/d/h 60x400x360 mm</div>
              <div className="page-content">Ağırlık 28кg</div>
              <br />
              <div className="page-title">FIREMAGIC ET400</div>
              <div className="page-content">
                Preheating oven for casting rings and wax evaporation
              </div>
              <li className="page-content">10 +1 User Programs</li>
              <li className="page-content">5 Temperature Zones</li>
              <li className="page-content">Automatic Parameter Control</li>
              <li className="page-content">Postponed Start Up To 90 H</li>
              <li className="page-content">Automatic Control Of Steam Extractor</li>
              <li className="page-content">Working With Shock İnvestment</li> <br />
              <div className="page-title">TECHNICAL DATA</div>
              <div className="page-content">Power supply 230v±10%, 50hz</div>
              <div className="page-content">Power consumptıon 2000 w</div>
              <div className="page-content">Maxımum fırıng temperature 1100 ⁰c</div>
              <div className="page-content">Maxımum program duratıon 100 h</div>
              <div className="page-content">
                Temperature speed of ıncrease between the zones from 1⁰ c/mın to 10⁰ c/mın
              </div>
              <div className="page-content">Fırıng chamber dımensıons w/d/h 180/100/170 mm</div>
              <br />
              <div className="page-content">Dımensıons (wıthout control block)</div>
              <div className="page-content">W/d/h 360x400x360 mm</div>
              <div className="page-content">Weıght 28кg</div>
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

export default FireMagicEt400;

export const FireMagicEt400Title = () => {
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
              href="/urunler/dental-firinlar/dokum-firinlar"
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
              Döküm Fırınları
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
              FireMagic ET400
            </MKTypography>
          </Grid>
        </Container>
        <MKTypography
          sx={{ mx: "auto", textAlign: "center", marginTop: 8 }}
          className="productTitle"
        >
          {" "}
          FireMagic ET400
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
              <div className="page-content">
                Döküm halkaları ve balmumu buharlaşması için ön ısıtma fırını
                <li>10 +1 Kullanıcı Programı</li>
                <li>5 Sıcaklık Bölgesi</li>
                <li>Otomatik Parametre Denetimi</li>
                <li>90 Saate Kadar Ertelenmiş Başlangıç</li>
                <li>Buhar Çıkarıcının Otomatik Kontrolü</li>
                <li>Şok Yatırımla Çalışmak</li>
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
