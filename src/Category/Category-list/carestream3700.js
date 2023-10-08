import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Carestream3700() {
  return (
    <div>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              {/* Başlık */}
              <div className="page-title">Smart-Shade Teknolojisi</div>

              <div className="page-content">
                Patentli Smart-Shade teknolojisi ile otomatik olarak renk tonunu seçerken aynı
                zamanda kayıt edebilirsiniz.
              </div>
              <div className="page-title">İş Akışında Seçim Özgürlüğü</div>
              <div className="page-content">
                Restoratif,Ortodontik ,İmplant klink uygulamaları ve hatta cihaz uyku modu arasında
                kullanıcının kontrolünde olan devrimsel bir iş akışı özgürlüğü sağlar.
              </div>
              <div className="page-title">Ergonomik Kavrama Tasarımı</div>
              <div className="page-content">
                Ergonomik olarak en uygun tutuş kavrama tasarımı ile , Diş hekmilerine dengeli bir
                tarama kontrolü hissi verir.
              </div>
              <div className="page-title">Eklenen Dokunuş</div>
              <div className="page-content">
                Dokunmatik ekranın özelliği tarayıcı ve mouse arasında ileri/geri geçişin neden
                olduğu ek işlem adımlarını ortadan kaldırır.
              </div>
              <div className="page-title">Artırılmış Hassasiyet</div>
              <div className="page-content">
                Test edilmiş ve onaylanmış CS3700’ün ultra hızlı tarama özelliği ile alt yada üst
                çeneyi 30 sn içinde CS 3600 ile aynı netlikte tarayın.
              </div>
              <div className="page-title">Kontrol Sizde!</div>
              <div className="page-content">
                Opsiyonel bilek kayışı,kullanıcıya tedavi sırasında cihazı en iyi şekilde kontrol
                etmesini sağlar ve tarayıcının elden düşme riskini engeller.
              </div>
              <div className="page-title">Smart-Shade Teknolojisi</div>
              <div className="page-content">
                Tek yüzeyden/yönden renk tonlarını toplayan diğer sistemlerden farklı olarak; CS3700
                yüzey üzerindeki bir çok farklı noktadan renk tonlarını toplar böylelikle daha net
                ve doğru bir klinik eşleme yapmamızı sağlar.
              </div>
              <div className="page-title">Smart Shade Eşleşme Raporu</div>
              <div className="page-content">
                Tek bir tıklama ile çalışılan bölge üzerindeki diş tonlarına ait raporu hızlıca
                oluşturabilir,seçilmiş ilgi alanı için oluşturulan bu raporu , kullanıcıların
                çalıştıkları diş laboratuarlarıyla kolayca paylaşmalarını ve yönlendirmelerini
                sağlar.
              </div>
              <div className="page-title">Kalibre Edilmiş Parlaklık</div>
              <div className="page-content">
                Kutu açılışında CS 3700 en güvenilir sabit ton eşlemesi için önceden kalibre
                edilerek kullancılarına gönderilmiştir.50 saatlik kullanım sonrasında ,akıllı
                kalibrasyon özelliği sayesinde cihaz sizi uyarıyor ve 12 saniyelik bir süre içinde
                gri bir kart üzerinde kullanıcılarına yeni kalibrasyonu yapmalarına olanak sağlıyor.
              </div>
              <div className="page-title">Çalışma Akışınız Hiç Bu Kadar Özgür Olmamıştı!</div>
              <div className="page-content">
                CS ScanFlow yazılımı intraoral tarama yazılım dünyasını yeniden inşa ediyor. Diğer
                tarama yazılım programlarının aksine tamamen açık olması kullanıcıya, sınırsız iş
                akışı kapasitesine sahip farklı klinik uygulamalar arasında özgürce, genişletilmiş
                işlem seçenekleri, tek tıklamayla dışa aktarma ve dokunmatik ekran özellikleri
                sağlamaktadır.
              </div>
              <div className="page-title">Sınırsız İş Akışı Kapasitesi</div>
              <div className="page-content">
                Tamamen yenilenmiş iş akış tasarımı; kullanıcıların tek bir taramadan farklı iş
                akışları arasında serbestçe gezinmelerini sağlar.
              </div>
              <div className="page-title">Genişletilmiş Data İşleme</div>
              <div className="page-content">
                Bu özellik sayesinde toplanan datalar daha çabuk ve kesin sonuçlar verecek şekilde
                işlenir.
              </div>
              <div className="page-title">Tek Tıklama ile Dışa Aktarım</div>
              <div className="page-content">
                Bu özellik ile taranan bölge datalarını dışa aktarmak ve değiştirmek çok daha hızlı
                ve kolay hale gelmektedir.
              </div>

              <div className="page-title">Dokunmatik Ekranın Sihri</div>
              <div className="page-content">
                Geliştirilmiş dokunmatik ekran navigasyonu ,sezgisel bir arayüz yazılımı ve
                kullanıcı arasında direkt bir etkileşim sağlar.
              </div>
              <div className="page-title">Hybrid Tarama</div>
              <div className="page-content">
                Hybrid tarama özelliği ile zorlu implant ve restorative tedavi verilerinin
                yakalanmasında ve implant kaynaklı restoratif tedavilerin datalarının kolaylıkla
                alınmasını sağlar.
              </div>
              {/* ... */}
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
              <CenteredBlogCard
                image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                title="Get insights on Search"
                description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
                action={{
                  type: "internal",
                  route: "pages/company/about-us",
                  color: "info",
                  label: "find out more",
                }}
              />{" "}
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default Carestream3700;
