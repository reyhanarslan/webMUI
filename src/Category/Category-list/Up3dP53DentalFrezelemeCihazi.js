import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import Content_1 from "assets/images/content-imgs/up3dp53/P53-1.jpg";
import Content_2 from "assets/images/content-imgs/up3dp53/P53-2.jpg";
import Content_3 from "assets/images/content-imgs/up3dp53/P53-3.jpg";
import Content_4 from "assets/images/content-imgs/up3dp53/P53-4.jpg";
import Content_5 from "assets/images/content-imgs/up3dp53/P53-5.jpg";
import Content_6 from "assets/images/content-imgs/up3dp53/P53-6.jpg";
import Content_7 from "assets/images/content-imgs/up3dp53/P53-7.jpg";
import Content_8 from "assets/images/content-imgs/up3dp53/P53-8.jpg";

const img = [
  Content_1,
  Content_2,
  Content_3,
  Content_4,
  Content_5,
  Content_6,
  Content_7,
  Content_8,
];

function Up3dP53DentalFrezelemeCihazi() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              {img.map((section, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <img src={section} loading="lazy" />
                </div>
              ))}

              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
              {/* <CenteredBlogCard
                image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                title="Get insights on Search"
                description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
                action={{
                  type: "internal",
                  route: "pages/company/about-us",
                  color: "info",
                  label: "find out more",
                }}
              />{" "} */}
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default Up3dP53DentalFrezelemeCihazi;
