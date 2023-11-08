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

export function KisiselVerilerinKorunmasi() {
  const navigate = useNavigate();
  return (
    <div>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route:
            "https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum",
          // label: "Whatsapp ıle Sipariş ",
          color: "default",
        }}
        transparent
        light
      />

      <MKBox
        style={{}}
        sx={{
          position: "absolute",
          top: "10px",
          left: "20px",
          zIndex: 3,
          size: "cover",
        }}
      >
        <div
          style={{
            zIndex: 1,
          }}
        >
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            style={{ cursor: "pointer", width: "302px", height: "77px" }}
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
                  Kişisel Verilerin Korunması{" "}
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
                  <h5 className="dark-text-info">
                    6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) Hakkında Bilgilendirme
                  </h5>
                </div>
                <div style={{ marginTop: 20 }}>
                  Bu sayfada; özel hayatın gizliliği, temel hak ve özgürlüklerin korunması amacıyla
                  yürürlüğe giren “6698 Sayılı Kişisel Verilerin Korunması Kanunu” hakkında
                  firmamızın üstlendiği sorumluluklar ve ayrıca kullanıcı sıfatıyla sahip olduğunuz
                  haklar ile ilgili bilgilendirici içerikler yer almaktadır.
                </div>
                <div style={{ marginTop: 20 }}>
                  Arena Diş Deposu sitelerini ziyaret eden, sağladıkları hizmetlerden faydalanan siz
                  değerli kullanıcılarımızın kişisel verilerini Türkiye Cumhuriyeti kanunları
                  kapsamında korumak en büyük önceliklerimizdendir.
                </div>
                <div style={{ marginTop: 20 }}>
                  Kişisel veri, kimliği belirli veya belirlenebilir kişiye ilişkin ad, soyad, TC
                  kimlik numarası, iletişim bilgileri gibi her türlü bilgiyi ifade etmektedir.
                  Kişisel verileriniz; 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”), 5809
                  Sayılı Elektronik Haberleşme Kanunu, Bilgi Teknolojileri ve İletişim Kurumu,
                  Kişisel Verileri Korunma Kurumu düzenlemeleri ve sair mevzuat hükümleri
                  çerçevesinde işlenebilecek olup; ilgili mevzuat gereğince şirketimiz kişisel
                  verilerinizin hukuka aykırı olarak işlenmesini önleme, hukuka aykırı olarak
                  erişilmesini önleme ve muhafazasını sağlama amacıyla, uygun güvenlik düzeyini
                  temin etmeye yönelik tüm teknik ve idari tedbirleri almaktadır.
                </div>
                <div style={{ marginTop: 30 }}>
                  <h5 className="dark-text-info">
                    Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları
                  </h5>
                  <h5 style={{ marginTop: 20 }} className="dark-text-info">
                    KVKK madde 4 uyarınca:
                  </h5>
                </div>
                <ol style={{ marginLeft: "20px" }}>
                  <li>
                    Kişisel veriler, ancak bu Kanunda ve diğer kanunlarda öngörülen usul ve esaslara
                    uygun olarak işlenebilir.
                  </li>
                  <li> Kişisel verilerin işlenmesinde aşağıdaki ilkelere uyulması zorunludur:</li>
                </ol>
                <ul style={{ marginLeft: "40px" }}>
                  <li>Hukuka ve dürüstlük kurallarına uygun olma.</li>
                  <li>Doğru ve gerektiğinde güncel olma.</li>
                  <li>Belirli, açık ve meşru amaçlar için işlenme.</li>
                  <li>İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma.</li>
                  <li>
                    İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar
                    muhafaza edilme.
                  </li>
                </ul>
                <div style={{ marginTop: 20 }}>
                  Kişisel verileriniz, Arena Diş Deposu tarafından sunulan ürün, hizmet ya da ticari
                  faaliyete bağlı olarak değişkenlik gösterebilmekle beraber; otomatik ya da
                  otomatik olmayan yöntemlerle, ofisler, internet sitesi, sosyal medya mecraları,
                  mobil uygulamalar ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak
                  toplanabilecektir. Arena Diş Deposu’nun ürün ve hizmetlerinden yararlandığınız
                  sürece oluşturularak ve güncellenerek kişisel verileriniz işlenebilecektir.
                  Ayrıca, internet sitemizi ziyaret ettiğinizde, Arena Diş Deposu’nun düzenlediği
                  eğitim, seminer veya organizasyonlara katıldığınızda kişisel verileriniz
                  işlenebilecektir.
                </div>{" "}
                <div style={{ marginTop: 30 }}>
                  <h5 className="dark-text-info ">
                    İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği
                  </h5>
                </div>
                <div style={{ marginTop: 20 }}>
                  Kayıt altına alınan kişisel verileriniz; alan adı tescili, lisans tescili, SSL
                  tescili ve benzeri hizmetler için, 3. Parti firmalar, kurum ve kuruluşlar; sunucu
                  hizmetlerinde kullanılan hizmet ve lisanslara bağlı olarak yazılımların üretici
                  firmaları, ödeme ve tahsilat hizmetleri için banka veya kredi kartı kuruluşları,
                  eposta gönderim hizmeti sağlayan 3. parti eposta gönderim firmaları, faturalama ve
                  muhasebe işlemleri için efatura, earşiv ve benzeri elektronik belge işleyen
                  firmalar ve kurumlar, kullanıcı deneyimlerinin ölçülebilmesi ve pazarlama
                  çalışmalarının yapılabilmesi için 3. Parti istatistik ve analiz firmaları ve yasal
                  merciler ile gerekli ölçüde paylaşılmaktadır.
                </div>
                <div style={{ marginTop: 20 }}>
                  {" "}
                  Toplanan kişisel verileriniz; Arena Diş Deposu tarafından sunulan ürün ve
                  hizmetlerden sizleri faydalandırmak için gerekli çalışmaların birimlerimiz
                  tarafından yapılması, Arena Diş Deposu tarafından sunulan ürün ve hizmetlerin
                  sizlerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarınıza göre özelleştirilerek
                  sizlere önerilmesi, Arena Diş Deposu’nun ve Arena Diş Deposu ile iş ilişkisi
                  içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini, Arena Diş
                  Deposu’nun ticari ve iş stratejilerinin belirlenmesi ve uygulanması ile insan
                  kaynakları politikalarının yürütülmesinin temini amaçlarıyla, kanunen yetkili kamu
                  kurumları ve özel kişilere, KVK Kanunu’nun 8. ve 9. maddelerinde belirtilen
                  kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
                </div>
                <div style={{ marginTop: 30 }}>
                  <h5 className="dark-text-info ">
                    Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
                  </h5>
                </div>
                <div style={{ marginTop: 20 }}>
                  Kişisel verileriniz, her türlü sözlü, yazılı ya da elektronik ortamda, yukarıda
                  yer verilen amaçlar doğrultusunda Arena Diş Deposu tarafından sunulan ürün ve
                  hizmetlerin belirlenen yasal çerçevede sunulabilmesi ve bu kapsamda Arena Diş
                  Deposu’nun sözleşme ve yasadan doğan mesuliyetlerini eksiksiz ve doğru bir şekilde
                  yerine getirebilmesi gayesi ile edinilir. Bu hukuki sebeple toplanan kişisel
                  verileriniz KVK Kanunu’nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme
                  şartları ve amaçları kapsamında bu metnin (1) ve (2) numaralı maddelerinde
                  belirtilen amaçlarla da işlenebilmekte ve aktarılabilmektedir.{" "}
                </div>
                <div style={{ marginTop: 20 }}>
                  <h5 className="dark-text-info ">
                    Kişisel Veri Sahibinin KVK Kanunu’nun 11. Maddesinde Sayılan Hakları
                  </h5>
                </div>
                <div style={{ marginTop: 20 }}>
                  Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi aşağıda
                  düzenlenen yöntemlerle Arena Diş Deposu’a iletmeniz durumunda, Arena Diş Deposu
                  talebin niteliğine göre talebi en kısa sürede ve en geç otuz gün içinde ücretsiz
                  olarak sonuçlandıracaktır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi
                  halinde, Arena Diş Deposu tarafından Kişisel Verileri Koruma Kurulu’nca belirlenen
                  tarifedeki ücret alınacaktır.{" "}
                </div>
                <p style={{ marginTop: 30 }}>Bu kapsamda kişisel veri sahipleri;</p>
                <ul style={{ marginLeft: "40px" }}>
                  <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
                  <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
                  <li>
                    Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp
                    kullanılmadığını öğrenme,
                  </li>
                  <li>
                    Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri
                    bilme,
                  </li>
                  <li>
                    Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların
                    düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin
                    aktarıldığı üçüncü kişilere bildirilmesini isteme,
                  </li>
                  <li>
                    6698 sayılı Kanun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş
                    olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması halinde
                    kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan
                    işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
                  </li>
                  <li>
                    İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi
                    suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,
                  </li>
                  <li>
                    Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması
                    halinde zararın giderilmesini talep etme haklarına sahiptir.
                  </li>
                </ul>
                6698 sayılı Kanun’un 13. maddesinin 1. fıkrası gereğince, yukarıda belirtilen
                haklarınızı kullanmak ile ilgili talebinizi, yazılı veya Kişisel Verileri Koruma
                Kurulu’nun belirlediği diğer yöntemlerle Arena Diş Deposu’ye iletebilirsiniz.
                Kişisel Verileri Koruma Kurulu, şu aşamada herhangi bir yöntem belirlemediği için,
                başvurunuzu, 6698 sayılı Kanun gereğince, yazılı olarak Arena Diş Deposu’ye
                iletmeniz gerekmektedir.
              </Grid>
            </Grid>
          </div>
        </MKBox>
      </Grid>
    </div>
  );
}
