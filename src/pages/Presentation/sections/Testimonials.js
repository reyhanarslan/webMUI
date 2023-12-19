// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Companies_1 from "assets/companies/Arena-markalar-1.jpg";
import Companies_2 from "assets/companies/Arena-markalar-2.jpg";
import Companies_3 from "assets/companies/Arena-markalar-3.jpg";
import Companies_4 from "assets/companies/Arena-markalar-4.jpg";
import Companies_5 from "assets/companies/Arena-markalar-5.jpg";
import Companies_6 from "assets/companies/Arena-markalar-6.jpg";
import Companies_7 from "assets/companies/Arena-markalar-7.jpg";
import Companies_8 from "assets/companies/Arena-markalar-8.jpg";
import Companies_9 from "assets/companies/Arena-markalar-9.jpg";
import Companies_10 from "assets/companies/Arena-markalar-10.png";
import Companies_11 from "assets/companies/Arena-markalar-11.png";

// import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images

function Information() {
  return (
    <MKBox
      component="section"
      py={12}
      sx={{
        background: "#F8F9FF",
        borderRadius: "0px 0px 30px 30px",
      }}
    >
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h3">Birlikte çalıştığımız</MKTypography>
          <MKTypography variant="h3" color="info" textGradient mb={2}>
            100+ çalıştığımız firma ile
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Firmamız, uzun yıllardır sektörde güvenilirliği ve kalitesi ile öne çıkmaktadır.
            Müşterilerimizin büyük bir çoğunluğu, geniş ürün yelpazemiz, rekabetçi fiyatlarımız ve
            müşteri memnuniyetine verdiğimiz önem nedeniyle bizi tercih etmektedir. Sizin için de en
            iyi ürünleri ve hizmeti sunmak için buradayız.
          </MKTypography>
        </Grid>
        {/* <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid>
        </Grid> */}
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid
            container
            item
            xs={12}
            lg={12}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography variant="h2">Çalıştığımız Markalar</MKTypography>
          </Grid>
          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox component="img" src={Companies_1} alt="Apple" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox component="img" src={Companies_2} alt="Facebook" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox component="img" src={Companies_3} alt="Nasa" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox component="img" src={Companies_4} alt="Vodafone" width="100%" />
          </Grid>

          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox
              component="img"
              src={Companies_5}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox component="img" src={Companies_11} alt="Apple" width="100%" />
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox component="img" src={Companies_6} alt="Apple" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox component="img" src={Companies_7} alt="Apple" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox component="img" src={Companies_8} alt="Apple" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox component="img" src={Companies_9} alt="Apple" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2} className="card-hover">
            <MKBox component="img" src={Companies_10} alt="Apple" width="100%" />
          </Grid>
        </Grid>{" "}
      </Container>
    </MKBox>
  );
}

export default Information;
