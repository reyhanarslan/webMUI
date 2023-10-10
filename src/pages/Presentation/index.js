import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
// import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import logo from "assets/images/logos/arenadis-logo-web-1.png";
import { CardMedia } from "@mui/material";
// Routes
import routes from "routes";
// import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";
// import bgImage from "assets/images/dashboard/dashboard-img.jpg";
import bgImage from "assets/images/dashboard/perfect-healthy-teeth-smile-young-woman.jpg";
import CarouselImages from "./sections/Carousel";
import intro from "assets/videos/UP3D.mp4";
import ReactPlayer from "react-player";

import("./video.css");

function Presentation() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, rgba(188, 188, 189, 0), rgba(7, 7, 67, 0.8) 25.71%)",
      }}
    >
      <MKBox>
        <Grid container>
          <Grid className="d-flex" item xs={12} md={6} lg={3} sx={{ ml: "auto", mb: 3 }}>
            <CardMedia style={{ width: "302px", height: "77px" }} image={logo} alt="Logo" />
          </Grid>
          <Grid
            className="d-flex justify-content-center align-items-center"
            item
            xs={12}
            md={6}
            lg={9}
            sx={{ ml: "auto", mb: 3 }}
          >
            <DefaultNavbar
              routes={routes}
              action={{
                type: "external",
                route:
                  "https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum",
                label: "Whatsapp ıle Sipariş ",
                color: "success",
              }}
              sticky
            />
          </Grid>
        </Grid>
      </MKBox>
      <Card>
        <MKBox
          minHeight="90vh"
          width="100%"
          sx={{
            backgroundImage: `url(${bgImage})`, //video gelecek
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "grid",
            placeItems: "center",
          }}
        >
          {/* <CardMedia
          width={300}
          height={300}
          component="video"
          src="video"
          // className={classes.media}
          image={intro}
          autoPlay
        /> */}
          <div className="d-flex justify-content-center align-items-center video-card">
            <ReactPlayer
              style={{ opacity: "0.90" }}
              width={"100%"}
              height="100%"
              url={intro}
              playing={true}
              muted={true}
              controls={true}
            />
          </div>
        </MKBox>
      </Card>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 2, //-8,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Counters /> */}
        <Information />
        {/* <DesignBlocks /> */}
        <CarouselImages />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        {/* <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container> */}

        <Testimonials />

        {/* <Download /> */}
        {/* <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox> */}
      </Card>
      {/* <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox> */}
    </div>
  );
}

export default Presentation;
