// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import DashboardImg from "assets/images/dashboard/arena-dis-banner-2-2.jpg";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import { Link } from "react-router-dom";
import data from "pages/Presentation/sections/data/pagesData";
// import logo from "assets/images/logos/arenadis-logo-web-1.png";
import DashboardImg1 from "assets/images/dashboard/perfect-healthy-teeth-smile-young-woman.jpg";

function BuiltByDevelopers() {
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} lg={4} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));
  // const bgImage =
  //   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <>
      <MKBox
        component="section"
        sx={{
          borderRadius: "30px",
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.light.main, 0.3),
              rgba(gradients.arena.state, 0.9)
            )}, url(${DashboardImg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          animation: "slideRight 10s linear infinite", // Animasyon eklemek
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 2, mx: "auto" }}
          >
            <MKTypography variant="h2" fontWeight="bold">
              Ürünlerimiz
            </MKTypography>
            <MKTypography variant="body1" color="text">
              Ürünlerimiz sektörün ihtiyaçlarına uygun çözümler sunuyor.
            </MKTypography>
          </Grid>
        </Container>

        <Container sx={{ mt: { xs: 4, lg: 8 } }}>
          <Grid container>
            <Grid
              item
              xs={12}
              lg={16}
              sx={{ px: { xs: 0, lg: 8 } }}
              style={{ marginLeft: "50px", marginRight: "50px", marginBottom: "15px" }}
            >
              <Grid container spacing={5}>
                {renderData}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      {/* <MKBox
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
      </MKBox> */}
    </>
  );
}

export default BuiltByDevelopers;
