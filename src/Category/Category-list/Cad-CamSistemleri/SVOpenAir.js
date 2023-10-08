import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

export function SVOpenAir() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık
              <div className="page-title">İşlev</div>
              <div className="page-content">
                Vinyl Open Air, gerçek bir göz alıcıdır ve Vinyl serisinin akıllı optiklerden gelen
                tek tamamen açık tarayıcısıdır. 180° açıklığı, kullanıcıya günlük rutinler sırasında
                modelleri eklemek için muazzam bir alan sunar. Eksik kapak olmasına rağmen Vinyl
                Open Air ile Vinyl serisinin verimliliği de sağlanıyor.
                <ul style={{ listStyleType: "circle", paddingLeft: "20px", marginTop: "20px" }}>
                  <li style={{ textAlign: "left" }}>Tam otomatik Z ekseni</li>
                  <li style={{ textAlign: "left" }}>Sanal artikülatör</li>
                  <li style={{ textAlign: "left" }}>Tek renkli ve renkli doku taraması</li>
                  <li style={{ textAlign: "left" }}>Dokunmatik ekran</li>
                  <li style={{ textAlign: "left" }}>Diş Taraması</li>
                  <li style={{ textAlign: "left" }}>Evrensel mod</li>
                </ul>
              </div>
              <div className="page-title">Kontrol ve Kullanım Kolaylığı</div>
              <div className="page-content">
                Eğilen 7 inç dokunmatik ekranlı monitör kullanıcıları, entegre kontrol panelini
                kullanarak yazdırma ayarlarını ve yazdırma durumunu her an kolayca kontrol edebilir.
              </div>
              <div className="page-title">Dental 3D yazılım</div>
              <div className="page-content">
                Geliştirilen özel Dental üretim gereksinimleri için özel bir yazılım özel olarak
                tasarlanmıştır.
              </div> */}
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

export function SVOpenAirTitle() {
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={3}>
            <Grid item xs={12} lg={12}>
              <div className="page-content">
                Vinyl Open Air, gerçek bir göz alıcıdır ve Vinyl serisinin akıllı optiklerden gelen
                tek tamamen açık tarayıcısıdır. 180° açıklığı, kullanıcıya günlük rutinler sırasında
                modelleri eklemek için muazzam bir alan sunar. Eksik kapak olmasına rağmen Vinyl
                Open Air ile Vinyl serisinin verimliliği de sağlanıyor.
                <ul style={{ listStyleType: "circle", paddingLeft: "20px", marginTop: "20px" }}>
                  <li style={{ textAlign: "left" }}>Tam otomatik Z ekseni</li>
                  <li style={{ textAlign: "left" }}>Sanal artikülatör</li>
                  <li style={{ textAlign: "left" }}>Tek renkli ve renkli doku taraması</li>
                  <li style={{ textAlign: "left" }}>Dokunmatik ekran</li>
                  <li style={{ textAlign: "left" }}>Diş Taraması</li>
                  <li style={{ textAlign: "left" }}>Evrensel mod</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}
