import scanner from "assets/images/dashboard-product/scanner.png";
import siladent from "assets/images/dashboard-product/siladent.jpg";
import firin from "assets/images/dashboard-product/dis-firini.jpg";
import unite from "assets/images/dashboard-product/dis-unitesi.jpg";
import klinik from "assets/images/dashboard-product/klinik.jpg";
import tomografi from "assets/images/dashboard-product/dis-tomografisi.jpg";

export default [
  {
    image: scanner,
    name: "Ağız İçi Tarayıcılar",
    route: "/pages/landing-pages/about-us",
  },
  {
    image: siladent,
    name: "CAD/CAM Sistemleri",
    route: "/pages/landing-pages/contact-us",
  },
  {
    image: firin,
    name: "Dental Fırınlar",
    route: "/pages/authentication/sign-in",
  },
  {
    image: unite,
    name: "Diş Üniteleri",
    route: "/pages/landing-pages/author",
  },
  {
    image: klinik,
    name: "Klinik Dolapları",
    route: "/pages/authentication/sign-in",
  },
  {
    image: tomografi,
    name: "Görüntüleme Sistemleri",
    route: "/pages/landing-pages/author",
  },
];
