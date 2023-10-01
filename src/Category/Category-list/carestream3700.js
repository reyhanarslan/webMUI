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
              <div className="page-title">ÖĞÜRME REFLEKSİ OLAN HASTALARIN RAHATSIZLIĞINA SON</div>
              <div className="page-content">
                Belirgin bir öğürme refleksi diş tedavisinin gerçekleştirilmesi için potansiyel bir
                problemdir. Bu açıdan bir dizi strateji mevcut olsa bile, en basit prosedürlerin
                bile kabul görmediği hastalar vardır. Bu durum, tedavi planı ve sonucu üzerinde
                önemli bir etki yaratabilir. Bu sorun ağız içi tarama sistemiyle birlikte tamamen
                sona eriyor! Bununla birlikte ağız içi tarayıcılar; azaltılmış hasta rahatsızlığı,
                zaman verimliliği, basitleştirilmiş klinik prosedürleri ve ölçü malzemelerine gerek
                kalmadan yüksek doğruluğa sahip taramalar yakalama ve bunları kolay depolama imkanı
                gibi birçok avantaj sunuyor. Bir diğer avantaj ise, hemen görselleştirilebilen
                tarama veri sonuçlarının teknisyene e-posta yoluyla kolayca ulaştırılabilmesi.
              </div>
              <div className="page-title">Ergonomik Kavrama Tasarımı</div>
              <div className="page-content">
                Ergonomik olarak en uygun tutuş kavrama tasarımı ile , Diş hekmilerine dengeli bir
                tarama kontrolü hissi verir.
              </div>
              <div className="page-title">Eklenen Dokunuş</div>
              <div className="page-content">
                Dokunmatik ekranın özelliği ;tarayıcı ve mouse arasında ileri/geri geçişin neden
                olduğu ek işlem adımlarını ortadan kaldırır.
              </div>
              <div className="page-title">Arttırılmış Hassasiyet</div>
              <div className="page-content">
                Test edilmiş ve onaylanmış CS3700’ün ultra hızlı tarama özelliği ile alt yada üst
                çeneyi 30 sn içinde CS 3600 ile aynı netlikte tarayın.
              </div>
              <div className="page-title">Kontrol Sizde!</div>
              <div className="page-content">
                Opsiyonel bilek kayışı,kullanıcıya tedavi sırasında cihazı en iyi şekilde kontrol
                etmesini sağlar ve tarayıcının elden düşme riskini engeller.
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
