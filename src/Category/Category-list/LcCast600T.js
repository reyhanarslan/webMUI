import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { Link } from "react-router-dom";

function LcCast600T() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Aksesuarlar</div>

              <li className="page-content">Pota tepsi</li>
              <li className="page-content">Halka tutucu</li>
              <li className="page-content">Pota</li>
              <li className="page-content">Silikon halka no2</li>
              <li className="page-content">Silikon halka no3</li>
              <li className="page-content">Silikon halka no4</li>
              <li className="page-content">Grafit kesici uç</li>
              <br />
              <div className="page-title">Teknik Bilgiler</div>
              <div className="page-content">Güç kaynağı: 110/230v~, ±10%, 50/60hz</div>
              <div className="page-content">Güç tüketimi: 2500 w</div>
              <div className="page-content">Potadaki minimum alaşım miktarı: 7 g</div>
              <div className="page-content">Potadaki maksimum alaşım miktarı: 80 g</div>
              <div className="page-content">
                Dış alaşımlı seramik pota için pota tipi: seramik potası
              </div>
              <div className="page-content">
                Değerli alaşımlar seramik için pota tipi: grafit uçlu pota
              </div>
              <div className="page-content">
                30 g dış alaşımının tamamen erimesi için maksimum süre: 60 sn
              </div>
              <div className="page-content">Soğutma otonom: damıtılmış su soğutma</div>
              <div className="page-content">Otomatik eritme için hf güç ayarı: otomatik</div>
              <div className="page-content">Motor ivmesi ayar kılavuzu: el ile</div>
              <div className="page-content">Otomatik döküm: otomatik</div>
              <div className="page-content">W/d/h boyutları: 564x620x540 mm</div>
              <div className="page-content">Ağırlık: 75 kg</div>
              <br />
              <div className="page-title">Youtube Videosu:</div>
              <div className="page-content">LC Cast 600T Filling of the wather tank</div>
              <Link to="https://www.youtube.com/watch?v=dEMArq04MaY&feature=youtu.be&ab_channel=VOPBulgaria">
                How to cast with LC Cast 600T
              </Link>

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

export default LcCast600T;
