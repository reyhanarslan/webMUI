import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import routes from "routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DashboardImg from "assets/images/dashboard/arena-dis-banner-2-2.jpg";
import MKTypography from "components/MKTypography";

export function SatisVeGarantiKosullari() {
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

      <Grid py={10}>
        <>
          <Container>
            <Grid container>
              <Grid item xs={12} lg={12}>
                <MKBox
                  display="flex"
                  alignItems="center"
                  borderRadius="xl"
                  py={10}
                  className="slide-in-container"
                  sx={{
                    borderRadius: "30px",
                    backgroundImage: ({
                      functions: { linearGradient, rgba },
                      palette: { gradients },
                    }) =>
                      `${linearGradient(
                        rgba(gradients.light.main, 0.3),
                        rgba(gradients.arena.state, 0.9)
                      )}, url(${DashboardImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
                        Satış Ve Garanti Koşullarımız
                      </MKTypography>
                    </Grid>
                  </Container>
                </MKBox>
              </Grid>
            </Grid>
          </Container>
        </>

        <MKBox className="slide-in-container" component="section" py={8}>
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className="page-title">SATIŞ KOŞULLARI</div>
                <div style={{ marginBottom: 20 }}>
                  <h5 className="dark-text-info">FİYATLAR</h5>
                </div>
                <ol>
                  <li>
                    Fiyatlar ürünlerin ithal edildikleri ülkelere göre EURO ve USD olarak
                    düzenlenmiştir ve tavsiye edilen satış fiyatlarıdır.
                  </li>
                  <li>
                    Satış anında fiyatlar o günkü T.C.M.B. Efektif EURO / USD satış kurundan TL’ye
                    çevrilerek satış gerçekleştirilir.
                  </li>
                  <li>Arena Diş zaman zaman kurları belli sürelerle sabitleme hakkına sahiptir.</li>
                  <li>Fiyatlara KDV dahil değildir.</li>
                  <li>
                    Arena Diş katalog, web sayfası, sanal mağaza ilanlarda vb. mecralarda ilan
                    ettiği fiyatları önceden haber vermeden değiştirme hakkına sahiptir.
                  </li>
                  <li>
                    Arena Diş tüm ürünlerde zaman zaman kampanyalar düzenleyebilir. Kampanya
                    dönemlerinde o günkü satış fiyatları ve koşulları geçerlidir. Bu durumda, daha
                    önce bu ürünleri satın almış olanlar hak iddia edemez.
                  </li>
                  <li>
                    Cihaz siparişlerinde eğer alıcı isterse leasing uygulanabilir. Alıcı tarafından
                    ayrıca bir leasing firması belirtilmemişse, Arena Diş’in anlaşmalı olduğu
                    leasing firmasıyla çalışılır. Leasing de yapılacak tüm masraflar (faiz, sigorta,
                    sözleşme ve noter giderleri v.s) ve devir ücreti alıcıya aittir. Teslim
                    tarihinden en az 15 gün önce leasing sözleşmesinin alıcı tarafından imzalanmış
                    olması gereklidir. Leasing evraklarındaki eksiklikler ya da müşterinin leasing
                    firması tarafından kredi açısından yeterli bulunmaması gibi nedenlerden meydana
                    gelecek gecikme, işlem iptali v.s den dolayı Arena Diş’in sorumluluğu yoktur.
                  </li>
                </ol>
                <div style={{ marginTop: 30, marginBottom: 20 }}>
                  <h5 className="dark-text-info">SATIŞ VE ÖDEMELER</h5>
                </div>
                <ol>
                  <li>
                    Cihaz satışlarında 11.01.2011 tarih ve 6098 sayılı Türk Borçlar Kanunun 207 ve
                    ilgili maddeleri gereği Satış Sözleşmesi yapılması zorunludur.
                  </li>
                  <li>
                    Satış işlemlerinde kapalı hesap çalışılır. Açık hesap çalışmak için 13.01.2011
                    tarih ve 6102 sayılı Türk Ticaret Kanunun 89. Maddesi çerçevesinde Cari Hesap
                    Sözleşmesi imzalanması gerekmektedir.
                  </li>
                  <li>
                    Ödemeler nakit, havale, çek ve kredi kartı ile kabul edilir. Bunların dışındaki
                    ödeme şekilleri kabul edilmez. Senetle yapılan ödemelerde Muacceliyet Sözleşmesi
                    zorunludur.
                  </li>
                  <li>
                    Kredi kartlarında ; Arena Diş’in hizmet aldığı bankaların kredi kartları ile
                    yapılan ödemelerde Arena Diş uyguladığı vade farksız taksitlendirme imkanı
                    bulunmaktadır.
                  </li>
                  <li>
                    Taksitli satışlar KDV hariç 500,00 (BeşYüzTürkLirası) ve üzerindeki
                    alışverişlerde uygulanmaktadır. Bu tutarın altındaki alışverişler tek
                    ödeme(peşin) olarak alınmaktadır.
                  </li>
                  <li>
                    Taksitli ödemelerde vade sayısı, sarf malzemeleri için 6 (altı)ay, cihazlar
                    (cihaz olarak kabul edilen ürünler olarak işaretlenmektedir) için 9 (dokuz)
                    aydır. Taksitli ödemeler kredi kartı ve çek ile kabul edilir. Arena Diş günün
                    koşullarına göre taksit sayısını değiştirme hakkına sahiptir.
                  </li>
                  <li>
                    Taksitli cihaz satışlarında KDV peşin olarak alınır KDV dışındaki tutar
                    taksitlendirilir.
                  </li>

                  <li>
                    Kredi kartı ile yapılacak satışlarda eğer ödeme Mail-Order şeklinde alınacaksa
                    “Mail-Order Talimatı” müşteri tarafından imzalanır ve Kredi kartı hamilinin
                    Nüfus Cüzdanı ve Kredi kartının fotokopisi alınır. Başkasına ait kredi kartı ile
                    ödeme yapacak cari hesaplara ilişkin olarak kredi kartı sahibi kredi kartından
                    şirketimizin tahsilat yapabilmesi için ilgili formu mutlaka imzalayacaktır.
                  </li>
                  <li>
                    Havale ile yapılacak ödemelerde havale Arena Diş’in hesabına geçtikten sonra
                    ürün müşteriye sevk edilir.
                  </li>
                  <li>
                    Havale işlemlerinde yapılacak havale ücretinin, havalenin içinden ödenmesi
                    kesinlikle kabul edilemez. Bu masraf sipariş sahibine aittir.
                  </li>
                </ol>
                <div style={{ marginTop: 30, marginBottom: 20 }}>
                  <h5 className="dark-text-info ">TESLİMAT</h5>
                </div>
                <ol>
                  <li>
                    Siparişler eğer saat 16:00’dan önce alınmış ise aynı gün anlaşmalı olduğumuz
                    kargo firması (Kargo firması müşteri tarafından bildirilmedikçe firmamızın
                    seçeceği kargo şirketi ile gönderilir.) ile sipariş sahibine gönderilir.
                  </li>
                  <li>
                    KDV Hariç 500 TL (BeşYüzTürkLirası) altındaki siparişlerin kargo ücreti sipariş
                    sahibine aittir. Bu tutarın üzerindeki siparişlerin kargo ücretini Arena Diş
                    karşılayacaktır.
                  </li>
                  <li>
                    Cihazların nakliye ücretini her koşulda alıcı öder. (Cihaz olarak kabul edilen
                    ürünler bu katalogda harfiyle işaretlenmiştir)
                  </li>
                  <li>
                    Depomuzun bulunduğu illerde cihaz siparişleri kargo ve/veya Arena Diş’in
                    Lojistik Müdürlüğü tarafından teslim edilir.
                  </li>
                  <li>
                    11.01.2011 tarih ve 6098 sayılı Türk Borçlar Kanunun 208. Maddesine istinaden
                    siparişler kargo firmasına teslim edildikten sonra mal seyri rizikosu alıcıya
                    aittir.
                  </li>
                  <li>
                    Siparişiniz teslim edildiğinde, kargo yetkilisi eşliğinde paketinizi açarak
                    ürününüzü kontrol etmelisiniz. Özellikle ezilmiş, yırtılmış, açılmış veya
                    ıslanmış paketlerde bunu yapmanız çok önemlidir. Beklenmedik bir durumda,
                    sorunlu ürünle karşılaşırsanız paketi teslim almayıp, kargo yetkilisine tutanak
                    tutturarak kargo şirketi tarafından tarafımıza iade edilmesini sağlamanız
                    gerekmektedir.
                  </li>
                  <li>
                    Stoklarımızda bulunmayan siparişlerin değeri 100 EURO’yu aşıyorsa sipariş
                    bedelinin %25’si cayma bedeli alındıktan sonra sipariş kesinleşir ve
                    siparişlerin teslimi esnasında bu tutar sipariş tutarından düşülür. Siparişin
                    iptali halinde cayma bedeli iade edilmez. Ancak sipariş 75 gün içerisinde
                    müşteriye teslim edilemez ise müşterinin talebi üzerine sipariş iptal edilir ve
                    cayma bedeli müşteriye iade edilir.
                  </li>
                </ol>
                <div style={{ marginTop: 30, marginBottom: 20 }}>
                  <h5 className="dark-text-info ">GARANTİ KOŞULLARI</h5>
                </div>
                <ol>
                  <li>
                    Sarf malzemesi dışındaki ürünlerimiz ürüne yönelik özel olarak başka bir süre
                    bildirilmediğinde teslim tarihinden itibaren 1 (bir) yıl süre ile garanti
                    kapsamındadır ve garanti kartlarında verilen koşullar uygulanır.
                  </li>
                  <li>
                    Müşterilerimizin garanti kapsamında teknik servis hizmeti alabilmeleri için
                    faturalarını ibraz etmeleri gereklidir ve fatura üzerinde marka, model ve seri
                    numarası mutlaka belirtilmiş olmalıdır.
                  </li>
                  <li>
                    Arena Diş’in ürün portföyünde olup da Türkiye’ye Arena Diş üzerinden giriş
                    yapmamış olan ürünlere garanti kapsamında teknik servis hizmeti verilmez.
                    Cihazın gerek müşteri gerekse yetkisiz servis ve kişilerce kurcalanması, bu
                    kişilerce sonradan ilave edilen yazılım, donanım ile bunların neden olduğu
                    arızalar garanti kapsamı dışında olup garantiyi geçersiz kılar.
                  </li>
                  <li>
                    Doğal afetler (yangın, sel vb.) sonucu darb alarak kırılma veya bozulma,
                    uygunsuz ve/veya hatalı kullanım gibi nedenlerden dolayı meydana gelen arızalar
                    ile hediye olarak verilen ürünler garanti kapsamı dışındadır.
                  </li>
                  <li>
                    Bakımsızlık veya bakım eksikliğinden dolayı meydana gelen arızalar garanti
                    kapsamı dışındadır.
                  </li>
                  <li>
                    Gerek şebekeden gerekse ürünlerin kullanıldığı binanın tesisatından kaynaklanan
                    her türlü elektriksel arızalar ve kullanım kılavuzunda belirtilmeyen her türlü
                    dezenfektan kullanımından kaynaklanan deformasyonlar garanti kapsamı dışındadır.
                  </li>
                  <li>
                    Ampul, diş ünitlerinin döşemeleri, kavitron uçları, O-ring ve conta gibi,
                    plastik veya kauçuk her türlü sarf malzemesi ve aksesuar garanti kapsamı
                    dışındadır.
                  </li>
                  <li>
                    Yazılım kullanan ürünlerin yedek alınması ve/veya veri transferi sırasında
                    uğrayacağı bilgi kayıpları ve yazılımların yeniden kurulumu garanti kapsamı
                    dışındadır.
                  </li>
                  <li>
                    Garanti süreci içerisinde arızalanan ve garanti kapsamında olmayan arızalar için
                    müşterinin onayına müteakip yetkili Teknik Servisimiz Arena Diş’in fiyat listesi
                    uygulanmak suretiyle arızalar giderilir.
                  </li>
                  <li>
                    Satın almış olduğunuz cihazların orijinal kutularını garanti süresince muhafaza
                    ediniz.
                  </li>
                  <li>
                    Cihazlarda meydana gelen arızaların, bakımları ve onarımları firmamızın yetkili
                    teknik servisi Arena Diş tarafından gerçekleştirilir.
                  </li>
                  <li>
                    Hediye olarak verilen (bedelsiz) ürünlerin garantisi yoktur (örneğin otoklav
                    cihazının yanında verilen poşetleme veya distile su cihazı veya ünitlerin
                    yanında hediye edilen başlık vb.).
                  </li>
                  <li>
                    Şirketimizin toptancılara sattığı cihazların garanti süreçleri teslim tarihinden
                    üç ay sonra başlayacaktır. Eğer toptancı firma bu cihazı daha önce satarsa
                    garanti cihazın kurulum tarihinden itibaren başlayacaktır. Üç aylık süreden
                    sonra satışı toptancı tarafından yapılan cihazların kalan garanti süresi
                    tarafımızca uygulanacak bakiye süre için garanti toptancının sorumluluğunda
                    olacaktır.
                  </li>
                </ol>
                <div style={{ marginTop: 30, marginBottom: 20 }}>
                  <h5 className="dark-text-info ">İADE ve DEĞİŞTİRME</h5>
                </div>
                <ol>
                  <li>
                    Şirketimizden satın almış olduğunuz sarf malzemeler fatura tarihinden itibaren 7
                    gün içinde iade alınabilir veya değiştirilebilir.
                  </li>
                  <li>
                    Iade edeceğiniz ürünün kullanılmamış, kullanım hatası sonucu zarar görmemiş ya
                    da paketinin hasar görmemiş olması gerekmektedir. İade etmek istediğiniz
                    ürünleri tüm aksesuarları ve orijinal kutusu ile göndermeniz gerekmektedir.
                    Üründe ve ambalajında herhangi bir bozulma, kırılma, tahrip, yırtılma,
                    kullanılma ve sair durumlar tespit edildiği hallerde ve ürünün müşteriye teslim
                    edildiği andaki hali ile iade edilememesi halinde ürün iade alınmaz ve bedeli
                    iade edilmez. Kurulumu yapılmış cihazlar iade alınmaz veya değiştirilmez.
                  </li>
                  <li>
                    Ürünler adresimize gönderilirken orijinal kutusu zarar görmeyecek şekilde
                    muhafaza edilmelidir. Yani; ürünler kargoya direkt orijinal kutusu ile değil,
                    orijinal kutusunun koruyucu bir koliye yerleştirilmesinden sonra gönderilmelidir
                    (örnek: orijinal kutu üzerine kargo etiketi yapıştırılmış ve kargo koli bandı
                    ile bantlanmış ürünler kabul edilmez).
                  </li>
                  <li>
                    Eğer ürünün faturası şirket adına kesilmiş ise iade işlemi için kurumun
                    düzenlemiş olduğu ‘iade faturası’ ve ‘iade irsaliyesi’ (ya da irsaliyeli fatura)
                    gönderilmesi zorunludur. Aksi durumda, faturası kurumlar adına düzenlenen
                    siparişlerin iadeleri yapılamamaktadır. Bu hususun WEB sayfasında olmasına da
                    dikkat edin…
                  </li>
                  <li>
                    Iade prosedürüne uygun sürelerde yapılan tüm iade işlemlerinde ürünleri Arena
                    Diş Deposu San. ve Tic. A.Ş’nin anlaşmalı olduğu kargo şirketi ile karşı ödemeli
                    olarak gönderebilirsiniz. Anlaşmalı kargo dışındaki firmalarla yapacağınız
                    gönderilerde kargo bedeli sizin tarafınızdan karşılanmış olmalıdır, aksi halde
                    karşı ödemeli gönderi teslim alınmaz.
                  </li>
                  <li>Kurulumu yapılmış cihazalar iade alınamaz veya değiştirilemez.</li>
                </ol>
                <div style={{ marginTop: 30, marginBottom: 20 }}>
                  <h5 className="dark-text-info ">TABİ OLDUĞUMUZ KANUNLAR</h5>
                </div>
                Şirketimizin satmakta olduğu ürünler niteliği itibari ile 1- 13.01.2011 tarih ve
                6102 sayılı Türk Ticaret Kanunu 2- 11.01.2011 tarih ve 6098 sayılı Türk Borçlar
                Kanunu kapsamındadır.
                <div style={{ marginTop: 30, marginBottom: 20 }}>
                  <h5 className="dark-text-info ">
                    TIBBİ CİHAZLARIN ELEKTRONİK KULLANIM TALİMATLARI HAKKINDA TEBLİĞ
                  </h5>
                </div>
                02 Nisan 2015 tarih ve 29314 sayılı Resmi Gazetede Yayınlanan “Tıbbi Cihazların
                Elektronik Kullanım Talimatları Hakkında Tebliğ”’e göre; İLGİ tebliğ ile Tıbbi Cihaz
                Yönetmeliği ile Vücuda Yerleştirilebilir Aktif Tıbbi Cihazlar Yönetmeliği
                kapsamındaki, ithalatını yapmakta olduğumuz Ünit, Otoklav, Panaromik Röntgen, Laser,
                CAD-CAM vs gibi sabit kurulumlu cihazların kullanım kılavuzlarının kağıt kopyası
                yerine elektronik ortamda ulaşıbilir olması isteniyor. Bu kapsamda; çalıştığımız tüm
                markalarımızın web sitelerinde Ürünlerin Kullanım Kılavuzları bulunmakta, ve ayrıca
                https://www.arenadis.com.tr adresimize girerek ilgili ürünlerin kullanım
                kılavuzlarına ulaşabilir veya adresine e posta göndererek ilgili ürünün kullanım
                kılavuzunu tarafımızdan talep edebilirsiniz. * Toptan satışlar için uygulanacak
                satış koşulları için şirketimizin Kurumsal Satış Müdürlüğü ile temas kurunuz.{" "}
                <div style={{ marginTop: 30, marginBottom: 20 }}>
                  <h5 className="dark-text-info ">
                    TOPTAN SATIŞI YAPILAN CİHAZLARIN GARANTİ ŞARTLARI
                  </h5>
                </div>
                Şirketimizin “Satış Koşullarımız” başlığı içinde belirtilen garanti koşullarına
                ilave olarak;
                <ol>
                  <li>
                    Şirketimizin toptancılara sattığı cihazların garanti süreçleri teslim tarihinden
                    üç ay sonra başlayacaktır.
                  </li>
                  <li>
                    Eğer toptancı firma bu cihazı bahse konu üç ay içerisinde satarsa garanti
                    cihazın kurulum tarihinden itibaren başlayacaktır.
                  </li>
                  <li>
                    Üç aylık süreden sonra toptancı tarafından satışı yapılan cihazların kalan
                    garanti süresi tarafımızca uygulanacak, 12 aylık garanti süresinin dışında kalan
                    süre için garanti toptancının sorumluluğunda olacaktır.
                  </li>
                  <li>
                    Şirketimizden cihaz alan toptancılar bu cihazların garantilerinin başlatılması
                    için şirketimizin tek yetkili Teknik Servisi Arena Diş bildirim yapmak
                    zorundadırlar. Aksi halde garanti geçersiz olacaktır.
                  </li>
                  <li>
                    Garanti sürecinin başlatılması için Satış faturasının ibrazı şart olduğundan
                    toptancı firmalar satışını yaptıkları cihazların sevkiyatları esnasında satış
                    faturalarını ibraz etmek zorundadırlar. Arıza meydana geldikten sonra ibraz
                    edilen faturalar ile garanti işlemi yapılmayacaktır.
                  </li>
                  <li>
                    Fatura üzerinde, ilgili ürüne ait; satın alma yılı, ayı ve günü, müşteri adı,
                    satıcı adı, ve ürünün seri numarası vb. bilgiler üzerinde herhangi bir tahribat
                    ve/veya değişiklik yapıldığında o ürünler garanti kapsamına girmez.
                  </li>
                  <li>
                    Cihazın Faturasında kimliği belirtilen kullanıcıdan başka hiç kimse hak ve/veya
                    tazminat talep edemez.
                  </li>
                  <li>
                    Şirketimizden 01.01.2015 tarihinden önce toptancı firmalar tarafından satın
                    alınıp henüz satışı yapıl mayan ürünler için şirketimiz tarafından garanti
                    verilmemektedir.
                  </li>
                </ol>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Grid>
    </div>
  );
}
