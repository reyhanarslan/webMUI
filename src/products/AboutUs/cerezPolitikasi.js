import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import routes from "routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DashboardImg from "assets/images/dashboard/arena-dis-banner-2-2.jpg";
import MKTypography from "components/MKTypography";

export function CerezPolitikasi() {
  return (
    <div>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route:
            "https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum",
          label: "Whatsapp ıle Sipariş ",
          color: "default",
        }}
        transparent
        blue
      />

      <>
        <Grid fluid>
          <MKBox
            display="flex"
            alignItems="center"
            borderRadius="xl"
            my={2}
            py={15}
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
              <Grid container item xs={12} lg={12} sx={{ ml: { xs: 0, lg: 6 } }}>
                <MKTypography variant="h1" color="white">
                  {/* Çerez Politikası{" "} */}
                </MKTypography>
              </Grid>
            </Container>
          </MKBox>
        </Grid>
      </>

      <Grid fluid>
        <MKBox component="section" py={12}>
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                {/* <div>
                  <h5 className="dark-text-info">Çerez politikası hakkında</h5>
                </div>
                <div style={{ marginTop: 20 }}>
                  Bu Çerez Politikası, çerezlerin ne olduğunu ve nasıl kullandığımızı açıklar.
                  Çerezlerin ne olduğunu, nasıl kullandığımızı, kullandığımız çerez türlerini,
                  çerezleri kullanarak topladığımız bilgileri ve bu bilgilerin nasıl kullanıldığını
                  ve çerez tercihlerinin nasıl kontrol edileceğini anlamak için bu politikayı
                  okumalısınız. Kişisel verilerinizi nasıl kullandığımız, sakladığımız ve
                  sakladığımız hakkında daha fazla bilgi için Gizlilik Politikamıza bakın.Web
                  sitemizdeki Çerez Bildirimi’nden onayınızı istediğiniz zaman değiştirebilir veya
                  geri çekebilirsiniz.Kim olduğumuz, bizimle nasıl iletişime geçebileceğiniz ve
                  kişisel verilerinizi nasıl işleme koyduğumuz hakkında Gizlilik Politikamız
                  hakkında daha fazla bilgi edinin.Onayınız aşağıdaki alanlar için geçerlidir:
                  www.arenadis.com.tr
                </div>
                <div style={{ marginTop: 30 }}>
                  <h5 className="dark-text-info">Çerez nedir?</h5>
                </div>
                Çerezler, küçük bilgileri saklamak için kullanılan küçük metin dosyalarıdır. Web
                sitesi tarayıcınıza yüklendiğinde çerezler cihazınızda saklanır. Bu çerezler, web
                sitesinin düzgün çalışmasını sağlamamıza, web sitesini daha güvenli hale
                getirmemize, daha iyi kullanıcı deneyimi sunmamıza ve web sitesinin nasıl performans
                gösterdiğini anlamamıza ve neyin işe yaradığını ve nerede iyileştirilmesi
                gerektiğini analiz etmemize yardımcı olur. Önemli: Sitemizin tüm işlevlerini
                deneyimlemek için bazı çerezler gereklidir. Kullanıcı oturumlarını sürdürmemize ve
                güvenlik tehditlerini önlememize izin veriyorlar. Herhangi bir kişisel bilgi
                toplamaz veya saklamaz. Örneğin, bu çerezler hesabınıza giriş yapmanıza ve
                sepetinize ürün eklemenize ve güvenli bir şekilde ödeme yapmanıza olanak tanır.
                <div>
                  İstatistikler: Bu çerezler, web sitesini ziyaret edenlerin sayısı, benzersiz
                  ziyaretçilerin sayısı, web sitesinin hangi sayfalarının ziyaret edildiği,
                  ziyaretin kaynağı vb. Gibi bilgileri depolar. Bu veriler, web sitesinin ne kadar
                  iyi performans gösterdiğini anlamamıza ve analiz etmemize yardımcı olur.
                  iyileştirilmesi gereken bir yer.
                </div>
                <div>
                  Pazarlama: Web sitemizde reklamlar gösterilmektedir. Bu çerezler, size
                  gösterdiğimiz reklamları sizin için anlamlı olacak şekilde kişiselleştirmek için
                  kullanılır. Bu çerezler ayrıca bu reklam kampanyalarının verimliliğini takip
                  etmemize yardımcı olur.
                </div>
                <div>
                  Bu çerezlerde saklanan bilgiler, üçüncü taraf reklam sağlayıcıları tarafından size
                  tarayıcıdaki diğer web sitelerinde de reklam göstermek için de kullanılabilir.
                </div>
                <div>
                  İşlevsel: Bunlar, web sitemizde bazı temel olmayan işlevlere yardımcı olan
                  çerezlerdir. Bu işlevler, video gibi içerikleri gömmeyi veya web sitesinde sosyal
                  medya platformlarında içerik paylaşmayı içerir.
                </div>
                
                {/* <div style={{ marginTop: 30 }}>
                  <h5 className="dark-text-info ">Çerez tercihlerini nasıl kontrol edebilirim?</h5>
                </div>
                Tercihlerinizi daha sonra göz atma oturumunuz aracılığıyla değiştirmeye karar
                verirseniz, ekranınızdaki “Gizlilik ve Çerez Politikası” sekmesini
                tıklayabilirsiniz. Bu, tercihlerinizi değiştirmenizi veya onayınızı tamamen geri
                almanızı sağlayan rıza bildirimini tekrar görüntüler.Buna ek olarak, farklı
                tarayıcılar web siteleri tarafından kullanılan çerezleri engellemek ve silmek için
                farklı yöntemler sunar. Çerezleri engellemek / silmek için tarayıcınızın ayarlarını
                değiştirebilirsiniz. */}
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Grid>
    </div>
  );
}
