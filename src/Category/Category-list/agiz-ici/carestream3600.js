import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Katalog from "assets/docs/CS_3600_ARENA_KATALOG.pdf";
// import { Document, Page } from "react-pdf";
import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";
import Content_1 from "assets/content/CS3600/8.png";
import Content_2 from "assets/content/CS3600/7.JPG";

// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Products from "products/ProductDatas/products";

export function Carestream3600() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
  };
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">
                CARESTREAM CS 3600: Dünyadaki dönüşüme üstün kaliteyle ayak uydurun…
              </div>

              <div className="page-content">
                Görüntüleme sistemlerinde kült marka KODAK’ın yeni adı: CARESTREAM. Firma son
                teknoloji ürünü CS 3600 ile dünyadaki tüm rakiplerine fark atıyor.
              </div>
              <div className="page-title">DİJİTAL DİŞ HEKİMLİĞİNE GİRİŞ KAPINIZ. . .</div>
              <div className="page-content">
                Uzun ve maliyetli ölçü alma sistemleri tüm dünyada yerini dijital sistemlere
                bırakıyor. 1980’lerin ortasında diş hekimliğine giren ağız içi tarama sistemlerinin
                çok yakın bir tarihte geleneksel yöntemleri tamamen tarihe karıştıracağı
                öngörülüyor. Dijital diş hekimliği, hekim ve laboratuvar arasındaki ilişkiyi de
                dönüştürüyor. Bu trendin bir parçası olarak ağız içi tarayıcılar, bu ilişkinin en
                önemli ayağını oluşturuyor.
              </div>
              <div className="page-title">ÖĞÜRME REFLEKSİ OLAN HASTALARIN RAHATSIZLIĞINA SON</div>
              <div className="page-content">
                Belirgin bir öğürme refleksi diş tedavisinin gerçekleştirilmesi için potansiyel bir
                problemdir. Bu açıdan bir dizi strateji mevcut olsa bile, en basit prosedürlerin
                bile kabul görmediği hastalar vardır. Bu durum, tedavi planı ve sonucu üzerinde
                önemli bir etki yaratabilir. Bu sorun ağız içi tarama sistemiyle birlikte tamamen
                sona eriyor! Bununla birlikte ağız içi tarayıcılar; azaltılmış hasta rahatsızlığı,
                zaman verimliliği, basitleştirilmiş klinik prosedürleri ve ölçü malzemelerine gerek
                kalmadan yüksek doğruluğa sahip taramalar yakalama ve bunları kolay depolama imkanı
                gibi birçok avantaj sunuyor. Bir diğer avantaj ise, hemen görselleştirilebilen
                tarama veri sonuçlarının teknisyene e-posta yoluyla kolayca ulaştırılabilmesi.
              </div>
              <div className="page-title">HASSASİYET VE KESİNLİKTE RAKİPLERİNİN ÖTESİNDE</div>
              <div className="page-content">
                Bir ağız içi tarayıcıda en önemli unsur verilerin kalitesi olmalıdır; buna
                ‘’doğruluk’’ diyoruz. Doğruluk, bir ölçünün gerçek değerlere uygunluğunu ifade eder.
                Doğruluk en önemli unsur olmakla birlikte, tekrarlanabilirliği yani ‘’kesinlik’’
                olmadan da bir şey ifade etmemektedir. CS 3600 yapılan son Avrupa araştırmalarında
                bu iki unsur açısından piyasadaki rakiplerini üstün kalitesiyle geride bırakmıştır!
              </div>
              <div className="page-title">YILLIK LİSANS ÜCRETİ YOK</div>
              <div className="page-content">
                Yazılım sadece CS ailesi için tasarlanmıştır. Lisans cihazın kendi içerisinde
                olduğundan, programın kurulu olduğu her bilgisayarda cihaz aktif olarak
                kullanılabilir. Yani birden çok bilgisayara kurulabilir, birden çok hekim aynı
                cihazı kullanabilir. Yazılımın kullanımı çok kolaydır, hasta kayıtları kolayca
                eklenip silinebilir. Ayrıca yıllık ödemeniz gereken lisans ücreti külfeti de
                bulunmamaktadır. Ayrıntılı bilgi ve cihaz sunumu talepleriniz için lütfen ofisimizle
                irtibata geçiniz…
              </div>
              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}></Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={12} my={3}>
            <MKBox component="img" src={Content_2} width="100%" />
          </Grid>
          <Grid item xs={12} md={12} lg={12} my={3}>
            <MKBox component="img" src={Content_1} width="100%" />
          </Grid>
          <div className="page-title" style={{ marginBottom: "50px" }}>
            Benzer Ürünleri İncele
          </div>
          <Grid item xs={12} md={12} lg={12} my={3} spacing={10}>
            <div style={{ marginTop: "50px !important" }}>
              <Slider {...settings}>
                <div key={0} style={{ width: "300px", height: "170px" }}>
                  <CenteredBlogCard
                    image={Products[0].product[1].img[0]}
                    title={Products[0].product[1].model}
                    // description=""
                    action={{
                      type: "internal",
                      route: "/urun-detay/:U2qoPEPPn7",
                      color: "info",
                      label: "Ürünü İncele",
                    }}
                  />{" "}
                </div>
              </Slider>
            </div>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export function Carestream3600Title() {
  // const navigate = useNavigate();
  const pdfViewer = () => {
    console.log("asdasd");
    window.open(Katalog, "_blank");
  };
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              {/* Başlık */}
              <div className="page-title">
                <h5 className="dark-text">Ürün Özellikleri:</h5>
                <span className="light-text">Ultra Hızlı Direkt Dijital Ölçü Sistemi</span>
              </div>

              <div className="page-content">
                Yeni CS 3600 intra oral dijital ölçü sistemi, saniyede 64 kare görüntü yakalayarak
                ultra hızlı dijital ölçü alımı sağlar. Gelişen dijital diş hekimliği
                teknolojilerinde dijital ortodontik aplikasyonlar, cerrahi kılavuz üretimi gibi
                diğer alanlarda da rahatlıkla kullanılabilir. Ağız içinde özel bir kurutmaya ihtiyaç
                duymayan sistem, mevcut metal restorasyonları rahatlıkla okuyabilir. 10 mikronun
                altında tarama hassasiyeti ile diş hekimliği teknolojilerinde yeni nesil dijital
                ölçü sistemidir. Tarama sisteminin yıllık lisanslaması yoktur, STL dosya formatında
                dışarı aktarım tamamiyle ücretsizdir ve hiçbir ara yazılım gerektirmez.
              </div>

              {/* ... */}
            </Grid>
          </Grid>
          <Button onClick={() => pdfViewer()} style={{ fontSize: "16px" }}>
            <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "36px", marginRight: "8px" }} />
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>Ürün Kataloğu</div>
          </Button>
        </Container>
        <Container style={{ backgroundColor: "#358EED", borderRadius: "20px" }}>
          <Grid container item mt={3} sx={{ justifyContent: "flex-start" }}>
            <MKTypography
              component="a"
              href="/urunler/agiz-ici-tarayicilar"
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
              Ağız İçi Tarayıcılar
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
              Carestream CS 3600 Ağız İçi Tarayıcı
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}
