import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function AdvanceAskiliDisUnitesiA1() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Güvenli ve Pratik Çalışma</div>

              <li className="page-content">
                Doktorun hastaya yaklaşmasını kolaylaştıra “Yakın dikkat” tasarımlı sırtlık
              </li>
              <li className="page-content">
                Acil durumlar için otomatik durmayı sağlayan emniyet anahtarı
              </li>
              <li className="page-content">
                Koltuğa monte, pnömatik sistemli 90 derece dönebilen seramik kreşuar
              </li>
              <li className="page-content">
                Başlıkların hızını ve koltuğun hareketlerini kumanda eden tek bir ayak pedalı
              </li>
              <br />
              <div className="page-title">Özgür Hareket Kabiliyeti</div>
              <li className="page-content">
                Elektromekanik sistemli, LP ve 0 pozisyonlarını içeren 4 programlı trandelenburg
                pozisyonu alabilen ergonomik koltuk
              </li>
              <li className="page-content">
                Sırtlık ve ayaklığın hastayı rahatsız etmeyen senkronize hareketi
              </li>
              <li className="page-content">24 V DC motorları destekleyen amortisör sistemi</li>
              <br />
              <div className="page-title">Asistan Kontrol Paneli</div>
              <li className="page-content">
                Beş çıkışlı unit ve koltuk hareketlerinin kontrolünün yapılabildiği asistan kontrol
                paneli
              </li>
              <br />
              <div className="page-title">Geniş Doktor Tablası</div>
              <li className="page-content">
                Hekimin Rahat çalışabilmesi için tasarlanmış geniş enstrüman tablası
              </li>
              <br />
              <div className="page-title">Reflektör</div>
              <li className="page-content">
                Doğal gün ışığına yakın soğuk ışıklı iki kademeli aydınlatma sensörlü veya sensörsüz
                reflektör sistemi
              </li>
              <br />
              <div className="page-title">Greşuar</div>
              <li className="page-content">
                Koltuğa monte pnömatik sistemli 90 derece dönebilen seramik çanaklı greşuar.
                Zamanlanabilir ve otoklavlanabilir bardak doldurucu ve çanak yıkayıcı
              </li>
              <br />
              <div className="page-title">Ayak Padedalı</div>
              <li className="page-content">
                Başlıkların hızını ve koltuğun hareketlerini kumanda eden ayak pedalı
              </li>
              <br />
              <div className="page-title">Ergonomik Tetiyer</div>
              <li className="page-content">Çift mafsallı pedo kullanıma uygun ergonomik tetiyer</li>
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
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default AdvanceAskiliDisUnitesiA1;
