import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { Icon } from "@mui/material";
import MKTypography from "components/MKTypography";
import Content_1 from "assets/content/Cs3700/2.jpg";
import Content_2 from "assets/content/Cs3700/5.jpg";
import Content_3 from "assets/content/Cs3700/6.jpg";

import Slider from "react-slick";
import Products from "products/ProductDatas/products";
export function Carestream3700() {
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
              <div className="page-title">Smart-Shade Teknolojisi</div>

              <div className="page-content">
                Patentli Smart-Shade teknolojisi ile otomatik olarak renk tonunu seçerken aynı
                zamanda kayıt edebilirsiniz.
              </div>
              <div className="page-title">İş Akışında Seçim Özgürlüğü</div>
              <div className="page-content">
                Restoratif,Ortodontik ,İmplant klink uygulamaları ve hatta cihaz uyku modu arasında
                kullanıcının kontrolünde olan devrimsel bir iş akışı özgürlüğü sağlar.
              </div>
              <div className="page-title">Ergonomik Kavrama Tasarımı</div>
              <div className="page-content">
                Ergonomik olarak en uygun tutuş kavrama tasarımı ile , Diş hekmilerine dengeli bir
                tarama kontrolü hissi verir.
              </div>
              <div className="page-title">Eklenen Dokunuş</div>
              <div className="page-content">
                Dokunmatik ekranın özelliği tarayıcı ve mouse arasında ileri/geri geçişin neden
                olduğu ek işlem adımlarını ortadan kaldırır.
              </div>
              <div className="page-title">Artırılmış Hassasiyet</div>
              <div className="page-content">
                Test edilmiş ve onaylanmış CS3700’ün ultra hızlı tarama özelliği ile alt yada üst
                çeneyi 30 sn içinde CS 3600 ile aynı netlikte tarayın.
              </div>
              <div className="page-title">Kontrol Sizde!</div>
              <div className="page-content">
                Opsiyonel bilek kayışı,kullanıcıya tedavi sırasında cihazı en iyi şekilde kontrol
                etmesini sağlar ve tarayıcının elden düşme riskini engeller.
              </div>
              <Grid item xs={12} md={12} lg={12} my={3}>
                <MKBox component="img" src={Content_1} width="100%" />
              </Grid>
              <div className="page-title">Smart-Shade Teknolojisi</div>
              <div className="page-content">
                Tek yüzeyden/yönden renk tonlarını toplayan diğer sistemlerden farklı olarak; CS3700
                yüzey üzerindeki bir çok farklı noktadan renk tonlarını toplar böylelikle daha net
                ve doğru bir klinik eşleme yapmamızı sağlar.
              </div>
              <Grid item xs={12} md={12} lg={12}>
                <MKBox component="img" src={Content_2} my={3} width="100%" />
              </Grid>
              <div className="page-title">Smart Shade Eşleşme Raporu</div>
              <div className="page-content">
                Tek bir tıklama ile çalışılan bölge üzerindeki diş tonlarına ait raporu hızlıca
                oluşturabilir,seçilmiş ilgi alanı için oluşturulan bu raporu , kullanıcıların
                çalıştıkları diş laboratuarlarıyla kolayca paylaşmalarını ve yönlendirmelerini
                sağlar.
              </div>
              <Grid item xs={12} md={12} lg={12}>
                <MKBox component="img" src={Content_3} my={3} width="100%" />
              </Grid>
              <div className="page-title">Kalibre Edilmiş Parlaklık</div>
              <div className="page-content">
                Kutu açılışında CS 3700 en güvenilir sabit ton eşlemesi için önceden kalibre
                edilerek kullancılarına gönderilmiştir.50 saatlik kullanım sonrasında ,akıllı
                kalibrasyon özelliği sayesinde cihaz sizi uyarıyor ve 12 saniyelik bir süre içinde
                gri bir kart üzerinde kullanıcılarına yeni kalibrasyonu yapmalarına olanak sağlıyor.
              </div>
              <div className="page-title">Çalışma Akışınız Hiç Bu Kadar Özgür Olmamıştı!</div>
              <div className="page-content">
                CS ScanFlow yazılımı intraoral tarama yazılım dünyasını yeniden inşa ediyor. Diğer
                tarama yazılım programlarının aksine tamamen açık olması kullanıcıya, sınırsız iş
                akışı kapasitesine sahip farklı klinik uygulamalar arasında özgürce, genişletilmiş
                işlem seçenekleri, tek tıklamayla dışa aktarma ve dokunmatik ekran özellikleri
                sağlamaktadır.
              </div>
              <div className="page-title">Sınırsız İş Akışı Kapasitesi</div>
              <div className="page-content">
                Tamamen yenilenmiş iş akış tasarımı; kullanıcıların tek bir taramadan farklı iş
                akışları arasında serbestçe gezinmelerini sağlar.
              </div>
              <div className="page-title">Genişletilmiş Data İşleme</div>
              <div className="page-content">
                Bu özellik sayesinde toplanan datalar daha çabuk ve kesin sonuçlar verecek şekilde
                işlenir.
              </div>
              <div className="page-title">Tek Tıklama ile Dışa Aktarım</div>
              <div className="page-content">
                Bu özellik ile taranan bölge datalarını dışa aktarmak ve değiştirmek çok daha hızlı
                ve kolay hale gelmektedir.
              </div>

              <div className="page-title">Dokunmatik Ekranın Sihri</div>
              <div className="page-content">
                Geliştirilmiş dokunmatik ekran navigasyonu ,sezgisel bir arayüz yazılımı ve
                kullanıcı arasında direkt bir etkileşim sağlar.
              </div>
              <div className="page-title">Hybrid Tarama</div>
              <div className="page-content">
                Hybrid tarama özelliği ile zorlu implant ve restorative tedavi verilerinin
                yakalanmasında ve implant kaynaklı restoratif tedavilerin datalarının kolaylıkla
                alınmasını sağlar.
              </div>
              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}></Grid>
            <div className="page-title" style={{ marginBottom: "10px" }}>
              Benzer Ürünleri İncele
            </div>
            <Grid item xs={12} md={12} lg={12} my={3} spacing={10}>
              <div style={{ marginTop: "30px !important" }}>
                <Slider {...settings}>
                  <div key={0} style={{ width: "300px", height: "170px" }}>
                    <CenteredBlogCard
                      image={Products[0].product[0].img[0]}
                      title={Products[0].product[0].model}
                      // description=""
                      action={{
                        type: "internal",
                        route: "/urun-detay/:y62vbr40D9",
                        color: "info",
                        label: "Ürünü İncele",
                      }}
                    />{" "}
                  </div>
                </Slider>
              </div>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export function Carestream3700Title() {
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
              Carestream CS 3700 Ağız İçi Tarayıcı
            </MKTypography>
          </Grid>
        </Container>
        <MKTypography
          sx={{ mx: "auto", textAlign: "center", marginTop: 8 }}
          className="productTitle"
        >
          {" "}
          Carestream CS 3700 Ağız İçi Tarayıcı
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
              {/* Başlık */}
              <div className="page-title">
                <h5 className="dark-text">Ürün Özellikleri:</h5>
                <span className="light-text">Ultra Hızlı Direkt Dijital Ölçü Sistemi</span>
              </div>

              <div className="page-content">
                CS3700; CS 3600 den %20 daha hızlı tarama sağlar buda kullanıcıya TURBO hızlı tarama
                imkanı verir. Önerilen pc konfigürasyonu kullanıldığında 30 sn için in vitro
                uygulamada tek çeneyi taradığı test edildi ve kanıtlandı. F.A Porsche tarafından
                tasarlanmış ergonomik dizaynı, hekimlerin çalışma ihtiyaçlarını gelişmiş uygulama
                fonksiyonlarının merkezine almıştır. Performansı intraoral taramada yeni nesil
                performans sunar. Yeni CS 3700 ile sadece intraoral taramalarınızı iyileştirmeyin,
                onu yeniden tanımlayın
              </div>

              {/* ... */}
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}
