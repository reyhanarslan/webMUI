import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function SmartOpticsVinylHighResolution() {
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

              <li className="page-content">
                <br>exocad® DentalCAD ile Uyumlu</br>
              </li>

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

export default SmartOpticsVinylHighResolution;
