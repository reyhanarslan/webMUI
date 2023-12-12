import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import Content_1 from "assets/images/content-imgs/sliamill_t5_edition/10.jpg";
import Content_2 from "assets/images/content-imgs/sliamill_t5_edition/11.jpg";
import Content_3 from "assets/images/content-imgs/sliamill_t5_edition/12.jpg";
import Content_4 from "assets/images/content-imgs/sliamill_t5_edition/13.jpg";
import Content_5 from "assets/images/content-imgs/sliamill_t5_edition/15.jpg";
import Content_6 from "assets/images/content-imgs/sliamill_t5_edition/8.jpg";
import Content_7 from "assets/images/content-imgs/sliamill_t5_edition/9.jpg";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Katalog from "assets/docs/SilamillT5Edition/T5edition.pdf";

import { Button, Icon, useMediaQuery, useTheme } from "@mui/material";
import MKTypography from "components/MKTypography";
import Slider from "react-slick";
import Products from "products/ProductDatas/products";

const itemData = [
  {
    img: Content_1,
    title: "Bed",
    author: "",
  },
  {
    img: Content_2,
    title: "Books",
    author: "",
  },
  {
    img: Content_3,
    title: "Kitchen",
    author: "",
  },
  {
    img: Content_5,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_6,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_4,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_7,
    title: "Blinds",
    author: "",
  },
];

function SilamillT5Edition() {
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
    (product) => product.model !== "SILAMILL T5 EDITION"
  );
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title"></div>
              <div className="page-content">
                Yeni SilaMill T5 Edition, diskleri sabitlemek için yenilikçi DirectDiscTeknolojisi
                ile donatılmıştır. Bu aletsiz boş sıkıştırma sistemi sayesinde makine daha hızlı ve
                kolay malzeme ile yüklenebilir.
              </div>{" "}
              <br />
              <div className="page-content">
                Dahili bir iyonlaştırıcı, akrilik parçacıkların statik yükünü nötralize eder ve
                çalışma alanındaki gelişmiş hava sirkülasyonu da temizleme süresini önemli ölçüde
                azaltır. Ancak hepsi bu kadar değil – bu kuru freze makinesinin daha ikna edici bir
                vurgusu, basitleştirilmiş destek için yerleşik bir kamera içerir.
              </div>{" "}
              <br />
              <div className="page-content">
                Ethernet bağlantı noktası, makinenin kurulum konumundaki bağlantının kararlılığını
                ve esnekliğini artırır.
              </div>{" "}
              <br />
              <div className="page-title">Benzersiz Hassasiyet</div>
              <br />
              <li className="page-content">Ultra HD’de restorasyonlar</li>
              <li className="page-content">
                En yüksek çalışma doğruluğu için 4 katlı hibrit seramik bilyalı rulmanlara sahip
                birinci sınıf mil
              </li>
              <li className="page-content">3 mikron tekrarlama doğruluğu</li>
              <br />
              <div className="page-title">Güçlü ve Sağlam</div>
              <br />
              <li className="page-content">
                CoCr Ddhil olmak üzere piyasadaki en sert malzemeleri frezeler.{" "}
              </li>
              <li className="page-content">Güçlü 500 watt mil ve 60.000 rpm</li>
              <li className="page-content">Maksimum sertlik için ağır endüstriyel kalite</li>
              <li className="page-content">En düşük titreşimler için katı döküm gövde</li>
              <br />
              <div className="page-title">Maksimum Bağımsızlık</div>
              <br />
              <li className="page-content">
                98 mm disk formatında sınırsız malzeme erişilebilirliği, ayrı blok ve prefabrik
                abutment tutucular mevcuttur
              </li>
              <li className="page-content">
                Eksendeki ± 35° dönüş açısı ve 40 mm’ye kadar boşluklar nedeniyle en geniş
                endikasyon aralığını kapsar
              </li>
              <br />
              <div className="page-title">Kanıtlanmış Alman Güvenilirliği</div>
              <br />
              <li className="page-content">%100 Almanya’da tasarlandı ve üretildi</li>
              <li className="page-content">
                Mekanik, elektronik ve mili korumak için sofistike sızdırmazlık hava konsepti
              </li>
              <li className="page-content">Uzaktan destek için web kamerası</li>
              <li className="page-content">Kararlı uzun menzilli bağlantı için ethernet</li>
              <br />
              <div className="page-title">Son Derece Ekonomik</div>
              <br />
              <li className="page-content">
                Kolay makine temizliği için iyonlaştırıcı ve geliştirilmiş hava sirkülasyonu
              </li>
              <li className="page-content">
                DirectDisc Devrim niteliğinde disk sıkıştırma teknolojisi
              </li>
              <li className="page-content">16 araç için otomatik değiştirici</li>
              <li className="page-content">Mükemmel eşleşen CAM yazılımı fiyata dahil</li>
              <br />
              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}></Grid>
          </Grid>

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

export default SilamillT5Edition;

export const SilamillT5EditionTitle = () => {
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
          {" "}
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
              SILAMILL T5 EDITION
            </MKTypography>
          </Grid>
        </Container>
        <MKTypography
          sx={{ mx: "auto", textAlign: "center", marginTop: 8 }}
          className="productTitle"
        >
          {" "}
          SILAMILL T5 EDITION
        </MKTypography>
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <div className="page-content">
                Kanıtlanmış kalite artık daha da iyi: Yeni SilaMill T5 Edition ile mükemmel kuru
                frezeleme sonuçları elde edeceksiniz. Özellikle çok çeşitli endikasyonları ve
                malzemeleri (40 mm’ye kadar boşluklar) 5 eksenle işleyin. Aletsiz boş sıkıştırma ve
                yerleşik iyonlaştırıcı gibi devrim niteliğindeki teknoloji bunu yapmanıza yardımcı
                olacaktır.
                <br />
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
