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
