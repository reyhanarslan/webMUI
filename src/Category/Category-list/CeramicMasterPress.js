import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { Button } from "@mui/material";
function CeramicMasterPress() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Teknik Bilgiler</div>
              <div className="page-content">Güç kaynağı: 110/230v ±10%, 50/60 hz</div>
              <br />
              <div className="page-title">Güç Tüketimi</div>
              <div className="page-content">Vakumlu pompalı fırın: 1700w</div>
              <br />
              <div className="page-title">Vakum Pompası Verileri</div>
              <div className="page-content">Emış kapasıtesı: 22 l/dk</div>
              <div className="page-content">Ayarlanabılır vakum: 0,1 ıla 0,92 bar</div>
              <div className="page-content">Maksımum ateşleme sıcaklığı: 1200 c</div>
              <div className="page-content">Ateşleme odası boyutları: ф 95 mm, h 60 mm</div> <br />
              <div className="page-title">Boyutlar</div>
              <div className="page-title">W/d/h: 370x380x740 mm</div>
              <div className="page-title">Ağırlık: 30кg</div>
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

export default CeramicMasterPress;

export const CeramicMasterPressTitle = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <h5>Metal, Saf ve Pres Seramikler İçin Programlanabilir Diş Fırını.</h5> <br />
              <div className="page-content">
                <li>Her türlü dental metal, saf ve preseramik için tasarlanmıştır</li>
                <li>Presleme işlemi için kompresöre gerek yoktur</li>
                <li>200 işletim programı</li>
                <li>Tamamen kontrollü ateşleme süreci</li>
                <li>Geliştirilmiş kendi kendine teşhis sistemi</li>
                <li>Sıcaklığın otomatik kalibrasyonu</li>
                <li>Kuvars susturucu</li>
              </div>
              <br />
              <h5>Aksesuarlar</h5> <br />
              <div className="page-content">
                <li>Yalıtım basın tablosu</li>
                <li>Seramik kesici uç 100 g halka</li>
                <li>Seramik kesici uç 200 g halka</li>
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
      </MKBox>
    </div>
  );
};
