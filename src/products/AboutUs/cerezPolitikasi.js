import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import routes from "routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DashboardImg from "assets/images/products/kurumsal.jpg";
import MKTypography from "components/MKTypography";
import logo from "assets/images/logos/arenadis-logo-white.png";
import { useNavigate } from "react-router-dom";
import { useLogoWidth } from "utils";

export function CerezPolitikasi() {
  const navigate = useNavigate();
  const logoWidth = useLogoWidth();

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
        light
      />

      <MKBox
        sx={{
          position: "absolute",
          top: "10px",
          left: "20px",
          zIndex: 1,
          size: "cover",
          maxWidth: logoWidth,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            zIndex: 1,
          }}
        >
          <img
            onClick={() => navigate("/home")}
            src={logo}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </MKBox>
      <Grid py={0}>
        <>
          <MKBox
            // minHeight="75vh"
            minHeight="60vh"
            width="100%"
            sx={{
              backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.3),
                  rgba(gradients.dark.state, 0)
                )}, url(${DashboardImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Container>
              <Grid
                container
                item
                xs={12}
                lg={12}
                sx={{
                  ml: { xs: 0, lg: 0 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MKTypography variant="h1" color="white">
                  Çerez Politikası{" "}
                </MKTypography>
              </Grid>
            </Container>
          </MKBox>
          <Grid container>
            <Grid item xs={12} lg={12}></Grid>
          </Grid>
        </>

        <MKBox
          style={{ borderRadius: 15, marginTop: -20 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {" "}
          <div className="kurumsal slide-in-container ">
            <Grid container alignItems="center">
              <Grid px={12} className="kurumsal-grid" item xs={12} sm={12} md={12} lg={12}>
                <div>
                  <h5 className="dark-text-info">Çerez Politikası Hakkında</h5>
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
                  hakkında daha fazla bilgi edinin.Onayınız aşağıdaki alanlar için geçerlidir :
                  <strong style={{ fontWeight: "bold" }}> www.arenadis.com.tr</strong>{" "}
                </div>
                <div style={{ marginTop: 30 }}>
                  <h5 className="dark-text-info">Çerez Nedir?</h5>
                </div>
                <div style={{ marginTop: 20 }}>
                  Çerezler, küçük bilgileri saklamak için kullanılan küçük metin dosyalarıdır. Web
                  sitesi tarayıcınıza yüklendiğinde çerezler cihazınızda saklanır. Bu çerezler, web
                  sitesinin düzgün çalışmasını sağlamamıza, web sitesini daha güvenli hale
                  getirmemize, daha iyi kullanıcı deneyimi sunmamıza ve web sitesinin nasıl
                  performans gösterdiğini anlamamıza ve neyin işe yaradığını ve nerede
                  iyileştirilmesi gerektiğini analiz etmemize yardımcı olur.
                </div>
                <div style={{ marginTop: 5 }}>
                  Önemli: Sitemizin tüm işlevlerini deneyimlemek için bazı çerezler gereklidir.
                  Kullanıcı oturumlarını sürdürmemize ve güvenlik tehditlerini önlememize izin
                  veriyorlar. Herhangi bir kişisel bilgi toplamaz veya saklamaz. Örneğin, bu
                  çerezler hesabınıza giriş yapmanıza ve sepetinize ürün eklemenize ve güvenli bir
                  şekilde ödeme yapmanıza olanak tanır.
                </div>
                <div style={{ marginTop: 5 }}>
                  İstatistikler: Bu çerezler, web sitesini ziyaret edenlerin sayısı, benzersiz
                  ziyaretçilerin sayısı, web sitesinin hangi sayfalarının ziyaret edildiği,
                  ziyaretin kaynağı vb. Gibi bilgileri depolar. Bu veriler, web sitesinin ne kadar
                  iyi performans gösterdiğini anlamamıza ve analiz etmemize yardımcı olur.
                </div>
                <div style={{ marginTop: 5 }}>
                  Pazarlama: Web sitemizde reklamlar gösterilmektedir. Bu çerezler, size
                  gösterdiğimiz reklamları sizin için anlamlı olacak şekilde kişiselleştirmek için
                  kullanılır. Bu çerezler ayrıca bu reklam kampanyalarının verimliliğini takip
                  etmemize yardımcı olur.
                </div>
                <div style={{ marginTop: 5 }}>
                  Bu çerezlerde saklanan bilgiler, üçüncü taraf reklam sağlayıcıları tarafından size
                  tarayıcıdaki diğer web sitelerinde de reklam göstermek için de kullanılabilir.
                </div>
                <div style={{ marginTop: 5 }}>
                  İşlevsel: Bunlar, web sitemizde bazı temel olmayan işlevlere yardımcı olan
                  çerezlerdir. Bu işlevler, video gibi içerikleri gömmeyi veya web sitesinde sosyal
                  medya platformlarında içerik paylaşmayı içerir.
                </div>
                <div style={{ marginTop: 30 }}>
                  <h5 className="dark-text-info ">Çerezleri Nasıl Kullanıyoruz?</h5>
                </div>
                <div style={{ marginTop: 20 }}>
                  <p>
                    Çevrimiçi hizmetlerin çoğu olarak, web sitemiz çerezleri birinci taraf ve üçüncü
                    taraf çerezlerini çeşitli amaçlarla kullanır.
                  </p>
                  <p>
                    Birinci taraf çerezleri, web sitesinin doğru şekilde çalışması için çoğunlukla
                    gereklidir ve kişisel olarak tanımlanabilir verilerinizi toplamaz.
                  </p>
                  <p>
                    Web sitelerimizde kullanılan üçüncü taraf çerezleri, temel olarak web sitesinin
                    nasıl performans gösterdiğini, web sitemizle nasıl etkileşime girdiğinizi,
                    hizmetlerimizi güvende tuttuğunuz, sizinle alakalı reklamlar sunduğunuz ve sonuç
                    olarak size daha iyi ve iyileştirilmiş bir içerik sağlamak için kullanılır.
                    Kullanıcı deneyimi ve web sitemizle gelecekteki etkileşimlerinizi
                    hızlandırmanıza yardımcı olur.
                  </p>
                </div>
                <div style={{ marginTop: 30 }}>
                  <h5 className="dark-text-info ">Ne Tür Çerezler Kullanıyoruz?</h5>
                </div>
                <div style={{ marginTop: 20 }}>
                  Önemli: Sitemizin tüm işlevlerini deneyimlemek için bazı çerezler gereklidir.
                  Kullanıcı oturumlarını sürdürmemize ve güvenlik tehditlerini önlememize izin
                  veriyorlar. Herhangi bir kişisel bilgi toplamaz veya saklamaz. Örneğin, bu
                  çerezler hesabınıza giriş yapmanıza ve sepetinize ürün eklemenize ve güvenli bir
                  şekilde ödeme yapmanıza olanak tanır.İstatistikler: Bu çerezler, web sitesini
                  ziyaret edenlerin sayısı, benzersiz ziyaretçilerin sayısı, web sitesinin hangi
                  sayfalarının ziyaret edildiği, ziyaretin kaynağı vb. Gibi bilgileri depolar. Bu
                  veriler, web sitesinin ne kadar iyi performans gösterdiğini anlamamıza ve analiz
                  etmemize yardımcı olur. iyileştirilmesi gereken bir yer.Pazarlama: Web sitemizde
                  reklamlar gösterilmektedir. Bu çerezler, size gösterdiğimiz reklamları sizin için
                  anlamlı olacak şekilde kişiselleştirmek için kullanılır. Bu çerezler ayrıca bu
                  reklam kampanyalarının verimliliğini takip etmemize yardımcı olur.Bu çerezlerde
                  saklanan bilgiler, üçüncü taraf reklam sağlayıcıları tarafından size tarayıcıdaki
                  diğer web sitelerinde de reklam göstermek için de kullanılabilir.İşlevsel: Bunlar,
                  web sitemizde bazı temel olmayan işlevlere yardımcı olan çerezlerdir. Bu işlevler,
                  video gibi içerikleri gömmeyi veya web sitesinde sosyal medya platformlarında
                  içerik paylaşmayı içerir.Tercihler: Bu çerezler, ayarlarınızı ve dil tercihleri
                  gibi göz atma tercihlerinizi saklamamıza yardımcı olur.{" "}
                </div>
                <div style={{ marginTop: 30 }}>
                  <h5 className="dark-text-info ">Çerez Tercihlerini Nasıl Kontrol Edebilirim?</h5>
                </div>
                <div style={{ marginTop: 20 }}>
                  Tercihlerinizi daha sonra göz atma oturumunuz aracılığıyla değiştirmeye karar
                  verirseniz, ekranınızdaki “Gizlilik ve Çerez Politikası” sekmesini
                  tıklayabilirsiniz. Bu, tercihlerinizi değiştirmenizi veya onayınızı tamamen geri
                  almanızı sağlayan rıza bildirimini tekrar görüntüler.Buna ek olarak, farklı
                  tarayıcılar web siteleri tarafından kullanılan çerezleri engellemek ve silmek için
                  farklı yöntemler sunar. Çerezleri engellemek / silmek için tarayıcınızın
                  ayarlarını değiştirebilirsiniz.{" "}
                </div>
              </Grid>
            </Grid>
          </div>
        </MKBox>
      </Grid>
    </div>
  );
}
