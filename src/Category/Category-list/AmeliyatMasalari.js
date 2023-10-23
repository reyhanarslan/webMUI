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

function AmeliyatMasalari() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title"></div>

              <div className="page-content">
                El kumandasının arızalanması durumunda masanın gövdesi üzerinde bulunan acil girişim
                düğmelerinin yardımıyla el kumandasındaki tüm hareketler yapılabilmektedir. Pozisyon
                değişikliklerindeki hareket hızı sabittir. Baş ve ayak bölümlerinin hareketleri
                mekanik olarak sağlanır. Masanın hareketlerini sağlayan elektrohidrolik sistem,
                entegre akü şarj sistemi ile beslenir ve elektrik kesintilerinde masaya toplam 30
                dakikalık hareket süresi (yaklaşık 30 tam hareket) sağlanır.
              </div>
              <br />
              <div className="page-content">
                Masanın üst tablası sıvıya dayanıklı malzemeden üretilmiştir. Baş, sırt-oturma ve
                ayak (sağ ve sol) bölümlerinden oluşan tabla hasta güvenliği ve hijyen gereklerini
                sağlayan 80 mm kalınlığında özel olarak tasarlanmış dört parça minderle kaplıdır. Bu
                minderler; antistatik özelliktedir; sıvı geçirmez özel bir malzeme ile kaplanmıştır
                ve ameliyathane koşullarında kullanılan temizleme uygulamaları ile uyumludur.
                Minderler yerlerinden kolaylıkla çıkarılır ve takılır.
              </div>
              <br />
              <div className="page-content">
                Masa tablası özel bir aksesuar kullanarak kolay bir şekilde radyolojik incelemeler
                için uygun duruma getirilebilir.
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
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default AmeliyatMasalari;

export const AmeliyatMasalariTitle = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <div className="page-content">
                Masanın; aşağı/yukarı, yatay kayma, sırt bölümü aşağı/ yukarı, Trendelenburg/ters
                Trendelenburg, sağ/sol lateral, fleks ve refleks hareketleri elektrohidrolik bir
                sistem ile gerçekleşir. Bu hareketler, kablolu el kumandası ile sessiz ve
                titreşimsiz olarak yapılır.
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
              Ameliyat Masaları
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
