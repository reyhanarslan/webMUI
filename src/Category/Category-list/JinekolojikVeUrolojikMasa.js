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
function JinekolojikVeUrolojikMasa() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true,
    autoplay: true,
  };
  const filteredProducts = Products[3].product.filter(
    (product) => product.model !== "Jinekolojik ve Ürolojik Masa"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Motorlu Jinekolojik Masa</div>

              <div className="page-content">
                Masanın aşağı-yukarı hareketi elektromekanik motor ile sırt kısmı hareketi gazlı
                piston yardımı ile çalışmaktadır.
              </div>
              <br />
              <div className="page-content">Motor Kumandası Ayak Pedalı ile sağlanmaktadır.</div>
              <br />
              <div className="page-content">
                <b>Motorlu Jinekolojik Masaistek doğrultusunda</b> hem Ayak hem de El kumandalı
                olarak üretilmektedir.
              </div>
              <br />
              <div className="page-content">
                Masada: Oturma, Sırt ve Bacaklık kısmı bulunmaktadır.
              </div>
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

export default JinekolojikVeUrolojikMasa;

export const JinekolojikVeUrolojikMasaTitle = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <div className="page-title">
                <h5 className="dark-text">Ergonomik:</h5>
              </div>

              <div className="page-content">
                Modern Jinekolojik ve Ürolojik Masalar, muayene ve müdahaleye uygun olarak
                tasarlanıp üretilmiştir. <br /> Ergonomik yapısı ve çeşitli aksesuarlarıyla
                muayeneden doğuma kadar kullanım kolaylığı sağlamaktadır.
                <br /> Ayak kumandası ile masa hareketleri kolayca sağlanmaktadır.
                <br /> İstek üzerine el kumandalı olarak da üretilmektedir.
                <br /> Kolayca sökülüp takılan Aksesuar Tutucular ve Bacaklık ve Kolçaklık anında
                kolayca ayarlanabilmektedir.
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
              href="/urunler/dis-uniteleri"
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
              Diş Üniteleri
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
              Jinekolojik ve Ürolojik Masa
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
