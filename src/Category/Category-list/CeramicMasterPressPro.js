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
function CeramicMasterPressPro() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Aksesuarlar</div>

              <li className="page-content">Yalıtım basın tablosu</li>
              <li className="page-content">Seramik kesici uç 100 g halka</li>
              <li className="page-content">Seramik kesici uç 200 g halka</li>
              <li className="page-content">Yalıtım tablosu</li>
              <li className="page-content">Ateşleme tepsisi</li>
              <li className="page-content">Pinler</li>
              <li className="page-content">Vakum pompası RVD50</li>
              <br />
              <div className="page-title">Teknik Bilgiler</div>
              <div className="page-content">Güç kaynağı: ~110/230 v ±10%, 50/60 hz</div>
              <br />
              <div className="page-title">Güç Tüketimi</div>
              <div className="page-content">Vakumlu pompalı fırın: 1700 w</div>
              <div className="page-content">Vakumlu pompasız fırın: 1550 w</div>
              <br />

              <div className="page-title">Vakum Pompası Verileri</div>
              <div className="page-content">{"Emiş kapasitesi: >22 l/dak."}</div>
              <div className="page-content">Ayarlanabilir vakum: f0,96 bara kadar</div>
              <div className="page-content">Maksimum ateşleme sıcaklığı: 1200°с</div>
              <div className="page-content">Ateşleme odası boyutları: ф 95 mm, h 60 mm</div>
              <br />

              <div className="page-title">Boyutlar</div>
              <div className="page-content">(w/d/h): 260/370/750 mm</div>
              <div className="page-content">Ağırlık: 24,2 кg</div>
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

export default CeramicMasterPressPro;

export const CeramicMasterPressProTitle = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <h5>Metal, Saf Ve Pres Seramikleri İçin Otomatik Programlanabilir Diş Fırını</h5>{" "}
              <br />
              <div className="page-content">
                <li>Her türlü diş metali, saf ve pres seramikleri için tasarlanmıştır</li>
                <li>Presleme işlemi için kompresöre gerek yoktur</li>
                <li>Sıcaklığın otomatik kalibrasyonu</li>
                <li>255 ayrı program mevcuttur</li>
                <li>
                  Programların sayısının 400’e kadar isteğe bağlı olarak artırılması mevcuttur
                </li>
                <li>Tamamen kontrollü süreç – her programda programlanabilir parametreler</li>
                <li>Geliştirilmiş kendi kendine teşhis ve otomatik kalibrasyon sistemi</li>
                <li>Koruyucu temperli camlı 7” tft ekran</li>
                <li>Sensör düğmeleri</li>
                <li>Süreçlerin ilerlemesinin grafiksel gösterimi</li>
                <li>Kuvars spiral tüpte ısıtma elemanı olan ısıtıcı</li>
                <li>Pt/ro termokuple</li>
                <li>Kısa güç kesintisinden sonra programın otomatik devamı</li>
                <li>Program parametrelerinin usb aktarımı</li>
                <li>Hasarın uzaktan analizi</li>
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
              href="/urunler/dental-firinlar"
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
              Dental Fırınlar
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
            <MKTypography
              component="a"
              href="/urunler/dental-firinlar/press-firinlar"
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
              Press Fırınları
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
              CeramicMaster Press Pro
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
