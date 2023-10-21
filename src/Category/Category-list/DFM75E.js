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

function DFM75E() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Teknik Bilgiler</div>

              <div className="page-content">Güç kaynağı: 230 v ±10%, 50 hz</div>
              <div className="page-content">Güç tüketimi: 140 w</div>
              <div className="page-content">Mikromotor: 3m160-2</div>
              <div className="page-content">Türü: fırçasız</div>
              <div className="page-content">Güç çıkışı: 160 w</div>
              <div className="page-content">Hız: 450 ıle 30000 rpm arasında</div>
              <div className="page-content">Ters: evet</div>
              <br />
              <div className="page-content">Çalışma bölgesi:</div>
              <div className="page-content">Y ekseni hareketi: 75 mm</div>
              <div className="page-content">Zaxıs hareketi: 30 mm</div>
              <div className="page-content">Φ eksenı döndürme: 360°c</div>
              <div className="page-content">Yürütme mekanızmasının dıkey seyahatı: 70 mm</div>
              <div className="page-title">Boyutlar</div>
              <div className="page-content">W/d/h: 245x340x520 mm</div>
              <div className="page-content">Ağırlık: 18кg</div>

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

export default DFM75E;

export const DFM75ETitle = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <h5>Diş Freze Ünitesi </h5> <br />
              <div className="page-content">
                <li>Hem balmumu hem de diş alaşımlarının frezesi</li>
                <li>Hassas frezeleme ve delme</li>
                <li>olarak kullanılma imkanı</li>
                <li>Çalışma masasının elektromanyetik fiksasyonu</li>
              </div>
              <h5>Aksesuarlar:</h5>
              <div className="page-content">
                <li>Araçlar Başlangıç Kümesi</li>
                <li>Tablo</li>
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
