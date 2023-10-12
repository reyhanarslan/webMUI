// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";
import Icon from "@mui/material/Icon";
import DashboardImg from "assets/images/dashboard/arena-dis-banner-2-2.jpg";

// Data
import data from "pages/Presentation/sections/data/pagesData";

function Pages() {
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} lg={4} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));

  return (
    <>
      <MKBox sx={{ background: "#F8F9FF" }} component="section">
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 3, mx: "auto" }}
          >
            {/* <MKBadge
            variant="contained"
            color="info"
            badgeContent="boost creativity"
            container
            sx={{ mb: 2 }}
          /> */}
            <MKTypography variant="h2" fontWeight="bold">
              Ürünlerimiz
            </MKTypography>
            <MKTypography variant="body1" color="text">
              Ürünlerimiz sektörün ihtiyaçlarına uygun çözümler sunuyor.
            </MKTypography>
          </Grid>
        </Container>
        <Container sx={{ mt: { xs: 8, lg: 16 } }}>
          <Grid container>
            <Grid
              item
              xs={12}
              lg={16}
              sx={{ px: { xs: 0, lg: 8 } }}
              style={{ marginLeft: "50px", marginRight: "50px" }}
            >
              <Grid container spacing={5}>
                {renderData}
              </Grid>
            </Grid>
            {/* <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Presentation Pages for Company, Landing Pages, Blogs and Support
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                These is just a small selection of the multiple possibitilies you have. Focus on the
                business, not on the design.
              </MKTypography>
            </MKBox>
          </Grid> */}
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        borderRadius="xl"
        my={2}
        py={6}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.3),
              rgba(gradients.dark.state, 0.9)
            )}, url(${DashboardImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
            {/* <MKTypography variant="h4" color="white" fontWeight="bold">
            DAHA FAZLA ÜRÜN BİLGİSİ İÇİN <br />
          </MKTypography> */}
            {/* <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            From colors, cards, typography to complex elements, you will find the full
            documentation. Play with the utility classes and you will create unlimited combinations
            for our components.
          </MKTypography> */}
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
