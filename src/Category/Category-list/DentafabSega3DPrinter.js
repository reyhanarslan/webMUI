import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import Content from "/assets/images/content-imgs/dentafabsega3d/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";
function DentafabSega3DPrinter() {
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
              <br />
              <div className="page-content">
                Son derece hassas cerrahi kılavuzlar, geçici dişler, kronlar, köprüler, kısmi
                çerçeveler, özel ölçü tepsileri veya dişeti ve bunların hepsini birkaç dakika içinde
                üretebilirsiniz.
              </div>
              <br />
              <li className="page-content">Dental üretim için Ultra Hızlı DLP teknolojisi</li>
              <li className="page-content">Taban gerektirmeyen mükemmel yapışma teknolojisi</li>
              <li className="page-content">Mükemmel doğruluk ve hassasiyet</li>
              <li className="page-content">
                %99,9’un üzerinde başarılı baskı oranıyla kararlı üretim
              </li>
              <li className="page-content">20.000 saat projektör garantisi</li>
              <li className="page-content">
                Dakikalar içinde hızlı baskı için hızlı kürlenme özellikleri!
              </li>
              <div className="page-title">Hız Önemlidir!</div>
              <br />
              <div className="page-content">
                Tüm uygulamalarda olağanüstü hız, doğruluk ve kalite!
              </div>
              <br />
              <h3 className="page-content">Teknik Özellikler</h3> <br />
              <div className="page-title">Baskı Teknolojisi</div>
              <br />
              <div className="page-content">Fast DLP</div>
              <br />
              <div className="page-title">Baskı Alanı</div>
              <br />
              <div className="page-content">12 cm x 6,8 cm</div>
              <br />
              <div className="page-title">Z Katman Kalınlığı</div>
              <br />
              <div className="page-content">50 / 30 / 15 mikron</div>
              <br />
              <div className="page-title">Baskı Hızı</div>
              <br />
              <div className="page-content">50 mikronda 90 mm/saat</div>
              <br />
              <div className="page-title">Projektör</div>
              <br />
              <div className="page-content">385nm / 405nm seçenekleri</div>
              <br />
              <div className="page-title">Bağlantı</div>
              <br />
              <div className="page-content">5GHz Wi-Fi – USB Sürücü</div>
              <br />
              <div className="page-title">Yazıcı Kontrolü</div>
              <br />
              <div className="page-content">7″ Dokunmatik Ekran</div>
              <br />
              <div className="page-title">Yazıcı Boyutları</div>
              <br />
              <div className="page-content">32,5 cm x 32,5 cm x 56 cm</div>
              <br />
              <div className="page-title">Yazıcı Ağırlığı</div>
              <br />
              <div className="page-content">22 Kg</div>
              <br />
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
            <div style={{ marginBottom: "20px", marginTop: "20px" }}>
              <img src={Content} loading="lazy" />
            </div>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default DentafabSega3DPrinter;

export const DentafabSega3DPrinterTitle = () => {
  const pdfDownloader = () => {};
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <MKBox component="section">
        <MKTypography
          sx={{ mx: "auto", textAlign: "center", marginTop: 8 }}
          className="productTitle"
        >
          {" "}
          DentaFab Sega 3D Printer{" "}
        </MKTypography>
        <Container
          style={{
            backgroundColor: "#0C2540",
            padding: 10,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <Grid container item sx={{ justifyContent: "flex-start" }}>
            <Grid item xs={12} lg={12}>
              <br />
              <div className="page-content">
                1 Cihaz, 12 Kusursuz İşlem!
                <br />
                Sega 3D Yazıcı, olağanüstü hızda yazdırırken çok yüksek doğruluk sağlamak için Ultra
                Hızlı DLP teknolojimizi kullanır.
              </div>
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <Button onClick={() => pdfDownloader()} style={{ fontSize: "16px" }}>
              <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "36px", marginRight: "8px" }} />
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>Ürün Kataloğu</span>
            </Button>
          </div>
        </Container>
      </MKBox>
    </div>
  );
};
