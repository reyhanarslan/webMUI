// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import React from "react"; // Import React if not already imported
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
// Images
import data from "pages/Presentation/sections/data/pagesData";
import Icon from "@mui/material/Icon";
// import team1 from "assets/images/team-5.jpg";
// import team2 from "assets/images/bruce-mars.jpg";
// import team3 from "assets/images/ivana-squares.jpg";
// import team4 from "assets/images/ivana-square.jpg";
// import { Link } from "react-router-dom";

const UrunlerCard = () => {
  const options = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "slow",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#4A90E2", "#6BB9F0", "#AFCBF4", "#D1E4F7"],
      },
      links: {
        color: "#D1E4F7",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 400,
        },
        value: 20,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  console.log(data);
  return (
    <div
      style={{
        // background: "linear-gradient(90deg, rgba(188, 188, 189, 0), #11304C 20.71%)",
        background: "#11304C ",
      }}
    >
      <Particles options={options} init={particlesInit} className="custom-particles" />

      <Container position="relative" py={6} px={{ xs: 2, lg: 0 }} mx={-2}>
        <Grid marginBottom={5} container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 2, mx: "auto" }}
          >
            <MKTypography
              style={{ marginBottom: "20px" }}
              color="white"
              variant="h2"
              fontWeight="bold"
            >
              Ürünlerimiz
            </MKTypography>
            <MKTypography color="white" variant="body1">
              Ürünlerimiz sektörün ihtiyaçlarına uygun çözümler sunuyor.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {data.map(({ image, name, route, description, index }) => (
            <Grid item key={name} xs={12} lg={6}>
              <MKBox>
                <HorizontalTeamCard
                  //   route={route}

                  index={index}
                  image={image}
                  name={name}
                  position={{ color: "info", label: "Detay", route }}
                  description={description}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>

        <Container>
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
      </Container>
    </div>
  );
};

export default UrunlerCard;
