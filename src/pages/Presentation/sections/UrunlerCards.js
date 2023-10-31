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

// export const ParticleTest = () => {
//   const options = {
//     fullScreen: {
//       enable: true,
//     },
//     fpsLimit: 120,
//     interactivity: {
//       events: {
//         onClick: {
//           enable: true,
//           mode: "push",
//         },
//         onHover: {
//           enable: true,
//           mode: "slow",
//         },
//         resize: true,
//       },
//       modes: {
//         push: {
//           quantity: 1,
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4,
//         },
//       },
//     },
//     particles: {
//       color: {
//         value: ["#4A90E2", "#6BB9F0", "#AFCBF4", "#D1E4F7"],
//       },
//       links: {
//         color: "#D1E4F7",
//         distance: 150,
//         enable: true,
//         opacity: 0.5,
//         width: 1,
//       },
//       move: {
//         direction: "none",
//         enable: true,
//         outModes: {
//           default: "bounce",
//         },
//         random: false,
//         speed: 2,
//         straight: false,
//       },
//       number: {
//         density: {
//           enable: true,
//           area: 800,
//         },
//         value: 20,
//       },
//       opacity: {
//         value: 0.8,
//       },
//       shape: {
//         type: "circle",
//       },
//       size: {
//         value: { min: 1, max: 3 },
//       },
//     },
//     detectRetina: false,
//     // fullScreen: { enable: false },
//   };
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       options={options}
//       init={particlesInit}
//       style={{ position: "absolute", zIndex: -1 }}
//     />
//   );
// };
const UrunlerCard = () => {
  console.log(data);
  const options = {
    fullScreen: {
      enable: true,
    },
    fpsLimit: 30,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: false,
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
          duration: 1,
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
          area: 120,
        },
        value: 10,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 3 },
      },
    },
    detectRetina: false,
  };
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <Container position="relative" py={6} px={{ xs: 2, lg: 3 }} mx={-2}>
        <Particles options={options} init={particlesInit} />
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid
            item
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 10, mx: "auto" }}
          >
            {" "}
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
