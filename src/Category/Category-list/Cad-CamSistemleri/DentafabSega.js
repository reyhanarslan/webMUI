import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export function DentaFabSega3D() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">
                Tüm diş uygulamalarınız için olağanüstü hız ve kalitede üretim!
              </div>
              <div className="page-content">
                Son derece hassas cerrahi kılavuzlar, geçici dişler, kronlar, köprüler, kısmi
                çerçeveler, özel ölçü tepsileri veya dişeti ve bunların hepsini birkaç dakika içinde
                üretebilirsiniz.
                <ul style={{ listStyleType: "circle" }}>
                  <li> Dental üretim için Ultra Hızlı DLP teknolojisi</li>
                  <li>Taban gerektirmeyen mükemmel yapışma teknolojisi</li>
                  <li>Mükemmel doğruluk ve hassasiyet</li>
                  <li>Köprüler</li>
                  <li>%99,9’un üzerinde başarılı baskı oranıyla kararlı üretim</li>
                  <li>20.000 saat projektör garantisi</li>
                  <li>Dakikalar içinde hızlı baskı için hızlı kürlenme özellikleri!</li>
                </ul>
              </div>
              <div className="page-title">Hız Önemlidir!</div>
              <div className="page-content">
                Tüm uygulamalarda olağanüstü hız, doğruluk ve kalite!
              </div>
              <div className="page-title">Teknik Özellikler</div>{" "}
              <div className="page-title">Baskı Teknolojisi</div>
              <div className="page-content">Fast DLP</div>
              <div className="page-title">Baskı Alanı</div>
              <div className="page-content">12 cm x 6,8 cm</div>
              <div className="page-title">Z Katman Kalınlığı</div>
              <div className="page-content">50 / 30 / 15 mikron</div>
              <div className="page-title">Baskı Hızı</div>
              <div className="page-content">50 mikronda 90 mm/saat</div>{" "}
              <div className="page-title">Projektör</div>
              <div className="page-content">385nm / 405nm seçenekleri</div>{" "}
              <div className="page-title">Bağlantı</div>
              <div className="page-content">5GHz Wi-Fi – USB Sürücü</div>{" "}
              <div className="page-title">Yazıcı Kontrolü</div>
              <div className="page-content">7″ Dokunmatik Ekran</div>
              <div className="page-title">Yazıcı Boyutları</div>
              <div className="page-content">32,5 cm x 32,5 cm x 56 cm</div>
              <div className="page-title">Yazıcı Ağırlığı</div>
              <div className="page-content">22 Kg</div>
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

export function DentaFabSega3DTitle() {
  const navigate = useNavigate();
  const test = () => {
    navigate("https://www.arenadis.com.tr/wp-content/uploads/2021/04/CS-3600-ARENA-KATALOG.pdf");
  };
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={3}>
            <Grid item xs={12} lg={12}>
              {/* Başlık */}
              <div className="page-title">
                <h5 className="dark-text"> 1 Cihaz, 12 Kusursuz İşlem!</h5>
              </div>

              <div className="page-content">
                1 Cihaz, 12 Kusursuz İşlem! Sega 3D Yazıcı, olağanüstü hızda yazdırırken çok yüksek
                doğruluk sağlamak için Ultra Hızlı DLP teknolojimizi kullanır.
              </div>

              {/* ... */}
            </Grid>
          </Grid>
      
        </Container>
      </MKBox>
    </div>
  );
}
