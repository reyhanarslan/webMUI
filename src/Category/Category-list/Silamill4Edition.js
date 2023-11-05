import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Katalog from "assets/docs/Silamill4Edition/Teknik-Data.pdf";
import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";
import Slider from "react-slick";
import Products from "products/ProductDatas/products";
function Silamill4Edition() {
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
    (product) => product.model !== "SILAMILL 4 EDITION"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">SİMULTANE ÇALIŞAN 4 EKSEN</div>

              <div className="page-content">
                Entegre Harmonic Drive® döner ekseni (A ekseni) 360 derece dönüş açısına sahiptir.
              </div>
              <br />
              <div className="page-title">GENİŞ MALZEME YELPAZESİ VE KULLANIM ALANI</div>

              <div className="page-content">
                Plastik, mum, zirkonyum oksit, kompozit, kobalt-krom bazlı değerli olmayan
                metallerin kazınması mümkündür. Kronlar, köprüler (tam anatomik de olabilir), inlay,
                onlay, abutment vs.
              </div>
              <br />
              <div className="page-title">EN YÜKSEK HASSASİYET</div>

              <div className="page-content">
                Otomatik eksen ölçümü ve dengelemesi sayesinde yüksek hassasiyet sağlanır ve
                dolayısıyla en yüksek kalitede sonuçlara ulaşılır.
              </div>
              <br />
              <div className="page-title">OTOMATİK 7 FREZ DEĞİŞTİRİCİ</div>

              <div className="page-content">
                K4, kullanıcı müdahalesi olmadan bir bloğu tamamen işlemesine olanak veren otomatik
                7 frez değiştiriciye sahiptir.
              </div>
              <br />
              <div className="page-title">DÜNYA ÇAPINDA UYUMLULUK</div>

              <div className="page-content">
                100 – 240 V’luk geniş aralıklı değiştirme modlu güç ünitesi ve 50/60 Hz’lik ülkeye
                özel şebeke fişi sayesinde dünya çapında uyumludur. ABD ve Kanada’ya ihracat için
                ANSI/UL61010-1 sertifikasına sahiptir.
              </div>
              <br />
              <div className="page-title">SOFİSTİKE KORUYUCU MEKANİZMALAR</div>

              <div className="page-content">
                Ön kapakta kazıma esnasında tehlikeli bölgeyi koruyan otomatik emniyet kilidi
                bulunur. Havayı hapseden entegre çalışma haznesi sayesinde, cihazın mekanik
                aksamları tozdan korunur ve yıpranma payı en aza iner.
              </div>
              <br />
              <div className="page-title">ÖN BİLGİ GEREKTİRMEZ</div>

              <div className="page-content">
                Cihazla birlikte gelen Direct-Mill fonksiyonuna sahip DentalCAM yazılımı sayesinde
                kazıma işlemi hiç bu kadar kolay olmamıştı!
              </div>
              <br />

              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}></Grid>
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
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default Silamill4Edition;

export const Silamill4EditionTitle = () => {
  const pdfDownloader = () => {
    window.open(Katalog, "_blank");
  };
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
              href="/urunler/cad-cam-sistemleri/kaziyicilar"
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
              Kazıyıcılar
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
              SILAMILL 4 EDITION
            </MKTypography>
          </Grid>
        </Container>
        <MKTypography
          sx={{ mx: "auto", textAlign: "center", marginTop: 8 }}
          className="productTitle"
        >
          {" "}
          SILAMILL 4 EDITION
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
              <h5>MÜKEMMEL BAŞLANGIÇ</h5>
              <br />
              <div className="page-content">
                1 Cihaz, 12 Kusursuz İşlem!
                <br />
                K4’ün ilk göze çarpan özelliği kompakt tasarımıdır. Daha yakından incelediğimizde,
                cihazın rijit ve sağlam yapısı göze çarpmaktadır. Bu sayede, son derece sert olan
                krom-kobalt (CrCo) bazlı değerli olmayan metallerde bile birinci sınıf sonuçlar
                almanız garanti altına alınır.
                <br />
                {"4 Eksen     1 Blok     7 Frez"}
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
