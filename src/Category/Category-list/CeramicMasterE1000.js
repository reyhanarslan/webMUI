import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

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
