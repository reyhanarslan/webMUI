import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

export function Sıladent3DPrinter() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">İşlev</div>
              <div className="page-content">
                Hava temizleme sistemi (aktif karbon filtresi), rahat 7 inç dokunmatik ekran
                kontrolü ve W-LAN & Ethernet ile kolay baskı gibi özel işlevler.
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
              </div>
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

export function Sıladent3DPrinterTitle() {
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={3}>
            <Grid item xs={12} lg={12}>
              <div className="page-content">
                SilaPrint LCD, LCD teknolojisi ve çift lineer Z ekseni yardımıyla ayrıntılı,
                boyutsal olarak doğru modeller sağlayan ve aynı zamanda daha düşük giriş fiyatı
                nedeniyle daha az model yazdırmak için ekonomik olan profesyonel ve çok yönlü bir 3D
                yazıcıdır.
              </div>
              <div className="page-content">
                Son derece hassas cerrahi kılavuzlar, geçici dişler, kronlar, köprüler, kısmi
                çerçeveler, özel ölçü tepsileri veya dişeti ve bunların hepsini birkaç dakika içinde
                üretebilirsiniz.{" "}
                <ul style={{ listStyleType: "circle", paddingLeft: "20px", marginTop: "20px" }}>
                  <li style={{ textAlign: "left" }}>DLP teknolojisi</li>
                  <li style={{ textAlign: "left" }}>
                    Taban gerektirmeyen mükemmel yapışma teknolojisi
                  </li>
                  <li style={{ textAlign: "left" }}>Yüksek çözünürlük</li>
                  <li style={{ textAlign: "left" }}>Tam boyutsal doğruluk</li>
                  <li style={{ textAlign: "left" }}>SilaPrint reçineleriyle mükemmel uyum</li>
                  <li style={{ textAlign: "left" }}>Sezgisel kontrol ve kullanılabilirlik</li>
                </ul>
              </div>
              {/* ... */}
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}
