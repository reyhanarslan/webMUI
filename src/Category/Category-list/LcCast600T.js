import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { Link } from "react-router-dom";
import { Icon, useMediaQuery, useTheme } from "@mui/material";
import MKTypography from "components/MKTypography";
// import Iframe from "react-iframe";
import Slider from "react-slick";
import Products from "products/ProductDatas/products";
function LcCast600T() {
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
  const filteredProducts = Products[2].product.filter(
    (product) => product.model !== "LC CAST 600T"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Aksesuarlar</div>

              <li className="page-content">Pota tepsi</li>
              <li className="page-content">Halka tutucu</li>
              <li className="page-content">Pota</li>
              <li className="page-content">Silikon halka no2</li>
              <li className="page-content">Silikon halka no3</li>
              <li className="page-content">Silikon halka no4</li>
              <li className="page-content">Grafit kesici uç</li>
              <br />
              <div className="page-title">Teknik Bilgiler</div>
              <div className="page-content">Güç kaynağı: 110/230v~, ±10%, 50/60hz</div>
              <div className="page-content">Güç tüketimi: 2500 w</div>
              <div className="page-content">Potadaki minimum alaşım miktarı: 7 g</div>
              <div className="page-content">Potadaki maksimum alaşım miktarı: 80 g</div>
              <div className="page-content">
                Dış alaşımlı seramik pota için pota tipi: seramik potası
              </div>
              <div className="page-content">
                Değerli alaşımlar seramik için pota tipi: grafit uçlu pota
              </div>
              <div className="page-content">
                30 g dış alaşımının tamamen erimesi için maksimum süre: 60 sn
              </div>
              <div className="page-content">Soğutma otonom: damıtılmış su soğutma</div>
              <div className="page-content">Otomatik eritme için hf güç ayarı: otomatik</div>
              <div className="page-content">Motor ivmesi ayar kılavuzu: el ile</div>
              <div className="page-content">Otomatik döküm: otomatik</div>
              <div className="page-content">W/d/h boyutları: 564x620x540 mm</div>
              <div className="page-content">Ağırlık: 75 kg</div>
              <br />
              <div className="page-title">Youtube Videosu:</div>
              <div className="page-content">LC Cast 600T Filling of the wather tank</div>
              <Link to="https://www.youtube.com/watch?v=dEMArq04MaY&feature=youtu.be&ab_channel=VOPBulgaria">
                How to cast with LC Cast 600T
              </Link>

              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}></Grid>
          </Grid>
          <Grid my={1}>
            <iframe
              width={isMobile ? 450 : 800}
              height={isMobile ? 250 : 500}
              src="https://www.youtube.com/embed/dEMArq04MaY"
              title="How to cast with LC Cast 600T"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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

export default LcCast600T;

export const LcCast600TTitle = () => {
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
              Lc Cast 600T
            </MKTypography>
          </Grid>
        </Container>
        <MKTypography
          sx={{ mx: "auto", textAlign: "center", marginTop: 8 }}
          className="productTitle"
        >
          {" "}
          Lc Cast 600T
        </MKTypography>
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <br />
              <div className="page-content">
                Yüksek frekanslı indüksiyon eritme ve santrifüj döküm ile otomatik masa üstü diş
                döküm ünitesi.
                <br />
                <li>Dental Co-Cr, Ni-Cr ve değerli alaşımların dökümü için tasarlanmıştır</li>
                <li>Masa üstü tasarımı</li>
                <li>Hem manuel hem de otomatik eritme modu</li>
                <li>Optimum gücün otomatik bakım</li>
                <li>Otomatik döküm modu</li>
                <li>Otonom soğutma sistemi</li>
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
