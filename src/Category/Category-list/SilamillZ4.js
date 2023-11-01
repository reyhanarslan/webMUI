import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Katalog_1 from "assets/docs/SilamillR5/R5_1.pdf";
import Katalog_2 from "assets/docs/SilamillR5/R5_2.pdf";
import Katalog_3 from "assets/docs/SilamillR5/R5_3.pdf";

import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";
import Slider from "react-slick";
import Products from "products/ProductDatas/products";
function SilamillZ4() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true,
    autoplay: true,
  };
  const filteredProducts = Products[1].product.filter((product) => product.model !== "SILAMILL Z4");
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Mükemmelliğin Nirvanası</div>
              <br />

              <div className="page-content">
                Diş hekimleri neden daha azına razı olsun? Her diş hekimi usta işi restorasyonlar
                yapmak ister. Yaygınlaşacak olan ofis içi üretim için Z4’ü geliştirdik. Geleceğe
                hitap eden muhafazanın içinde kolay ve sezgisel çalışma biçimiyle en iyi laboratuvar
                cihazlarının genlerine sahip bir kazıyıcı var.
              </div>
              <br />

              <div className="page-title">KOLAY KULLANIM</div>
              <br />

              <div className="page-title">Malzemeler</div>
              <br />
              <li className="page-content">Cam seramik</li>
              <li className="page-content">PMMA</li>
              <li className="page-content">Zirkonyum oksit</li>
              <li className="page-content">Kompozitler</li>
              <li className="page-content">Önceden işlenmiş titanyum abutmentler</li>
              <br />
              <div className="page-title">Yıllık Lisans Ücreti Yok</div>
              <br />
              <div className="page-content">
                Yazılım sadece CS ailesi için tasarlanmıştır. Lisans cihazın kendi içerisinde
                olduğundan, programın kurulu olduğu her bilgisayarda cihaz aktif olarak
                kullanılabilir. Yani birden çok bilgisayara kurulabilir, birden çok hekim aynı
                cihazı kullanabilir. Yazılımın kullanımı çok kolaydır, hasta kayıtları kolayca
                eklenip silinebilir. Ayrıca yıllık ödemeniz gereken lisans ücreti külfeti de
                bulunmamaktadır.
              </div>
              <br />

              <div className="page-title">Diş Tedavisi Alanında Yeni Kalite Standardı</div>
              <br />
              <div className="page-content">
                İngotların sulu kazınmasında yeni kalite standardını tanımlıyor. Cam seramikler,
                PMMA, zirkonyum oksit ve kompozitlerin restorasyonuna ek olarak önceden işlenmiş
                titanyum abutment lar da en yüksek hassasiyetle kazınabiliyor.
              </div>
              <br />

              <div className="page-title">Kalite</div>
              <br />
              <li className="page-content">
                100000 rpm’e kadar çıkabilen en hassas şekilde balanslanmış yüksek frekanslı spindle
              </li>
              <li className="page-content">Hassas yataklama rayları ve üst sınıf bilyalı mil</li>
              <li className="page-content">Masif alüminyum döküm makine yatağı</li>
              <li className="page-content">Teknolojinin son noktası FPGA tabanlı kontrolör</li>
              <li className="page-content">Alman malı en üst seviye endüstriyel kalite</li>
              <br />

              <div className="page-title">Güvenlik</div>
              <br />
              <li className="page-content">
                İngot malzemesiyle, gerekli frez kasedini otomatik eşleştirme
              </li>
              <li className="page-content">
                Hasta tarafından yapılan izinsiz müdahaleler mümkün değildir
              </li>
              <li className="page-content">Çalışma odasında bulunan webcam</li>
              <br />

              <div className="page-title">Çevre ve Kaynaklar</div>
              <br />
              <li className="page-content">
                İç yalıtımı ve kalın duvarlı döküm muhafaza sayesinde aşırı derecede sessiz
              </li>
              <li className="page-content">Dışarıdan sıkıştırılmış hava beslemesi gerekmez</li>
              <li className="page-content">
                Zorunlu atık bertarafına tabi olan katkı maddeleri kullanmadan kazıma
              </li>
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

export default SilamillZ4;

export const SilamillZ4Title = () => {
  const pdfDownloader_1 = () => {
    window.open(Katalog_1, "_blank");
  };
  const pdfDownloader_2 = () => {
    window.open(Katalog_2, "_blank");
  };
  const pdfDownloader_3 = () => {
    window.open(Katalog_3, "_blank");
  };
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <div className="page-title">
                <h5>Kullanımı Kolay </h5>
              </div>{" "}
              <br />
              <div className="page-content">
                <li>Akıllı dokunmatik ekranla kullanım</li>
                <li>Çalışma odası otomatik kapısı</li>
                <li>Alet kullanmadan iş parçası montajı (tek tıkla montaj)</li>
                <li>Makinenin durumunu işaret eden renkli çalışma odası aydınlatması</li>
                <li>En az temizlik için anti grafiti kaplamalı çalışma odası</li>
                <li>Otomatik frez değişimi</li>
                <li>
                  Tutamaksız kendi kendine açılabilen çekmece su tankı ve frez kasetlerini
                  barındırır
                </li>
                <li>Renk kodlu frez kasedi</li>
                <li>Sökülebilir ve bulaşık makinesinde yıkanabilir su tankı</li>
                <li>Entegre Wifi Modülü</li>
              </div>
            </Grid>
          </Grid>
          <Button onClick={() => pdfDownloader_1()} style={{ fontSize: "16px" }}>
            <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "36px", marginRight: "8px" }} />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>Ürün Kataloğu</span>
          </Button>
          <Button onClick={() => pdfDownloader_2()} style={{ fontSize: "16px" }}>
            <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "36px", marginRight: "8px" }} />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>Ürün Kataloğu</span>
          </Button>
          <Button onClick={() => pdfDownloader_3()} style={{ fontSize: "16px" }}>
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
              SILAMILL Z4 EDITION
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
