// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
// Pages
// import AboutUs from "layouts/pages/landing-pages/about-us";
// import ContactUs from "layouts/pages/landing-pages/contact-us";
// import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import ProductInfo from "products/AboutUs/index.js";
// import ContactUs from "pages/LandingPages/ContactUs/index";
import PresentationPage from "layouts/pages/presentation";
import Category from "Category/AboutUs";
import { Hakkimizda } from "products/AboutUs/hakkimizda";
import { SatisVeGarantiKosullari } from "products/AboutUs/satisvegarantikosullari";
// import Category from "Category/AboutUs";
import { CerezPolitikasi } from "products/AboutUs/cerezPolitikasi";
import { KisiselVerilerinKorunmasi } from "products/AboutUs/kvkk";
import { MesafeliSatisSozlesmesi } from "products/AboutUs/mesafeliSatisSozlesmesi";
import { Iletisim } from "products/AboutUs/iletisim";
import HomeIcon from "@mui/icons-material/Home";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";
// import Presentation from "pages/Presentation";
import { VizyonMizyon } from "products/AboutUs/VizyonMisyon";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
const routes = [
  {
    name: "Ana Sayfa",
    // icon: <Icon>dashboard</Icon>,
    icon: <HomeIcon />,

    columns: 1,
    // component:<Presentation />,
    // route:"ana-sayfa",

    rowsPerColumn: 2,
    route: "/home",
    component: <PresentationPage />,

    // collapse: [
    //   {
    //     name: "landing pages",
    //     collapse: [
    //       {
    //         name: "about us",
    //         route: "/pages/landing-pages/about-us",
    //         component: <AboutUs />,
    //       },
    //       {
    //         name: "contact us",
    //         route: "/pages/landing-pages/contact-us",
    //         component: <ContactUs />,
    //       },
    //       {
    //         name: "author",
    //         route: "/pages/landing-pages/author",
    //         component: <Author />,
    //       },
    //     ],
    //   },
    //   {
    //     name: "account",
    //     collapse: [
    //       {
    //         name: "sign in",
    //         route: "/pages/authentication/sign-in",
    //         component: <SignIn />,
    //       },
    //     ],
    //   },
    // ],
  },
  {
    name: "Ürünlerimiz",
    route: "/urunler/tum-urunler",
    // component: <ContactUs />,
    // icon: <Icon>view_day</Icon>,
    icon: <FormatListBulletedIcon />,
    collapse: [
      {
        name: "Ağıziçi Tarayıcılar",
        route: "/urunler/agiz-ici-tarayicilar",
        component: <Category />,
      },
      {
        name: "CAD/CAM Sistemleri",
        route: "/urunler/cad-cam-sistemleri",
        component: <Category />,
        // description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "3D Printerler",
            route: "/urunler/cad-cam-sistemleri/3d-printer",
            component: <Category />,
            // component: <Navbars />,
          },
          {
            name: "Kazıyıcılar",
            route: "/urunler/cad-cam-sistemleri/kaziyicilar",
            component: <Category />,
            // component: <Category />,
          },
          {
            name: "Model Tarayıcılar",
            route: "/urunler/cad-cam-sistemleri/model-tarayicilar",
            component: <Category />,
            // component: <Pagination />,
          },
        ],
      },
      {
        name: "Dental Fırınlar",
        route: "/urunler/dental-firinlar",
        component: <Category />,
        // description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "Ceramic Processing - Porselen Fırınları",
            route: "/urunler/dental-firinlar/porselen-firinlar",
            component: <Category />,
            // component: <Inputs />,
          },
          {
            name: "Döküm Fırınları",
            route: "/urunler/dental-firinlar/dokum-firinlar",
            component: <Category />,
            // component: <Forms />,
          },
          {
            name: "Press Fırınları",
            route: "/urunler/dental-firinlar/press-firinlar",
            component: <Category />,
            // component: <Forms />,
          },
          {
            name: "Zirkon Sinterleme Fırınları",
            route: "/urunler/dental-firinlar/zirkon-sinterleme-firinlari",
            component: <Category />,
            // component: <Forms />,
          },
        ],
      },
      {
        name: "Diş Üniteleri",
        route: "/urunler/dis-uniteleri",
        component: <Category />,
      },
      {
        name: "Görüntülenme Sistemleri",
        route: "/urunler/goruntuleme-sistemleri",
        component: <Category />,
      },
      {
        name: "Klinik Dolapları",
        route: "/urunler/klinik-dolaplari",
        component: <Category />,
        // description: "See all 32 examples",
        // dropdown: true,
      },
      {
        name: "Laboratuvar Ekipmanları",
        route: "/urunler/laboratuvar-ekipmanlari",
        component: <Category />,
        // description: "See all 32 examples",
        // dropdown: true,
      },
      {
        name: "Teknisyen Masaları",
        route: "/urunler/teknisyen-masalari",
        component: <Category />,
        // description: "See all 32 examples",
        // dropdown: true,
      },
    ],
  },
  {
    name: "Kurumsal",
    icon: <Icon>article</Icon>,
    component: <Hakkimizda />,
    route: "/hakkimizda",
    collapse: [
      {
        name: "Vizyon Ve Misyon",
        component: <VizyonMizyon />,
        route: "/visyon-misyon",
      },

      {
        name: "Hakkımızda",
        component: <Hakkimizda />,
        route: "/hakkimizda",
      },
      {
        name: "Satış ve Garanti Koşullarımız",
        component: <SatisVeGarantiKosullari />,
        route: "/satis-garanti-kosullari",
      },
      {
        name: "Mesafeli Satış Sözleşmesi",
        component: <MesafeliSatisSozlesmesi />,
        route: "/mesafeli-satis-sozlesmesi",
      },
      {
        name: "Çerez Politikası",
        component: <CerezPolitikasi />,
        route: "/cerez-politikasi",
      },
      {
        name: "Kişisel Verilerin Korunması(KVKK)",
        component: <KisiselVerilerinKorunmasi />,
        route: "/kisisel-verilerin-korunmasi",
      },
    ],
  },
  {
    name: "İletişim",
    icon: <WifiCalling3Icon />,
    // href: "https://www.github.com/creativetimofficial/material-kit-react",
    route: "/iletişim",
    component: <Iletisim />,
  },
];

export default routes;
