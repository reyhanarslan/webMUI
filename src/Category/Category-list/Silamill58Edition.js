import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import Content_1 from "assets/images/content-imgs/silamill_5_8/6.jpg";
import Content_2 from "assets/images/content-imgs/silamill_5_8/11.jpg";
import Content_3 from "assets/images/content-imgs/silamill_5_8/12.jpg";
import Content_4 from "assets/images/content-imgs/silamill_5_8/13.jpg";
import Content_5 from "assets/images/content-imgs/silamill_5_8/5.jpg";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Katalog from "assets/docs/Silamill58Edition/S58edition.pdf";

import { Button, Icon } from "@mui/material";
import MKTypography from "components/MKTypography";

const itemData = [
  {
    img: Content_1,
    title: "Bed",
    author: "",
  },
  {
    img: Content_2,
    title: "Books",
    author: "",
  },
  {
    img: Content_5,
    title: "Sink",
    author: "",
  },
  {
    img: Content_4,
    title: "Kitchen",
    author: "",
  },
  {
    img: Content_3,
    title: "Blinds",
    author: "",
  },
];

function Silamill58Edition() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title"></div>

              <div className="page-content"></div>

              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}></Grid>

            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar position="below" title={item.author} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default Silamill58Edition;

export const Silamill58EditionTitle = () => {
  const pdfDownloader = () => {
    window.open(Katalog, "_blank");
  };
  return (
    <div>
      <MKBox component="section">
        <Container>
          <Grid container spacing={3} alignItems="center" marginBottom={2}>
            <Grid item xs={12} lg={12}>
              <div className="page-content">
                <br />
                <li>Beş eksenli eş zamanlı freze makinesi</li>
                <li>± 30 derece dönüş açısı</li>
                <li>16 takım için otomatik takım değiştirici</li>
                <li>
                  Direct-Mill fonksiyonlu sağlanan CAM yazılımı DentalCAM aracılığıyla çok kolay
                  kullanım
                </li>
                <li>Frezeleme konusunda önceden bilgi gerekmez</li>
                <li>Kısmi protez çerçeveleri için özel Cam modülü</li>
                <li>CoCr boşluklarının frezelenmesi için de kullanılabilir</li>
                <li>8 blok için otomatik boşluk değiştiricili</li>
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
              href="/urunler/cad-cam-sistemleri/kaziyicilar"
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
              Kazıyıcılar
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
              SILAMILL 5.8 EDITION
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
};
