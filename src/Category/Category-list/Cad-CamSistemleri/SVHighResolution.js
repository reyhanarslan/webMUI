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
export function SVHighResolution() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">İşlev</div>
              <div className="page-content">
                Zamandan tasarrufa ek olarak, smart optics kullanıcı konforuna da önem göstermiştir.
                180 derece açılabilir Vinyl oldukça geniş bir çalışma alanı, kusursuz ve hızlı bir
                motor hareketi sağlar. Tarayıcının büyük sistem tablası sayesinde Amann Girrbach
                Artex®, Baumann® Artist/arTO®, GAMMA® Reference, SAM® Axiosplit, WhipMix Denar® and
                KaVo Protar® gibi artikülatörlerle uyumludur. Artikülatörler tarama tablasının
                üstüne direkt oturtulabilir, ek bir parça gerektirmez. Yüksek kaliteli ve uyumlu
                dizaynı ile Vinyl sizlerle!
              </div>
              <div className="page-title">Ölçüler ( E x Y x B ) mm</div>
              <div className="page-content">455 x 430 x 420</div>
              <div className="page-title">Tarama Alanı (X x Y x Z) mm</div>
              <div className="page-content">80 x 60 x 85</div>
              <div className="page-title">Tarama Hassasiyeti (according to ISO 12836) mm</div>
              <div className="page-content">6 µm</div>

              <div className="page-title">Tüm Çene Tarama Süresi</div>
              <div className="page-content">6 µm</div>

              <div className="page-title">Die’lı Tek Diş Tarama Süresi</div>
              <div className="page-content">6 µm</div>

              <div className="page-title">Üçlü Köprü Tarama Süresi</div>
              <div className="page-content">6 µm</div>
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

export function SVHighResolutionTitle() {
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
              <div className="page-content">
                Vinyl özellikle günlük laboratuvar işlerinde maksimum üretimi sağlamak için dizayn
                edildi. Artık siyah beyaz mı yoksa renkli tarama mı yapmak istediğiniz tamamen sizin
                inisiyatifinizde. Çalışma stilinize en uygun tarama modunu siz seçin. Kapak açık mı
                yoksa kapalı mı tarama yapmak istediğinize kendiniz karar verin. Tam otomatik z aksı
                ile zamandan büyük ölçüde tasarruf edin. Bazı kullanıcıların önceki smart optics
                modellerinden de hatırlayabileceği üzere spacer tablaları vidalama gerekliliği artık
                ortadan kalktı. Artık buna harcadığınız zamanı çok daha faydalı şeylere
                harcayabilirsiniz. Dokunmatik ekran sayesinde tarama yapmak çok daha kolay.
              </div>
            </Grid>
          </Grid>
          <Button onClick={() => test()} style={{ fontSize: "16px" }}>
            <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "36px", marginRight: "8px" }} />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>Ürün Kataloğu</span>
          </Button>
        </Container>
      </MKBox>
    </div>
  );
}
