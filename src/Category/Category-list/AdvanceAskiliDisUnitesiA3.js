import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";

function AdvanceAskiliDisUnitesiA3() {
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

export default AdvanceAskiliDisUnitesiA3;

export const AdvanceAskiliDisUnitesiA3Title = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <div className="page-title">
                <h5 className="dark-text">Ergonomik:</h5>
              </div>

              <div className="page-content">
                <li>Koltuğun 45 cm iniş mesafesi ile oturarak rahat çalışma alanı</li>
                <li>Doktorun rahatça çalışabileceği geniş enstrüman tablası</li>
                <li>Doktora çalışma kolaylığı sunan pnömatik fren sistemi</li>
                <li>Çift mafsallı pedo kullanıma uygun ergonomik tetiyer</li>
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
              href="/urunler/dis-uniteleri"
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
              Diş Üniteleri
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
              Advance Askılı Diş Ünitesi A3
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
