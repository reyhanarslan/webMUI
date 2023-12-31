// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={<>Kurumsal</>}
                description="Kurumsal kimliğimiz, kaliteli ürünler ve müşteri odaklı yaklaşımımızla, sektörde öncü bir konumda bulunuyoruz. Amacımız, en iyi hizmeti sunarak müşterilerimizin güvenini kazanmaktır."
              />
              <RotatingCardBack
                image={bgBack}
                title="Kurumsal"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Detaylar",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={<>Ürünlerimiz</>}
                description=" Diş sağlığı alanındaki yenilikleri yakından takip ediyor, deneyimli ekibimizle birlikte özenle tasarlanmış ürünler sunarak diş hekimleri ve sağlık profesyonellerinin ihtiyaçlarını tam anlamıyla karşılıyoruz."
              />
              <RotatingCardBack
                image={bgBack}
                title="Ürünlerimiz"
                description="Sektördeki gelişmeleri önceden görmek ve beklentileri aşmak amacıyla sürekli olarak kendimizi geliştiriyor, müşterilerimize en güvenilir, etkili ve kaliteli çözümleri sunma vizyonumuzu sürdürüyoruz"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Detaylar",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={<>İletişim</>}
                description="Kurumsal çözümlerimiz ve ürünlerimizle sektördeki etkimizi güçlendirmeye devam ederken, müşteri memnuniyetini artırmak için buradayız. İhtiyaçlarınızı ve sorularınızı iletişim kanallarımız ile bizimle paylaşabilirsiniz."
              />
              <RotatingCardBack
                image={bgBack}
                title="İletişim"
                description="Size en iyi şekilde yardımcı olabilmek için iletişim seçeneklerimizi kullanabilirsiniz."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "detaylar",
                }}
              />
            </RotatingCard>
          </Grid>
          {/* <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Full Documentation"
                  description="Built by developers for developers. Check the foundation and you will find
                    everything inside our documentation."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="MUI Ready"
                  description="The world's most popular react components library for building user interfaces."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Save Time & Money"
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
            </Grid> 
          </Grid>*/}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
