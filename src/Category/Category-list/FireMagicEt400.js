import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function FireMagicEt400() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Aksesuarlar</div>
              <li className="page-content">Buhar çıkarıcı</li>
              <li className="page-content">Seramik tepsi seti</li>
              <br />
              <div className="page-title">Teknik Bilgiler</div>
              <div className="page-content">Güç kaynağı 230v±10%, 50hz</div>
              <div className="page-content">Güç tüketimi 2000 w</div>
              <div className="page-content">Maksimum ateşleme sıcaklığı 1100 ⁰c</div>
              <div className="page-content">Maksimum program süresı 100 saat</div>
              <div className="page-content">
                Bölgeler arasındaki artışın sıcaklık hızı 1 c/dk’dan 10 c/dk’ya
              </div>
              <div className="page-content">Ateşleme odası boyutları w/d/h 180/100/170 mm</div>
              <div className="page-content">Boyutlar (kontrol bloğu olmadan)</div>
              <div className="page-content">W/d/h 60x400x360 mm</div>
              <div className="page-content">Ağırlık 28кg</div>
              <br />
              <div className="page-title">FIREMAGIC ET400</div>
              <div className="page-content">
                Preheating oven for casting rings and wax evaporation
              </div>
              <li className="page-content">10 +1 User Programs</li>
              <li className="page-content">5 Temperature Zones</li>
              <li className="page-content">Automatic Parameter Control</li>
              <li className="page-content">Postponed Start Up To 90 H</li>
              <li className="page-content">Automatic Control Of Steam Extractor</li>
              <li className="page-content">Working With Shock İnvestment</li> <br />
              <div className="page-title">TECHNICAL DATA</div>
              <div className="page-content">Power supply 230v±10%, 50hz</div>
              <div className="page-content">Power consumptıon 2000 w</div>
              <div className="page-content">Maxımum fırıng temperature 1100 ⁰c</div>
              <div className="page-content">Maxımum program duratıon 100 h</div>
              <div className="page-content">
                Temperature speed of ıncrease between the zones from 1⁰ c/mın to 10⁰ c/mın
              </div>
              <div className="page-content">Fırıng chamber dımensıons w/d/h 180/100/170 mm</div>
              <br />
              <div className="page-content">Dımensıons (wıthout control block)</div>
              <div className="page-content">W/d/h 360x400x360 mm</div>
              <div className="page-content">Weıght 28кg</div>
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

export default FireMagicEt400;
