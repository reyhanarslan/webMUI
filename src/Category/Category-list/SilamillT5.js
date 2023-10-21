import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import Content_1 from "assets/images/content-imgs/silamill_t5/11.jpg";
import Content_2 from "assets/images/content-imgs/silamill_t5/12.jpg";
import Content_3 from "assets/images/content-imgs/silamill_t5/13.jpg";
import Content_4 from "assets/images/content-imgs/silamill_t5/7.jpg";
import Content_5 from "assets/images/content-imgs/silamill_t5/8.jpg";
import Content_6 from "assets/images/content-imgs/silamill_t5/9.jpg";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { Button } from "@mui/material";

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
];

function SilamillT5() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Simultane çalışabilen 5 eksen</div>

              <div className="page-content">
                Üç adet doğrusal x, y, z aksı ve iki adet dönel aksı sayesinde çok ve çeşitli kazıma
                olanağı sağlar.
              </div>
              <br />
              <div className="page-title">35 DERECEYE KADAR DÖNÜŞ AÇISI</div>

              <div className="page-content">
                Olağanüstü dönüş açısına sahip B ekseni, T5’i diş laboratuvarları için olduğu kadar
                prostodonti ve implantoloji için de elverişli kılar.
              </div>
              <br />
              <div className="page-title">40 mm’ye Dek Blok Kazıma</div>

              <div className="page-content">
                T5 çok çeşitli malzemeleri kazımanıza imkân tanır: mum, plastik, model alçısı,
                zirkonyum oksit, kompozit, kobalt-krom bazlı değerli olmayan alaşımlar.
              </div>
              <br />
              <div className="page-title">Tek Döküm Cihaz Yatağı</div>

              <div className="page-content">
                Beş taraftan kapalı döküm gövde titreşimleri emerek tüm makinenin stabilitesini
                garanti eder. Buna ilaveten, x, y ve z eksenlerindeki takviyeli doğrusal kızaklarla
                birlikte, iki noktadan monteli B ekseni tüm eksen sisteminin rijitliğini daha da
                artırır. Böylece her zaman birinci sınıf kazıma sonuçları elde edersiniz.
              </div>
              <br />
              <div className="page-title">Otomatik 16 Frez Değiştirici</div>

              <div className="page-content">
                İhtiyaç duyulan frezlere ilaveten, frez değiştiriciye farklı frezler takabilirsiniz.
                Böylece frez aşınsa bile kesintiye uğramadan çalışmaya devam edebilirsiniz. Elmas
                kaplı uçların kullanımı için haptik frez ölçümü vardır.
              </div>
              <br />
              <div className="page-title">Güçlü ve Yüksek Hassasiyete Sahip Senkron Spindle</div>

              <div className="page-content">
                4 katlı hibrit seramik bilyeli rulman ve sürekli yük altında 300W’lık güç ile iyi
                dengelenmiş tork aralığı.
              </div>
              <br />
              <div className="page-title">Sofistike Koruyucu Mekanizmalar</div>

              <div className="page-content">
                Ön kapakta kazıma esnasında tehlikeli bölgeyi koruyan otomatik emniyet kilidi
                bulunur. Havayı hapseden entegre çalışma haznesi sayesinde, cihazın mekanik
                aksamları tozdan korunur ve yıpranma payı en aza iner.
              </div>
              <br />
              <div className="page-title">Aksesuarlar İçin Pratik Çekmece</div>

              <div className="page-content">
                Pratik çekmecesi sayesinde frezleriniz ve bloklarınız iyi muhafaza edilir ve her an
                el altında bulunur. Çekmecede ayrıca frez bölmesi (ATB) bulunur. Numaralandırılmış
                30 slot CAM yazılımı tarafından yönetilir.
              </div>
              <br />

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

export default SilamillT5;

export const SilamillT5Title = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <div className="page-title">
                <h5>T5 – YENİ JENERASYON</h5>
              </div>
              <div className="page-content">
                T5, geniş kullanım alanına sahip beş eksenli kuru kazıma makinesidir. Stabil yapısı
                sayesinde muhteşem kazıma sonuçlarını garanti eder.
                <br />
                Otomatik frez değiştirici ve pratik aksesuar çekmecesi gibi pek çok avantajlı
                özelliği, T5 ile çalışmayı hızlı ve verimli hale getirir.
                <br />
                {"5 Eksen     1 Blok      16 Frez"}
                <br />
                <li>B aksı ± 35 derece</li>
              </div>
            </Grid>
          </Grid>
          <Button onClick={() => pdfDownloader()} style={{ fontSize: "16px" }}>
            <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "36px", marginRight: "8px" }} />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>Ürün Kataloğu</span>
          </Button>
        </Container>
      </MKBox>
    </div>
  );
};
