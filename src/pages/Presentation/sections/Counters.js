// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
// import icon from "assets/images/support.svg";
function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          {/* <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={70}
              suffix="+"
              title="Coded Elements"
              description="From buttons, to inputs, navbars, alerts or cards, you are covered"
            />
          </Grid> */}
          {/* <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={15}
              suffix="+"
              title="Design Blocks"
              description="Mix the sections, change the colors and unleash your creativity"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid> */}
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              // icon={<img src={"assets/images/support.svg"} alt="" width={40} height={40} />}
              count={4}
              title="Müşteri Hizmetleri"
              description="7/24 destek ekibimiz, ürün veya siparişlerle ilgili tüm sorularınız için size yardımcı olmaya hazırdır."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
