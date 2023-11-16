import scanner from "assets/images/dashboard-product/scanner.png";
import siladent from "assets/images/dashboard-product/siladent.jpg";
import firin from "assets/images/dashboard-product/dis-firini.jpg";
import unite from "assets/images/dashboard-product/dis-unitesi.jpg";
import klinik from "assets/images/dashboard-product/klinik.jpg";
import tomografi from "assets/images/dashboard-product/dis-tomografisi.jpg";

export default [
  {
    index: 1,
    image: scanner,
    name: "Ağız İçi Tarayıcılar",
    // route: "/urunler/agiz-ici-tarayicilar",
    description:
      "Ağız içi tarayıcılar, geleneksel alçı izlenimlerine kıyasla daha hızlı, konforlu ve hassas sonuçlar sunar.",
  },
  {
    index: 2,
    image: siladent,
    name: "CAD/CAM Sistemleri",
    route: "/urunler/cad-cam-sistemleri",
    description:
      "CAD/CAM sistemleri, bilgisayar programları kullanarak ürünlerin tasarımını yapmayı ve bu tasarımları ürünleri yapmak için kullanılan makinelerin kontrolünü sağlamayı kolaylaştıran teknolojilerdir.",
  },
  {
    index: 3,
    image: firin,
    name: "Dental Fırınlar",
    route: "/urunler/dental-firinlar",
    description:
      "Dental fırınlar, porselen işlemleri, seramik pişirme ve diğer dental uygulamalarda kullanılmak üzere tasarlanmıştır.Dental fırınlar bölümünde, yüksek kaliteli ekipmanları bulabilirsiniz.",
  },
  {
    index: 4,
    image: unite,
    name: "Diş Üniteleri",
    route: "/urunler/dis-uniteleri",
    description:
      "Diş üniteleri, muayene koltuğu, aydınlatma sistemleri, emiş üniteleri ve diğer dental araçları içerir. Diş üniteleri bölümünde, profesyonel diş sağlığı uzmanlarının ihtiyaçlarına uygun yüksek kaliteli ekipmanları bulabilirsiniz.",
  },
  {
    index: 5,
    image: klinik,
    name: "Klinik Dolapları",
    route: "/urunler/klinik-dolaplari",
    description:
      "Klinik dolapları, sağlık kurumlarında kullanılan temiz ve düzenli depolama çözümleridir. Steril malzemelerin etkili bir şekilde saklanmasını sağlar, sağlık profesyonellerine hijyenik çalışma alanları sunar. ",
  },
  {
    index: 6,
    image: tomografi,
    name: "Görüntüleme Sistemleri",
    route: "/urunler/goruntuleme-sistemleri",
    description:
      "Görüntüleme sistemleri, tıbbi alanlarda kullanılan önemli teşhis araçlarıdır. Hastaların iç yapısını incelemek ve tanı koymak için radyoloji, ultrason, MR gibi teknolojileri içerir. Detaylı bilgiler sağlar",
  },
];
