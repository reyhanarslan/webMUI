import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import Content_1 from "assets/images/content-imgs/silamill_n4/2.jpg";
import Content_2 from "assets/images/content-imgs/silamill_n4/4.jpg";
import Content_3 from "assets/images/content-imgs/silamill_n4/5.jpg";
import Content_4 from "assets/images/content-imgs/silamill_n4/6.jpg";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Katalog from "assets/docs/SilamillN4Edition/SN4Edition.pdf";
import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";
import Slider from "react-slick";
import Products from "products/ProductDatas/products";
const itemData = [
  {
    img: Content_3,
    title: "Bed",
    author: "",
  },
  {
    img: Content_4,
    title: "Books",
    author: "",
  },
  {
    img: Content_1,
    title: "Kitchen",
    author: "",
  },
  {
    img: Content_2,
    title: "Blinds",
    author: "",
  },
];

function SilamillN4Edition() {
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
    (product) => product.model !== "SILAMILL N4 EDITION"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">4 Simultane Çalışma Ekseni</div>

              <div className="page-content">
                Dönel eksen (A ekseni), +190 ile -10 derece arasında dönebilir.
              </div>
              <br />
              <div className="page-title">8 Frezlik Otomatik Değiştirici</div>

              <div className="page-content">
                Her bir frezin yalnızca birkaç hareketle değiştirilebildiği ki adet çıkarılabilir
                değiştirme istasyonu sayesinde materyal otomatik olarak kazınırken siz de bitmiş işi
                makineden çıkarana kadar vaktinizi başka faydalı şeylere harcayabilirsiniz.
              </div>
              <br />
              <div className="page-title">Güçlü ve Yüksek Hassasiyete Sahip Senkron Spindle</div>

              <div className="page-content">
                4 katlı hibrid seramik bilyalı rulman ve sürekli yük altında 300W’lık güç.
              </div>
              <br />
              <div className="page-title">Ön Bilgi Gerektirmez</div>

              <div className="page-content">
                Birlikte gelen yazılımıyla özellikle yontma için uyarlanmış kazıma stratejileri
                sayesinde kazıma bilgisine sahip değilseniz bile ile kolay bir çalışma mümkündür.
              </div>
              <br />
              <div className="page-title">Koruyucu Mekanizmalar</div>

              <div className="page-content">
                Ön kapakta kazıma esnasında tehlikeli bölgeyi koruyan otomatik emniyet kilidi
                bulunur. Esnek kauçuk akordeon mekanik, elektronik sistemleri ve spindle’ı nemden
                etkili bir biçimde korur.
              </div>
              <br />
              <div className="page-title">Etkili Soğutma</div>

              <div className="page-content">
                Spindle’da konumlanmış sekiz sıvı püskürtücü, tüm kazıma aşamalarında frezin
                tamamını eşit şekilde soğutur.
              </div>
              <br />
              <div className="page-title">Geniş Kullanım Alanı</div>

              <div className="page-content">
                Kronlar, köprüler (tam anatomik de olabilir), inlay, onlay, abutment, teleskop kron,
                veneer, tabletops, vs.
              </div>
              <br />
              <div className="page-title">Tek Döküm Alüminyum Makine Yatağı</div>

              <div className="page-content">
                Tek döküm alüminyum makine yatağı ile en yüksek stabilite ve düşük titreşimli
                çalışma sağlanır.
              </div>
              <br />
              <div className="page-title">Dünya Çapında Uyumluluk</div>

              <div className="page-content">
                100 – 240 V’luk geniş aralıklı değiştirme modlu güç ünitesi ve 50/60 Hz’lik ülkeye
                özel şebeke fişi sayesinde dünya çapında uyumludur. ABD ve Kanada’ya ihracat için
                ANSI/UL61010-1 sertifikasına sahiptir.
              </div>
              <br />
              <div className="page-title">Laboratuvarlar İçin İdeal</div>

              <div className="page-content">
                N4 gecikme ve yüksek maliyetler olmadan üretim yapmak için idealdir. Sulu kesme
                makinesi N4 Edition’ı hâlihazırda var olan kuru kesme makinelerinize
                ekleyebilirsiniz. Bu sizi tek makinede arka arkaya sulu ve kuru kazıma yaparken
                gerekli hale gelen temizlik işinden kurtarır.
              </div>
              <br />

              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}></Grid>
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar position="below" title={item.author} />
                </ImageListItem>
              ))}
            </ImageList>
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

export default SilamillN4Edition;

export const SilamillN4EditionTitle = () => {
  const pdfDownloader = () => {
    window.open(Katalog, "_blank");
  };
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <div className="page-content">
                N4 Impression, bir dış üniteye ihtiyaç duymadan cam seramik, zirkonyum oksit,
                kompozit ve titanyum abutment’ları arka arkaya sulu yontabilen bir kazıyıcıdır. En
                yüksek hassasiyetli ve hızlı hareket sistemleriyle (ki bunlar tüm silamill
                makinelerin ortak özelliğidir) kapalı devre sıvı soğutma sisteminin olağanüstü
                seviyede kompakt bir muhafaza içinde bir araya gelmesidir.
                <br />
                {"4 Eksen     3 İngot      3 Frez"}
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
              SILAMILL N4 EDITION
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
