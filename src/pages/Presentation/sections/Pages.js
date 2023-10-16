// react-router-dom components

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import Icon from "@mui/material/Icon";
import DashboardImg from "assets/images/dashboard/arena-dis-banner-2-2.jpg";

function Pages() {
  return (
    <>
      <MKBox
        display="flex"
        alignItems="center"
        borderRadius="xl"
        my={2}
        py={6}
        sx={{
          borderRadius: "30px",

          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.light.main, 0.3),
              rgba(gradients.arena.state, 0.9)
            )}, url(${DashboardImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={6} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
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
      </MKBox>
    </>
  );
}

export default Pages;
