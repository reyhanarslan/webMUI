import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Katalog from "assets/docs/CeramicMatserE1000/E1000_en_230V_v3.pdf";
import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";

function CeramicMasterE1000() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Teknik Bilgiler</div>

              <div className="page-content">Güç kaynağı: 110/230v ±10%, 50/60 hz</div>
              <div className="page-content">Güç tüketimi</div>
              <div className="page-content">Vakumlu pompalı fırın: 1700w</div>
              <div className="page-content">Vakum pompası verileri</div>
              <div className="page-content">Emiş kapasitesi: 22 l/dk</div>
              <div className="page-content">Ayarlanabilir vakum: 0,1 ıla 0,92 bar</div>
              <div className="page-content">Maksimum ateşleme sıcaklığı: 1200 с</div>
              <div className="page-content">Ateşleme odası boyutları: ф 95 mm, h60 mm</div>
              <br />
              <div className="page-title">Boyutlar</div>

              <div className="page-content">W/d/h: 370x380x580 mm</div>
              <div className="page-content">Ağırlık: 27кg</div>

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

export default CeramicMasterE1000;

export const CeramicMasterE1000Title = () => {
  const pdfDownloader = () => {
    window.open(Katalog, "_blank");
  };
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <h5>Diş Seramikleri İçin Otomatik Programlanabilir Diş Fırını</h5> <br />
              <div className="page-content">
                <li>Her türlü diş metali ve saf seramik için tasarlanmıştır</li>
                <li>200 işletim programı</li>
                <li>Tamamen kontrollü ateşleme süreci</li>
                <li>Geliştirilmiş kendi kendine teşhis sistemi</li>
                <li>Sıcaklığın otomatik kalibrasyonu</li>
                <li>Kuvars susturucu</li>
              </div>
              <br />
              <h5>Diş Seramikleri İçin Otomatik Programlanabilir Vakum Fırını</h5> <br />
              <div className="page-content">
                <li>Yalıtım tablosu</li>
                <li>Ateşleme tepsisi</li>
                <li>Pinler</li>
                <li>Vakum pompası pvm122</li>
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
              href="/urunler/dental-firinlar/porselen-firinlar"
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
              Ceramic Processing - Porselen Fırınları
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
              CeramicMaster E1000
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
