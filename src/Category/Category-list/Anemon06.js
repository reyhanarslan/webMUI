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

function Anemon06() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">OPSİYONEL:</div>

              <div className="page-content">Anti-bakteriyel plastik çekmece düzenleyici (ABS)</div>
              <div className="page-content">Tezgah için cam seçeneği</div>

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

export default Anemon06;

export const Anemon06Title = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <div className="page-title">
                <h5>ÜRÜN ADI: Duvar Sabitlenen Klinik Tezgahı</h5>
                <b>ÜRÜN BOYUTLARI:</b>
                {"(E x D x Y) 500 x 2000 x 860. (±50 mm)"}
                <br />
                Üst Bölüm: Corian
                <br />
                Lavabo: Corian
              </div>

              <div className="page-content">
                <li>0.90-1 mm Çelik sactan üretilmiştir</li>
                <li>Elektrostatik toz boya ile boyanmıştır.</li>
                <li>Ral renk seçenekleri mevcuttur.</li>
                <li>Ayarlanabilir krom kaplı ayaklar</li>
                <li>Yavaş kapanma mekanizması ( Blum )</li>
                <li>Paslanma önleyici demir fosfat kaplaması</li>
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
