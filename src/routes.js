// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
// import AboutUs from "layouts/pages/landing-pages/about-us";
// import ContactUs from "layouts/pages/landing-pages/contact-us";
// import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
// import ProductInfo from "products/AboutUs/index.js";
import ContactUs from "pages/LandingPages/ContactUs/index";
import PresentationPage from "layouts/pages/presentation";
import Category from "Category/AboutUs";

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

const routes = [
  {
    name: "Ana Sayfa",
    icon: <Icon>dashboard</Icon>,
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
    route: "/urunler/cad-cam-sistemleri/kaziyicilar",
    // component: <ContactUs />,
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Ağıziçi Tarayıcılar",
        // route: "/urunler/agiz-ici-tarayicilar/:name",
        // component: <ProductInfo />,
        // description: "See all sections",
        // dropdown: true,
        // collapse: [
        //   {
        //     name: "page headers",
        //     route: "/sections/page-sections/page-headers",
        //     component: <PageHeaders />,
        //   },
        //   {
        //     name: "features",
        //     route: "/sections/page-sections/features",
        //     component: <Features />,
        //   },
        // ],
      },
      {
        name: "CAD/CAM Sistemleri",
        route: "/urunler/cad-cam-sistemleri",
        // description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "3D Printerler",
            route: "/urunler/cad-cam-sistemleri/3d-printer",
            component: <Navbars />,
          },
          {
            name: "Kazıyıcılar",
            route: "/urunler/cad-cam-sistemleri/kaziyicilar",
            component: <Category />,
          },
          {
            name: "Model Tarayıcılar",
            route: "/urunler/cad-cam-sistemleri/model-tarayicilar",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "Dental Fırınlar",
        route: "/urunler/dental-firinlar",
        // description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "Ceramic Processing - Porselen Fırınları",
            route: "/urunler/dental-firinlar/porselen-firinlar",
            component: <Inputs />,
          },
          {
            name: "Döküm Fırınları",
            route: "/urunler/dental-firinlar/dokum-firinlar",
            component: <Forms />,
          },
          {
            name: "Press Fırınları",
            route: "/urunler/dental-firinlar/press-firinlar",
            component: <Forms />,
          },
          {
            name: "Zirkon Sinterleme Fırınları",
            route: "/urunler/dental-firinlar/zirkon-sinterleme-firinlari",
            component: <Forms />,
          },
        ],
      },
      {
        name: "Diş Üniteleri",
        route: "/urunler/dis-uniteleri",
        // description: "See all examples",
        // dropdown: true,
        // collapse: [
        //   {
        //     name: "alerts",
        //     route: "/sections/attention-catchers/alerts",
        //     component: <Alerts />,
        //   },
        //   {
        //     name: "modals",
        //     route: "/sections/attention-catchers/modals",
        //     component: <Modals />,
        //   },
        //   {
        //     name: "tooltips & popovers",
        //     route: "/sections/attention-catchers/tooltips-popovers",
        //     component: <TooltipsPopovers />,
        //   },
        // ],
      },
      {
        name: "Görüntülenme Sistemleri",
        route: "/urunler/goruntuleme-sistemleri",
        // description: "See all 32 examples",
        // dropdown: true,
        // collapse: [
        //   {
        //     name: "avatars",
        //     route: "/sections/elements/avatars",
        //     component: <Avatars />,
        //   },
        //   {
        //     name: "badges",
        //     route: "/sections/elements/badges",
        //     component: <Badges />,
        //   },
        //   {
        //     name: "breadcrumbs",
        //     route: "/sections/elements/breadcrumbs",
        //     component: <BreadcrumbsEl />,
        //   },
        //   {
        //     name: "buttons",
        //     route: "/sections/elements/buttons",
        //     component: <Buttons />,
        //   },
        //   {
        //     name: "dropdowns",
        //     route: "/sections/elements/dropdowns",
        //     component: <Dropdowns />,
        //   },
        //   {
        //     name: "progress bars",
        //     route: "/sections/elements/progress-bars",
        //     component: <ProgressBars />,
        //   },
        //   {
        //     name: "toggles",
        //     route: "/sections/elements/toggles",
        //     component: <Toggles />,
        //   },
        //   {
        //     name: "typography",
        //     route: "/sections/elements/typography",
        //     component: <Typography />,
        //   },
        // ],
      },
      {
        name: "Klinik Dolapları",
        route: "/urunler/klinik-dolaplari",
        // description: "See all 32 examples",
        // dropdown: true,
      },
      {
        name: "Laboratuvar Ekipmanları",
        route: "/urunler/labaratuvar-ekipmanlari",
        // description: "See all 32 examples",
        // dropdown: true,
      },
      {
        name: "Teknisyen Masaları",
        route: "/urunler/teknisyen masalari",
        // description: "See all 32 examples",
        // dropdown: true,
      },
    ],
  },
  {
    name: "Kurumsal",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Hakkımızda",
        // description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "Satış ve Garanti Koşullarımız",
        // description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "Mesafeli Satış Sözleşmesi",
        // description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "Çerez Politikası",
        // description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
      {
        name: "Kişisel Verilerin Korunması(KVKK)",
        // description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
  {
    name: "İletişim",
    icon: <GitHubIcon />,
    // href: "https://www.github.com/creativetimofficial/material-kit-react",
    route: "/src/pages/LandingPages/ContactUs/index",
    component: <ContactUs />,
  },
];

export default routes;
