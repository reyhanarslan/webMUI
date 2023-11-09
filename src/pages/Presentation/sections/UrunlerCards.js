import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import React from "react";
import data from "pages/Presentation/sections/data/pagesData";
import Icon from "@mui/material/Icon";

const UrunlerCard = () => {
  console.log(data);

  return (
    <div>
      <Container position="relative" py={6} px={{ xs: 2, lg: 3 }} mx={-2}>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid
            item
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 7, mx: "auto" }}
          >
            {" "}
            <MKTypography color="white" variant="h2" fontWeight="bold">
              Kategoriler
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {data.map(({ image, name, route, description, index }) => (
            <Grid item key={name} xs={12} lg={6}>
              <MKBox>
                <HorizontalTeamCard
                  index={index}
                  image={image}
                  name={name}
                  position={{ color: "info", label: "Detay", route }}
                  description={description}
                />{" "}
              </MKBox>
            </Grid>
          ))}
        </Grid>{" "}
        <Grid
          container
          item
          xs={12}
          lg={12}
          sx={{ my: 6, ml: { xs: 0, lg: 12 }, justifyContent: "flex-end" }}
        >
          <MKTypography
            component="a"
            href="/urunler/cad-cam-sistemleri/kaziyicilar"
            target="_blank"
            rel="noreferrer"
            variant="h5"
            color="white"
            fontWeight="regular"
            sx={{
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
            Daha Fazla Ürün Bilgisi İçin Lütfen Tıklayınız{" "}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </div>
  );
};

export default UrunlerCard;
