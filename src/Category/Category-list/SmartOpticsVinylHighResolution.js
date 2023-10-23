import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import content_img_1 from "assets/images/content-imgs/smartoptics_vhr-content/1.jpg";
import { Icon, ImageListItem } from "@mui/material";
import Products from "products/ProductDatas/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Katalog from "assets/docs/SmartOpticsVHR/Vinyl.pdf";

import { Button } from "@mui/material";
import MKTypography from "components/MKTypography";
function SmartOpticsVinylHighResolution() {
  console.log(Products[1].product[11]);
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-content">
                Zamandan tasarrufa ek olarak, smart optics kullanıcı konforuna da önem göstermiştir.
                180 derece açılabilir Vinyl oldukça geniş bir çalışma alanı, kusursuz ve hızlı bir
                motor hareketi sağlar.
              </div>
              <br />
              <div className="page-content">
                Tarayıcının büyük sistem tablası sayesinde Amann Girrbach Artex®, Baumann®
                Artist/arTO®, GAMMA® Reference, SAM® Axiosplit, WhipMix Denar® and KaVo Protar® gibi
                artikülatörlerle uyumludur. Artikülatörler tarama tablasının üstüne direkt
                oturtulabilir, ek bir parça gerektirmez.
              </div>
              <br />
              <div className="page-content">
                Yüksek kaliteli ve uyumlu dizaynı ile Vinyl sizlerle!
              </div>
              <br />

              <div className="page-title">Ölçüler ( E x Y x B ) mm</div>
              <div className="page-content">455 x 430 x 420</div>
              <br />
              <div className="page-title">Tarama Alanı (X x Y x Z) mm</div>
              <div className="page-content">80 x 60 x 85</div>
              <br />
              <div className="page-title">Tarama Hassasiyeti (according to ISO 12836)</div>
              <div className="page-content">6 µm</div>
              <br />
              <div className="page-title">Tüm Çene Tarama Süresi</div>
              <div className="page-content">Tarama: 16 sec</div>
              <div className="page-content">Eşleştirme: 13 sec</div>
              <div className="page-content">Toplam: 29 sec</div>
              <br />
              <div className="page-title">Die’lı Tek Diş Tarama Süresi</div>
              <div className="page-content">Tarama: 25 sec</div>
              <div className="page-content">Eşleştirme: 9 sec</div>
              <div className="page-content">Toplam: 34 sec</div>
              <br />
              <div className="page-title">Üçlü Köprü Tarama Süresi</div>
              <div className="page-content">Tarama: 33 sec</div>
              <div className="page-content">Eşleştirme: 22 sec</div>
              <div className="page-content">Toplam: 55 sec</div>
              <br />
              <div className="page-title">Ağırlık</div>
              <div className="page-content">23 kg</div>

              <li className="page-content">Articulator tarama</li>
              <li className="page-content">Fixator tarama</li>
              <li className="page-content">MultiCase</li>
              <li className="page-content">SecondDie</li>
              <li className="page-content">MultiDie</li>
              <li className="page-content">Texture scan (siyah beyaz)</li>
              <li className="page-content">Texture scan (renkli)</li>
              <li className="page-content">Triple Tray® ölçü tarama</li>
              <li className="page-content">Tam Otomatik z aks</li>
              <li className="page-content">Dokunmatik Ekran</li>
              <li className="page-content">Güç Destek Voltajı</li>
              <div className="page-content">100 – 240 VAC, 50/60 Hz</div>
              <br />

              <div className="page-title">Arayüzler</div>
              <div className="page-content">1x USB</div>
              <br />
              <div className="page-title">Ürün Rengi</div>
              <div className="page-content">siyah / beyaz</div>
              <br />

              <li className="page-content">exocad® DentalCAD ile Uyumlu</li>

              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}></Grid>
          </Grid>
          <ImageListItem style={{ marginTop: "50px" }}>
            <img src={content_img_1} alt={"SMARTOPTICS VINYL HIGH RESOLUTION"} loading="lazy" />
          </ImageListItem>
        </Container>
      </MKBox>
    </div>
  );
}

export default SmartOpticsVinylHighResolution;

export const SmartOpticsVinylHighResolutionTitle = () => {
  const pdfDownloader = () => {
    window.open(Katalog, "_blank");
  };
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <br />
              <div className="page-content">
                Vinyl özellikle günlük laboratuvar işlerinde maksimum üretimi sağlamak için dizayn
                edildi. Artık siyah beyaz mı yoksa renkli tarama mı yapmak istediğiniz tamamen sizin
                inisiyatifinizde. Çalışma stilinize en uygun tarama modunu siz seçin. Kapak açık mı
                yoksa kapalı mı tarama yapmak istediğinize kendiniz karar verin.
                <br />
                Tam otomatik z aksı ile zamandan büyük ölçüde tasarruf edin. Bazı kullanıcıların
                önceki smart optics modellerinden de hatırlayabileceği üzere spacer tablaları
                vidalama gerekliliği artık ortadan kalktı. Artık buna harcadığınız zamanı çok daha
                faydalı şeylere harcayabilirsiniz. Dokunmatik ekran sayesinde tarama yapmak çok daha
                kolay.
              </div>
            </Grid>
          </Grid>
          <Button onClick={() => pdfDownloader()} style={{ fontSize: "16px" }}>
            <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "36px", marginRight: "8px" }} />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>Ürün Kataloğu</span>
          </Button>
        </Container>
        <Container style={{ backgroundColor: "#358EED", borderRadius: "20px" }}>
          <Grid container item mt={3} sx={{ justifyContent: "flex-start" }}>
            <MKTypography
              component="a"
              href="/urunler/cad-cam-sistemleri"
              target="_blank"
              rel="noreferrer"
              variant="h6"
              color="white"
              fontWeight="regular"
              sx={{
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: `translateX(3px)`,
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },
                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: `translateX(6px)`,
                },
              }}
            >
              CAD/CAM Sistemleri
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
            <MKTypography
              component="a"
              href="/urunler/cad-cam-sistemleri/model-tarayicilar"
              target="_blank"
              rel="noreferrer"
              variant="h6"
              color="white"
              fontWeight="regular"
              sx={{
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: `translateX(3px)`,
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },
                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: `translateX(6px)`,
                },
              }}
            >
              Model Tarayıcılar
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
            <MKTypography
              component="a"
              target="_blank"
              rel="noreferrer"
              variant="h6"
              color="white"
              fontWeight="regular"
              sx={{
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: `translateX(3px)`,
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },
              }}
            >
              SmartOptics Vinyl High Resolution
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
