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
function Polimax() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Teknik Bilgiler</div>

              <div className="page-content">Güç kaynağı: 230 v ±10%, 50 hz</div>
              <div className="page-content">Güç tüketimi:1220 w</div>
              <div className="page-content">Çalışma odası iç boyutları: ф 225 mm, h 168 mm</div>
              <div className="page-content">Oda hacmi: 6,5 l</div>
              <div className="page-content">Maksimum çalışma basıncı: 6 bar</div>
              <div className="page-content">Programlanabilir çalışma sıcaklığı: 40 ıla 125°c</div>
              <div className="page-content">
                Polimerizasyon için programlanabilir zaman: 1 ıla 99 dk
              </div>
              <br />
              <div className="page-title">Boyutlar</div>
              <div className="page-content">W/d/h: 390x450x340 mm</div>
              <div className="page-content">Ağırlık: 28.7 кg</div>

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

export default Polimax;

export const PolimaxTitle = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <h5>Islak Ve Kuru Basınçlı Polimerizasyon Ünitesi</h5>
              <br />
              <div className="page-content">
                <li>Islak ve kuru polimerizasyon için polimerizasyon ünitesi</li>
                <li>Tamamen otomatik işlem</li>
                <li>İki aşamalı polimerizasyon</li>
                <li>Sıcaklığın mikroişlemci kontrolü ve polimerizasyon süresi</li>
                <li>Her türlü şişe için uygun</li>
                <li>Birim odasında bütün bir artikülatör konulabilir</li>
              </div>
              <br />
              <h5>Aksesuarlar</h5>
              <br />
              <div className="page-content">
                <li>Sıdırmazlık halkası</li>
                <li>Metal filtre</li>
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
