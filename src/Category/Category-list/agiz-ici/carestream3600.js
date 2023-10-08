import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export function Carestream3600() {
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
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
              <CenteredBlogCard
                image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                title="Get insights on Search"
                description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
                action={{
                  type: "internal",
                  route: "pages/company/about-us",
                  color: "info",
                  label: "find out more",
                }}
              />{" "}
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export function Carestream3600Title() {
  const navigate = useNavigate();
  const test = () => {
    navigate("https://www.arenadis.com.tr/wp-content/uploads/2021/04/CS-3600-ARENA-KATALOG.pdf");
  };
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={3}>
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
          <Button onClick={() => test()} style={{ fontSize: "16px" }}>
            <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "36px", marginRight: "8px" }} />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>Ürün Kataloğu</span>
          </Button>
        </Container>
      </MKBox>
    </div>
  );
}
