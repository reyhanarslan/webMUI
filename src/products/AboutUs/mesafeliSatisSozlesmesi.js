import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import routes from "routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DashboardImg from "assets/images/products/kurumsal.jpg";
import MKTypography from "components/MKTypography";

export function MesafeliSatisSozlesmesi() {
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
                      rgba(gradients.light.main, 0.1),
                      rgba(gradients.light.state, 0)
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
                      Mesafeli Satış Sözleşmesi{" "}
                    </MKTypography>
                  </Grid>
                </Container>
              </MKBox>
            </Grid>
          </Grid>
        </>
        <MKBox py={10} display="flex" justifyContent="center" alignItems="center">
          <div className="kurumsal slide-in-container ">
            <Grid className="kurumsal-grid" container alignItems="center">
              <Grid px={6} item xs={12} sm={12} md={12} lg={12}>
                <div style={{ marginTop: "50px" }} className="page-title">
                  A- TARAFLAR
                </div>
                <div style={{ marginTop: "50px" }}>
                  <h5 className="dark-text-info">I- Satıcı :</h5>
                  <h5 className="dark-text-info">Adres :</h5>
                  <h5 className="dark-text-info">Vergi D. ve No :</h5>
                </div>
                <div style={{ marginTop: "30px" }}>
                  <h5 className="dark-text-info">II- Alıcı :</h5>
                  <h5 className="dark-text-info">Adres :</h5>
                  <h5 className="dark-text-info">Vergi D. ve No :</h5>
                </div>
                <div style={{ marginTop: "50px" }} className="page-title">
                  B- KAPSAM VE SÜRE
                </div>
                <div style={{ marginTop: "30px" }}>
                  1-SATICI ve ALICI arasındaki tüm ticari işlemler bu sözleşme hükümlerine tabi
                  olup, sözleşme hükümlerinde yapılacak değişiklik ancak taraflarca yazılı olarak
                  yapılacak “Tadil Sözleşmesi” ile yapıldığında geçerli olacaktır.
                </div>
                <div style={{ marginTop: "30px" }}>
                  {" "}
                  2-İş bu sözleşme, taraflardan birisi tarafından fesh edildiği tarihe kadar geçerli
                  olup, taraflarca yapılacak fesih ihbarı ancak karşı tarafa yazılı olarak ulaştığı
                  anda geçerli olacaktır. Taraflardan birisi tarafından gönderilen sözleşmenin
                  feshine ilişkin ihbarın, muhataba ulaşmasına kadar geçerlidir.
                </div>
                <div style={{ marginTop: "30px" }}>
                  {" "}
                  ALICI, SATICIYA olan borcunu gününde ödememesi ve/veya ALICI’ya SATICI tarafından
                  keşide edilen kıymetli evrakın ademi kabul ve ademi tediyeden protesto edilmiş
                  olması halinde tüm alacakları muaccel hale gelecek olup işbu sözleşme, hiçbir
                  ihtar gerekmeksizin SATICI tarafından tek taraflı olarak feshedilecektir. SATICI,
                  bakiye alacağını tahsil için, ALICI aleyhine yasal yollara başvurma hakkını
                  kullanacaktır.
                </div>
                <ul className="page-title" style={{ marginLeft: "20px" }}>
                  <li>SÖZLEŞME KONUSU ÜRÜN BİLGİLERİ</li>
                </ul>
                <div>
                  <ol>
                    <li style={{ marginLeft: "20px" }}>
                      Malın / Ürünün/Hizmetin türü, miktarı, marka/modeli, rengi, adedi, satış
                      bedeli, ödeme şekli, aşağıda belirtildiği gibidir;
                    </li>

                    <table
                      style={{ marginTop: "40px", marginBottom: "40px" }}
                      className="custom-table"
                    >
                      <tr></tr>
                      <tr>
                        <td>Mal / Ürün / Hizmet türü : </td>
                      </tr>
                      <tr>
                        <td>Marka/Model : </td>
                      </tr>
                      <tr>
                        <td>Rengi : </td>
                      </tr>
                      <tr>
                        <td>Adedi : </td>
                      </tr>
                      <tr>
                        <td>Satış Fiyatı ( KDVdahil ) : </td>
                      </tr>
                      <tr>
                        <td>Garanti Süresi : </td>
                      </tr>

                      <tr>
                        <td>Ödeme Şekli : </td>
                      </tr>
                      <tr>
                        <td>Teslimat Adresi : </td>
                      </tr>
                      <tr>
                        <td>Teslim Edilecek Kişi : </td>
                      </tr>
                      <tr>
                        <td>Teslim Tarihi : </td>
                      </tr>
                      <tr>
                        <td>Montaj Tarihi : </td>
                      </tr>

                      <tr>
                        <td>Montajı Yapacak Teknik Servis : </td>
                      </tr>
                      <tr>
                        <td>Fatura Adresi : </td>
                      </tr>
                      <tr>
                        <td>Diğer (ünit içeriği) : </td>
                      </tr>
                    </table>

                    <li style={{ marginLeft: "20px" }}>
                      SATICI ile ALICI tacir olup, taraflar arasındaki hukuki ilişki, 13.01.2011
                      tarih ve 6102 sayılı Türk Ticaret Kanunu ( TTK ) ve 11.01.2012 tarih ve 6098
                      sayılı Türk Borçlar Kanunu kapsamında değerlendirilir.
                    </li>
                  </ol>{" "}
                </div>
                <ul className="page-title" style={{ marginLeft: "20px" }}>
                  <li>SATIŞLAR</li>
                </ul>
                <ol>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Taraflar arasındaki, satışa konu emtianın, cinsi, kalitesi, miktarı, tutarı,
                    ödeme şekli ve varsa özel şartlarını içeren sipariş belgeleri, özel bağlantı
                    teklif belgeleri, sipariş mektupları, müşteri siparişi teyidi, faturalar ve
                    yazılı özel anlaşmalar, bu sözleşmenin ayrılmaz parçası sayılır.Söz konusu
                    belgeler ile özel olarak düzenlenmeyen konularda, işbu sözleşme şartları
                    geçerlidir.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Taraflar arasında yazılı olarak kararlaştırılmamış ise satış konusu emtianın
                    satış fiyatı fatura tarihinde SATICI’nın cari satış fiyatıdır.SATICI, fatura
                    ve/veya teslim edilmemiş emtianın fiyat ve satış şartlarını ihbarsız olarak her
                    zaman değiştirebilir.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Bu sözleşme, satışlar ve satışlarla ilgili tüm belgelerden ve kıymetli evraktan
                    kaynaklanan tüm giderler ile vergi, resim ve harçların sorumluluğu ALICI’ya ait
                    olup ve ALICI tarafından ödenecektir.ALICI tarafından ödenmeyen iş bu
                    giderlerden dolayı SATICI zarara uğrarsa iş bu zarar ALICI tarafından derhal
                    tazmin edilecek olup aksi halde sözleşme SATICI tarafından hiçbir ihtar ve
                    ihbara gerek kalmaksızın tek taraflı olarak fesh edilecektir.Bu takdirde ALICI
                    bakiye satış bedelini ödemeyi kabul ve taahhüt etmiştir.
                  </li>
                </ol>
                <ul className="page-title" style={{ marginLeft: "20px" }}>
                  <li> BELGE VE ÖDEMELER</li>
                </ul>
                <ul className="page-title" style={{ marginLeft: "20px" }}>
                  <li> ÖDEMELER</li>
                </ul>
                <ol>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI’nın borçlarını gününde ifası esastır.
                  </li>

                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI, satışa konu emtia bedelleri ile sair hususlardan doğan borçlarını,
                    bunlara aitirsaliye ve/veya faturanın tanzimi anında, SATICI’nın kabul edeceği
                    ödeme şekilleriile kabul etmez ise nakden kapatacaktır.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Taraflar arasındaki bütün tediyelerin ispatı, imzalı makbuzla yapılmış
                    olmasınabağlıdır.
                  </li>

                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI’nın ödemeleri, öncelikle SATICI’ya olan vade farkı ve temerrüt faizi
                    borçlarına ve MASRAFLARA mahsup edilir. Nakden veya çek ile yapılan ödemeler,
                    SATICI’nın doğmuşve doğacak vade farkı ve temerrüt faizi VE MASRAF
                    alacaklarından vazgeçtiğini göstermez veSATICI’nın iş bu alacakları ALICI’dan
                    talep hakları saklı tutulmuştur. .
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Fatura bedeli; mal bedeli ve/veya kur farkı, vade farkı ile temerrüt
                    faizineuygulanacak KDV’den oluşur.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    SATICI tarafından yapılan satışların bedelleri, ALICI tarafından vadeli ödenecek
                    iseSATICI’nın tayin ve tespit ettiği şekilde ALICI’nın teminata bağlanması
                    halindevadeli satış mümkündür. Eğer ALICI ödemesini teminata bağlamadı ise
                    ödemenin son taksidi tahsil edilene kadar malın mülkiyeti SATICIYA ait kalacak
                    olup iş bu mallara
                  </li>
                  <div style={{ marginTop: "10px", marginLeft: "20px" }}>
                    <strong>
                      {" "}
                      ’’ARENA DİŞ DEPOSU’nin MALIDIR. KİRALIK OLARAK HİZMETE SUNULMUŞ OLUP, CİHAZ
                      3.ŞAHISLARA SATILAMAZ, DEVİR EDİLEMEZ, HACİZ EDİLEMEZ VE HABER VERİLMEDEN AYNI
                      ADRESTEN FARKLI BİR ADRESE TAŞINAMAZ ’’
                    </strong>{" "}
                    ibaresi içeren bir etiket cihazın görünebilir bir yerine konacaktır.
                  </div>

                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Teminat olarak alınan kıymetlerin gerektirdiği masraflar esas itibariyle
                    ALICI’ya aittir.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI’nın gösterdiği teminatlar SATICI tarafından yeterli bulunmadığı
                    taktirde,SATICI, ALICI’nın vereceği siparişleri kabul edip etmemekte
                    serbesttir.ALICI’nınbu konuda herhangi bir talepte bulunma hakkı yoktur.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI, borçlarına karşılık SATICI’nın yazılı kabülü ve vade farkı
                    ayrıcahesaplanmak ve ödenmek üzere ve TTK’na göre düzenlemiş ve vergise keşide
                    edentarafından ödenmiş çek ve/veya bonoları SATICI’ya ciro ederek verebilir.
                    SATICI,ALICI tarafından ciro edilen çeklerin postada veya bankada veya herhangi
                    bir şekildekaybından veya yok olmasından sorumlu tutulamaz.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI tarafından, SATICI’ya verilen kambiyo senetlerinin gününde
                    tahsiledilmemesi veya herhangi bir nedenle zayii halinde, bunların turarı ile
                    yapılanmasrafları ve ödeme tarihine kadar AYLIK %7 oranında temerrüt faizi,
                    SATICI’nın ihbarıüzerine, nakden ve def’atenödenir.Bu ihbarın, herhangi bir
                    nedenler gecikmesininsorumluluğu, nakit ödeme yerine kambiyo senedi veren
                    ALICI’ya aittir.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI’nın keşide veya ciro edilerek SATICI’ya verdiği çek ve bonoların
                    günlerindeödenmemesi durumunda, bunların bedelleri SATICI’nın ilk ihbarında
                    ALICItarafından, vade gününden itibaren vade farkları da eklenerek
                    SATICI’yaödenecektir.Aksi halde, bu borç dahil ALICI’nın, SATICI’ya olan tüm
                    borçlarımüeccel hale gelecektir.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Harp, çatışma, dahili kargaşa, işgal, sabotaj, grev, lokavt, işçi ve memur
                    direnişi, sel,deprem, yangın, ham veya yarımamul madde, yarı mamul madde ve
                    malzeme ithalveya dahili piyasadan temininin mümkün olmaması, enerji kısıtlaması
                    gibiSATICI’nın ihtiyarında olmayan sebeplerle satış akdinin SATICI tarafından
                    yerinegetirilmemesi/getirilememesi ve bunlarla sınırlı olmamak üzere kanunen
                    kabul edilensair mücbir sebep hallerinde, veya sair sebeplerle malın temininde
                    sorun yaşanması halindeSATICI’nınALICI’ya karşı hiçbir sorumluluğu yoktur.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Aksi bildirilmediği sürece nakliye ücreti ALICI’ya aittir.
                  </li>
                </ol>
                <ul className="page-title" style={{ marginLeft: "20px" }}>
                  <li> HESAPLARIN KAPATILMASI VE VADE FARKLARI</li>
                </ul>
                <ol>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    SATICI’nınALICI’ya kestiği her fatura, faturada belirtilen sürede, bedeli
                    naktenve/veya SATICI’nın yazılı kabülüne bağlı olmak üzere bu sözleşmede,
                    belirtilennitelikte çek ve/veya bonolarla kapatılır.Bono ve/veya çek verilerek
                    kapatılan faturabedellerinde, faturada belirtilen ödeme gününün aşılması halinde
                    aylık %7 oranındavade farkı uygulanır.
                  </li>

                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Hesapların, ALICI tarafından süresinde kapatılmaması halinde, ALICI’nınSATICI’ya
                    senet ve/veya çekle kapatılmış olanlarda dahil, tüm borçları ve vadefarkları,
                    SATICI’nın herhangi bir ihbarına gerek olmaksızın müeccel olur.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI geciken ödemeleri için SATICI’ya aylık %7 vade farkı ödemeyi Kabul
                    etmiştir.
                  </li>

                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI’nınSATICI’ya verdiği çek ve bonoların ALICI’ya iade edilmiş
                    olması,bunların bedellerinin ödendiğine dair SATICI tarafından düzenlenmiş ve
                    imzalanmışbir makbuz olmadıkça, bedellerinin, masraflarının ve vade farklarının
                    SATICI’yaödendiğini ve SATICI’nın bunlardan vazgeçtiğini göstermez.
                  </li>
                </ol>
                <ul className="page-title" style={{ marginLeft: "20px" }}>
                  <li> DEĞİŞİKLİKLER VE FESİH</li>
                </ul>
                <ol>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Sözleşme ve temerrüt faizi oranlarında değişiklikler, SATICI tarafından yazılı
                    olarakALICI’ya iadeli mektupla gönderildiği tarihten itibaren uygulanır.Bu faiz
                    oranlarınıkabul etmeyen ALICI, borçlarını nakten ve def’aten ödemek
                    zorundadır.Yeni faizoranının yazılı olarak bildirilmediği hallerde faturada
                    belirtilmemiş ise bu sözleşmedebelirtilen AYLIK%7 faiz oranı uygulanır.Satıcı
                    tarafından Vade Farkı oranında yapılan değişiklikler fatura üzerinde belirtilmek
                    suretiyle de başkaca bildirim şartına bağlı olmadan da değiştirilebilir. Alıcı
                    tarafından, faturada yazılan bu vade farkı oranının fatura münderecatından
                    olmadığı için itiraz edilmediği yönündeki itirazlara itibar edilmez ve kötü
                    niyetli olarak değerlendirilir.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI’nın, bu sözleşme hükümlerine aykırı davranışı halinde SATICI tüm
                    haklarınınifasını ve alacaklarının ödenmesini ALICI’dan derhal talep hakkında
                    sahiptir veALICI buna uymak zorundadır. Buna uyulmadığı
                    taktirdeSATICI’nınALICI’dakitüm hak ve alacakları herhangi bir ihbar
                    veihtaragerek kalmaksızın muaccel hale gelir.
                  </li>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Taraflardan birisinin, TTK hükümlerine göre diğer tarafa yapacağı yazılı ihbar
                    ilesözleşmefeshedilir. Kim tarafından feshedilirse edilsin ALICI tüm
                    borçlarınıSATICI’ya nakden ve def’aten ödemek zorundadır.
                  </li>
                </ol>
                <ul className="page-title" style={{ marginLeft: "20px" }}>
                  <li> GENEL HÜKÜMLER</li>
                </ul>
                <div className="page-title"> I- İHBAR, İHTAR, TEYİD VE ADRES DEĞİŞİKLİKLERİ</div>
                <ol>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Taraflar arasındaki her türlü ihbar, ihtar ve teyitler ile bunlara karşı
                    itirazlar; iadeli taahhütlü mektup veya noter aracılığı ile yapılır.
                  </li>{" "}
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Taraflar, adres değişikliklerini diğer tarafa 7(yedi) gün içerisinde yazılı
                    olarak ihbarzorundadır. Bu ihbar yapılmadığı taktirde, sözleşmede mevcut adrese
                    gönderilentebligatlar, hukuken geçerli bir tebligatın tüm hukuki sonuçlarını
                    doğuracaktır.
                  </li>
                </ol>
                <div className="page-title"> II- YETKİLİLERİN DEĞİŞMESİ VE DEVİR</div>
                <ol>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    ALICI, kendisini temsile yetkili şahıslar değiştiğiveya şirket nevi değişikliği
                    halinde bu durumu SATICI’yaanında bildirmek ve hazırlanan yeni imza sirkülerini
                    tebliğ etmek zorundadır.
                  </li>{" "}
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Bu sözleşme, tarafların bütün kanuni ve akdi haleflerini bağlar ve akdi ve
                    kanunihalefleri leh ve aleyhine hüküm ifade eder. ALICI sözleşme konusu işi ve
                    doğacakhaklarını SATICI’nın yazılı izni olmaksızın herhangi bir başkasına devir
                    ve temlikedemez.
                  </li>
                </ol>
                <div className="page-title"> III- SÖZLEŞMENİN DEĞİŞİMİ VE İHTİLAF HALLERİ</div>
                <ol>
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Bu anlaşma ancak, tarafların yetkili mercilerince imzalanan ek sözleşme
                    iledeğiştirilebilir.Sürekli uygulamalar dahi, yazılı ve imzalı bir değişiklik
                    yok ise,sözleşmenin değiştirildiği anlamında yorumlanamaz ve bu tür
                    uygulamalardayanılarak herhangi bir hak iddia edilemez.
                  </li>{" "}
                  <li style={{ marginTop: "10px", marginLeft: "20px" }}>
                    Bu sözleşmeden kaynaklanan ya da sözleşme ile ilgili ihtilafların halinde,
                    HUMK287. maddesi gereğince SATICI’nın defter, kayıt ve belgeleri yegane delil ve
                    İZMİR Mahkemeleri ve İcra Daireleri, münhasıran yetkili kabul edilmiştir.
                  </li>
                </ol>
                <div style={{ marginTop: "30px" }}>
                  İşbu sözleşme tüm ekleriyle bir bütündür ve 28 /11 / 2019tarihinde iki nüsha
                  olaraktanzim ve taraflarca okunduktan sonra imza edilmiştir.
                </div>
              </Grid>
            </Grid>
          </div>
        </MKBox>
      </Grid>
    </div>
  );
}
