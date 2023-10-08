import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Poliam() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Teknik Bilgiler</div>

              <div className="page-content">Güç kaynağı: 230 v ±10%, 50 hz</div>
              <div className="page-content">Güç tüketimi: 1220 w</div>
              <div className="page-content">Çalışma odası iç boyutları: ф 140 mm, h 145 mm</div>
              <div className="page-content">Oda hacim: 1,5 l</div>
              <div className="page-content">Maksimum çalışma basıncı: 6 bar</div>
              <div className="page-content">Programlanabilir çalışma sıcaklığı: 40 ıla 125°c</div>
              <div className="page-content">
                Polimerizasyon için programlanabilir zaman: 1 ıla 99 dk
              </div>
              <br />
              <div className="page-title">Boyutlar</div>
              <div className="page-content">W/d/h: 315x350x260 mm</div>
              <div className="page-content">Ağırlık: 13 кg</div>

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

export default Poliam;
