import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import Content_1 from "assets/images/content-imgs/silamill_r5/7.png";
import Content_2 from "assets/images/content-imgs/silamill_r5/8.jpg";
import Content_3 from "assets/images/content-imgs/silamill_r5/9.jpg";
import Content_4 from "assets/images/content-imgs/silamill_r5/10.jpg";
import Content_5 from "assets/images/content-imgs/silamill_r5/11.jpg";
import Content_6 from "assets/images/content-imgs/silamill_r5/12.jpg";
import Content_7 from "assets/images/content-imgs/silamill_r5/13.jpg";
import Content_8 from "assets/images/content-imgs/silamill_r5/14.jpg";
import Content_9 from "assets/images/content-imgs/silamill_r5/15.jpg";
import Content_10 from "assets/images/content-imgs/silamill_r5/16.jpg";
import Content_11 from "assets/images/content-imgs/silamill_r5/17.jpg";
import Content_12 from "assets/images/content-imgs/silamill_r5/18.jpg";
import Content_13 from "assets/images/content-imgs/silamill_r5/19.jpg";
import Content_14 from "assets/images/content-imgs/silamill_r5/20.png";
import Content_15 from "assets/images/content-imgs/silamill_r5/21.jpg";
import Content_16 from "assets/images/content-imgs/silamill_r5/22.jpg";
import Content_17 from "assets/images/content-imgs/silamill_r5/23.png";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

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
    img: Content_4,
    title: "Blinds",
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
    img: Content_7,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_8,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_9,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_10,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_11,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_12,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_13,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_14,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_15,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_16,
    title: "Blinds",
    author: "",
  },
  {
    img: Content_17,
    title: "Blinds",
    author: "",
  },
];

function SilamillR5() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title"></div>
              <div className="page-content"></div>
              <div className="page-content">Cihazın kullanımı son derece kolaydır:</div>
              <br />
              <div className="page-content">
                Yeni Direkt Disk teknolojisi sayesinde alışılagelmiş geleneksel blok değiştiricili
                cihazları bir kenara bırakın! Kolay, güvenli ve hızlı bir çalışmaya merhaba deyin!
              </div>
              <br />
              <div className="page-content">
                Üreticisi fark etmeksizin her türlü materyalde en yüksek doğruluk ve mükemmel
                sonuçlar için en doğru tercih R5.
              </div>
              <br />
              <div className="page-title">Yetenekleriyle Alanın En İyisi</div>
              <div className="page-content">
                Direkt Temizleme Teknolojisi, entegre iyonizerler, aktif hazne havalandırması ve
                akıllı kurutma özelliği sayesinde ıslak ve kuru kazıma arasında hızlı ve mükemmel
                geçiş sağlar.
              </div>
              <br />
              <div className="page-content">
                Yeni entegre su soğutma özelliği sayesinde spindle’da ve Z eksenindeki ısıya bağlı
                genleşmeyi minimuma indirir. Daha hızlı kazıma, daha sabit sonuçlar ve daha uzun
                spindle ömrü sağlar.
              </div>
              <br />
              <div className="page-content">
                Otomatik blok değiştiricisi, 40 mm kalınlığa dek blokları hızlı ve kolay bir biçimde
                değiştirerek vakit kaybetmeden işe koyulmanızı sağlar. Daha da iyisi, R5, B
                ekseninde +35 eğim açısı ile kullanıcıya maksimum çeşitlilik ve dizayn özgürlüğü
                sunar.
              </div>
              <br />
              <div className="page-title">Maksimum Hassasiyet</div> <br />
              <li className="page-content">Ultra HD restorasyonlar</li>
              <li className="page-content">Yüksek hassasiyete sahip spindle</li>
              <li className="page-content">3 mikron hassasiyet</li>
              <br />
              <div className="page-title">Yüksek Dayanıklılık</div> <br />
              <li className="page-content">
                Ti ve CoCr dahil, piyasadaki en sert materyalleri kazıyabilme
              </li>
              <li className="page-content">800 watts ve 80,000 RPM</li>
              <li className="page-content">Güçlü endüstriyel kalite</li>
              <br />
              <div className="page-title">Kullanıcı Özgürlüğü</div> <br />
              <li className="page-content">
                Parametreler: 98 mm disk blok format], 30 blok materyali ve 140’tan fazla titanium
                ve CoCr prefab abutment platformu mevcuttur.
              </li>
              <li className="page-content">
                ±35° B ekseni ve 40 mm’ye kadar kazıma kapasitesiyle en geniş kullanım alanına
                sahiptir.
              </li>
              <br />
              <div className="page-title">Son Derece Ekonomik</div> <br />
              <li className="page-content">Piyasadaki en hızlı cihazlardan biri</li>
              <li className="page-content">
                Direkt Disk Teknolojisi ile devrim niteliğinde materyal yerleştirme
              </li>
              <li className="page-content">
                10 disk blok, 60 blok ya da 60 prefab abutment bloğa kadar otomatik değiştirme
              </li>
              <li className="page-content">
                lonizer, kendini temizleme ve entegre kurutucu içeren Direkt Temizleme Teknolojisi
                sayesinde ıslak ve kuru kazıma arasındaki geçiş süresi minimuma iner.
              </li>
              <br />
              <div className="page-title">Eşsiz Güvenilirlik</div> <br />
              <li className="page-content">%100 Alman üretimi</li>
              <li className="page-content">
                Tüm yaşamsal sistem fonksiyonlarını izlemek için kapsamlı sensör teknolojisi
              </li>
              <li className="page-content">Uzaktan izleme için 2 webcam</li>
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
        </Container>
      </MKBox>
    </div>
  );
}

export default SilamillR5;
