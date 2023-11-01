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
function QuattroAskiliDisUnitesi() {
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
    (product) => product.model !== "QUATTRO Askılı Diş Ünitesi"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Güvenli ve Pratik Çalışma</div>

              <li className="page-content">
                Doktorun hastaya yaklaşmasını kolaylaştıra “Yakın dikkat” tasarımlı sırtlık
              </li>
              <li className="page-content">
                Acil durumlar için otomatik durmayı sağlayan emniyet anahtarı
              </li>
              <li className="page-content">
                Koltuğa monte, pnömatik sistemli 90 derece dönebilen seramik kreşuar
              </li>
              <li className="page-content">
                Başlıkların hızını ve koltuğun hareketlerini kumanda eden tek bir ayak pedalı
              </li>
              <br />

              <div className="page-title">Özgür Hareket Kabiliyeti</div>
              <li className="page-content">
                Elektromekanik sistemli, LP ve 0 pozisyonlarını içeren 4 programlı trandelenburg
                pozisyonu alabilen ergonomik koltuk
              </li>
              <li className="page-content">
                Sırtlık ve ayaklığın hastayı rahatsız etmeyen senkronize hareketi
              </li>
              <li className="page-content">24 V DC motorları destekleyen amortisör sistemi</li>
              <br />

              <div className="page-title">Luzzani Sistemli</div>
              <li className="page-content">Asistan ve Doktor tablasında luzzani hava su spreyi</li>
              <br />
              <div className="page-title">Asistan Kontrol Paneli</div>
              <li className="page-content">
                Beş çıkışlı unit ve koltuk hareketlerinin kontrolünün yapılabildiği asistan kontrol
                paneli
              </li>
              <br />
              <div className="page-title">Geniş Doktor Tablası</div>
              <li className="page-content">
                Hekimin Rahat çalışabilmesi için tasarlanmış geniş enstrüman tablası
              </li>
              <br />
              <div className="page-title">Reflektör</div>
              <li className="page-content">
                Doğal gün ışığına yakın soğuk ışıklı iki kademeli aydınlatma sensörlü veya sensörsüz
                reflektör sistemi
              </li>
              <br />
              <div className="page-title">Estetik Cam Greşuar</div>
              <li className="page-content">
                Koltuğa monte pnömatik sistemli 90 derece dönebilen seramik çanaklı greşuar.
                Zamanlanabilir ve otoklavlanabilir bardak doldurucu ve çanak yıkayıcı
              </li>
              <br />
              <div className="page-title">Ayak Padedalı</div>
              <li className="page-content">
                Başlıkların hızını ve koltuğun hareketlerini kumanda eden ayak pedalı
              </li>
              <br />
              <div className="page-title">Ergonomik Tetiyer</div>
              <li className="page-content">Çift mafsallı pedo kullanıma uygun ergonomik tetiyer</li>
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

export default QuattroAskiliDisUnitesi;

export const QuattroAskiliDisUnitesiTitle = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <div className="page-title">
                <h5 className="dark-text">Ergonomik</h5>
              </div>

              <div className="page-content">
                <li>Koltuğun 45 cm iniş mesafesi ile oturarak rahat çalışma alanı</li>
                <li>Doktorun rahatça çalışabileceği geniş enstrüman tablası</li>
                <li>Doktora çalışma kolaylığı sunan pnömatik fren sistemi</li>
                <li>Çift mafsallı pedo kullanıma uygun ergonomik tetiyer</li>
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
              QUATTRO Askılı Diş Ünitesi
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
