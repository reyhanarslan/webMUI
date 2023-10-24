import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";
function SlitpreciseSP100() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Teknik Bilgiler</div>

              <div className="page-content">Güç kaynağı: 110/230v ±10%,50/60hz</div>
              <div className="page-content">Güç tüketımı: 200w</div>
              <div className="page-content">Maksımum devır sayısı: 10000 rpm</div>
              <div className="page-content">Kesımın maksımum derınlığı: 26,5 mm</div>
              <div className="page-content">Kesımın genışlığı: 0,3 mm</div>
              <div className="page-content">Elmas kesme dıskı: ф85хф16х0,3</div>
              <div className="page-content">Lazer: sınıf 2</div>

              <div className="page-title">Boyutlar</div>

              <div className="page-content">W/d/h: 290x320x170 mm</div>
              <div className="page-content">Ağırlık: 10кg</div>

              {/* ... */}
            </Grid>
            <Grid lg={4} container>
              <Grid lg={12} mb={5}>
                <div>
                  <iframe
                    style={{ borderRadius: "20px" }}
                    width="450"
                    height="250"
                    src="https://www.youtube.com/embed/xlg8x02HHNI"
                    title="LC Cast 600T Filling of the wather tank"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <Link to="https://www.youtube.com/watch?v=pLXvoYGskPo&ab_channel=VOPBulgaria">
                    SP 100 Cutting
                  </Link>
                </div>
              </Grid>
              <Grid lg={12} mb={5}>
                {" "}
                <div>
                  <iframe
                    style={{ borderRadius: "20px" }}
                    width="450"
                    height="250"
                    src="https://www.youtube.com/embed/h87OXy3Mrjs"
                    title="VID 20171027 132705"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <Link to="https://www.youtube.com/watch?v=h87OXy3Mrjs&ab_channel=VOPBulgaria">
                    SP 100 Cutting 1
                  </Link>
                </div>
              </Grid>
              <Grid lg={12}>
                <iframe
                  style={{ borderRadius: "20px" }}
                  width="450"
                  height="250"
                  src="https://www.youtube.com/embed/m8FR-tX1JMc"
                  title="VID 20171027 132843"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <Link to="https://www.youtube.com/watch?v=m8FR-tX1JMc&ab_channel=VOPBulgaria">
                  SP 100 Cutting 2
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default SlitpreciseSP100;

export const SlitpreciseSP100Title = () => {
  const pdfDownloader = () => {};
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <h5>Pim Delme Ünitesi </h5> <br />
              <div className="page-content">
                <li>Matkap devrimi yönetmeliği</li>
                <li>Otomatik açma sistemi</li>
                <li>Kompakt ve ergonomik</li>
                <li>Toz azaltma sistemi</li>
              </div>
              <h5>Aksesuarlar:</h5>
              <div className="page-content">
                <li>Pin sistemi</li>
                <li>Matkap</li>
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
              href="/urunler/laboratuvar-ekipmanlari"
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
              Laboratuvar Ekipmanları
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
              Slitprecise SP100
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
