// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
import "./product.css";
import {
  Carestream3600,
  Carestream3600Title,
} from "Category/Category-list/agiz-ici/carestream3600";
import {
  Carestream3700,
  Carestream3700Title,
} from "Category/Category-list/agiz-ici/carestream3700";
import {
  DentaFabSega3D,
  DentaFabSega3DTitle,
} from "Category/Category-list/Cad-CamSistemleri/DentafabSega";
import { Sıladent3DPrinter } from "Category/Category-list/Cad-CamSistemleri/Sıladent3DPrinter";

import { SVHighResolution } from "Category/Category-list/Cad-CamSistemleri/SVHighResolution";

import { SVOpenAir } from "Category/Category-list/Cad-CamSistemleri/SVOpenAir";

// import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
// import { WhatsApp } from "@mui/icons-material";
// import { Phone } from "@mui/icons-material";
// import { Mail } from "@mui/icons-material";

// Routes
import routes from "routes";
import PropTypes from "prop-types";

// Images
// import bgImage from "assets/images/bg-about-us.jpg";
import { Link, useParams } from "react-router-dom";
// import { CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import Products from "products/ProductDatas/products";
// import Carousel from "react-material-ui-carousel";
// import DentafabSega3DPrinter from "Category/Category-list/DentafabSega3DPrinter";
import Siladent3dPrinterSilaPrintLCD from "Category/Category-list/Siladent3dPrinterSilaPrintLCD";
import Silamill4Edition from "Category/Category-list/Silamill4Edition";
import Silamill58Edition from "Category/Category-list/Silamill58Edition";
import SilamillN4Edition from "Category/Category-list/SilamillN4Edition";
import SilamillR5 from "Category/Category-list/SilamillR5";
import SilamillT5 from "Category/Category-list/SilamillT5";
import SilamillT5Edition from "Category/Category-list/SilamillT5Edition";
import SilamillZ4 from "Category/Category-list/SilamillZ4";
import SmartOpticsVinylOpenAir from "Category/Category-list/SmartOpticsVinylOpenAir";
import SmartOpticsVinylHighResolution from "Category/Category-list/SmartOpticsVinylHighResolution";
import Up3dP53DentalFrezelemeCihazi from "Category/Category-list/Up3dP53DentalFrezelemeCihazi";
import CeramicMasterE20 from "Category/Category-list/CeramicMasterE20";
import CeramicMasterE1000 from "Category/Category-list/CeramicMasterE1000";
import CeramicMasterE3000 from "Category/Category-list/CeramicMasterE3000";
import CeramicMasterPress from "Category/Category-list/CeramicMasterPress";
import CeramicMasterPressPro from "Category/Category-list/CeramicMasterPressPro";
import FireMagicEt400 from "Category/Category-list/FireMagicEt400";
import LcCast600T from "Category/Category-list/LcCast600T";
import PinprecisePP100 from "Category/Category-list/PinprecisePP100";
import Poliam from "Category/Category-list/Poliam";
import Polimax from "Category/Category-list/Polimax";
import SlitpreciseSP100 from "Category/Category-list/SlitpreciseSP100";
import ZirconMasterS from "Category/Category-list/ZirconMasterS";
import AdvanceAskiliDisUnitesi from "Category/Category-list/AdvanceAskiliDisUnitesi";
import AdvanceAskiliDisUnitesiA1 from "Category/Category-list/AdvanceAskiliDisUnitesiA1";
import AdvanceAskiliDisUnitesiA3 from "Category/Category-list/AdvanceAskiliDisUnitesiA3";
import AdvanceKamciliDisUnitesi from "Category/Category-list/AdvanceKamciliDisUnitesi";
import AdvanceKamciliDisUnitesiA1 from "Category/Category-list/AdvanceKamciliDisUnitesiA1";
import AdvanceKamciliDisUnitesiA3 from "Category/Category-list/AdvanceKamciliDisUnitesiA3";
import AmeliyatMasalari from "Category/Category-list/AmeliyatMasalari";
import JinekolojikVeUrolojikMasa from "Category/Category-list/JinekolojikVeUrolojikMasa";
import PhantomDentalSimulasyonCalismaMasasi from "Category/Category-list/PhantomDentalSimulasyonCalismaMasasi";
import QuattroAskiliDisUnitesi from "Category/Category-list/QuattroAskiliDisUnitesi";
import Panoramik from "Category/Category-list/Panoramik";
import Tomografi from "Category/Category-list/Tomografi";
import Anemon00 from "Category/Category-list/Anemon00";
import Anemon04 from "Category/Category-list/Anemon04";
import Anemon05 from "Category/Category-list/Anemon05";
import Anemon06 from "Category/Category-list/Anemon06";
import Anemon07 from "Category/Category-list/Anemon07";
import Azurit01 from "Category/Category-list/Azurit01";
import Azurit02 from "Category/Category-list/Azurit02";
import Azurit05 from "Category/Category-list/Azurit05";
import Kuvars01 from "Category/Category-list/Kuvars01";
import KuvarsMobil from "Category/Category-list/KuvarsMobil";
import MobilKabin02 from "Category/Category-list/MobilKabin02";
import MobilKabin03 from "Category/Category-list/MobilKabin03";
import MobilKabin04 from "Category/Category-list/MobilKabin04";
import DFM75E from "Category/Category-list/DFM75E";
import CiftTeknisyenCalismaMasasi from "Category/Category-list/CiftTeknisyenCalismaMasasi";
import TekliTeknisyenCalismaMasasi from "Category/Category-list/TekliTeknisyenCalismaMasasi";
import QuattroKamciliDisUnitesi from "Category/Category-list/QuattroKamciliDisUnitesi";
import "./product.css";
import { useRef } from "react";
import { Siladent3dPrinterSilaPrintLCDTitle } from "Category/Category-list/Siladent3dPrinterSilaPrintLCD";
import { Silamill4EditionTitle } from "Category/Category-list/Silamill4Edition";
import { Silamill58EditionTitle } from "Category/Category-list/Silamill58Edition";
import { SilamillN4EditionTitle } from "Category/Category-list/SilamillN4Edition";
import { SilamillR5Title } from "Category/Category-list/SilamillR5";
import { SilamillT5Title } from "Category/Category-list/SilamillT5";
import { SilamillT5EditionTitle } from "Category/Category-list/SilamillT5Edition";
import { SilamillZ4Title } from "Category/Category-list/SilamillZ4";
import { SmartOpticsVinylOpenAirTitle } from "Category/Category-list/SmartOpticsVinylOpenAir";
import { SmartOpticsVinylHighResolutionTitle } from "Category/Category-list/SmartOpticsVinylHighResolution";
import { Up3dP53DentalFrezelemeCihaziTitle } from "Category/Category-list/Up3dP53DentalFrezelemeCihazi";
import { CeramicMasterE20Title } from "Category/Category-list/CeramicMasterE20";
import { CeramicMasterE1000Title } from "Category/Category-list/CeramicMasterE1000";
import { CeramicMasterE3000Title } from "Category/Category-list/CeramicMasterE3000";
import { CeramicMasterPressTitle } from "Category/Category-list/CeramicMasterPress";
import { CeramicMasterPressProTitle } from "Category/Category-list/CeramicMasterPressPro";
import { FireMagicEt400Title } from "Category/Category-list/FireMagicEt400";
import { LcCast600TTitle } from "Category/Category-list/LcCast600T";
import { PinprecisePP100Title } from "Category/Category-list/PinprecisePP100";
import { PoliamTitle } from "Category/Category-list/Poliam";
import { PolimaxTitle } from "Category/Category-list/Polimax";
import { SlitpreciseSP100Title } from "Category/Category-list/SlitpreciseSP100";
import { ZirconMasterSTitle } from "Category/Category-list/ZirconMasterS";
import { AdvanceAskiliDisUnitesiTitle } from "Category/Category-list/AdvanceAskiliDisUnitesi";
import { AdvanceAskiliDisUnitesiA1Title } from "Category/Category-list/AdvanceAskiliDisUnitesiA1";
import { AdvanceAskiliDisUnitesiA3Title } from "Category/Category-list/AdvanceAskiliDisUnitesiA3";
import { AdvanceKamciliDisUnitesiTitle } from "Category/Category-list/AdvanceKamciliDisUnitesi";
import { AdvanceKamciliDisUnitesiA1Title } from "Category/Category-list/AdvanceKamciliDisUnitesiA1";
import { AdvanceKamciliDisUnitesiA3Title } from "Category/Category-list/AdvanceKamciliDisUnitesiA3";
import { AmeliyatMasalariTitle } from "Category/Category-list/AmeliyatMasalari";
import { JinekolojikVeUrolojikMasaTitle } from "Category/Category-list/JinekolojikVeUrolojikMasa";
import { PhantomDentalSimulasyonCalismaMasasiTitle } from "Category/Category-list/PhantomDentalSimulasyonCalismaMasasi";
import { QuattroAskiliDisUnitesiTitle } from "Category/Category-list/QuattroAskiliDisUnitesi";
import { QuattroKamciliDisUnitesiTitle } from "Category/Category-list/QuattroKamciliDisUnitesi";
import { PanoramikTitle } from "Category/Category-list/Panoramik";
import { TomografiTitle } from "Category/Category-list/Tomografi";
import { Anemon00Title } from "Category/Category-list/Anemon00";
import { Anemon04Title } from "Category/Category-list/Anemon04";
import { Anemon05Title } from "Category/Category-list/Anemon05";
import { Anemon06Title } from "Category/Category-list/Anemon06";
import { Anemon07Title } from "Category/Category-list/Anemon07";
import { Azurit01Title } from "Category/Category-list/Azurit01";
import { Azurit02Title } from "Category/Category-list/Azurit02";
import { Azurit05Title } from "Category/Category-list/Azurit05";
import { Kuvars01Title } from "Category/Category-list/Kuvars01";
import { KuvarsMobilTitle } from "Category/Category-list/KuvarsMobil";
import { MobilKabin02Title } from "Category/Category-list/MobilKabin02";
import { MobilKabin03Title } from "Category/Category-list/MobilKabin03";
import { MobilKabin04Title } from "Category/Category-list/MobilKabin04";
import { DFM75ETitle } from "Category/Category-list/DFM75E";
import { CiftTeknisyenCalismaMasasiTitle } from "Category/Category-list/CiftTeknisyenCalismaMasasi";
import { TekliTeknisyenCalismaMasasiTitle } from "Category/Category-list/TekliTeknisyenCalismaMasasi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export function ProductSlider({ images }) {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      interval={10000}
      // dynamicHeight={}
      showThumbs={true}
      stopOnHover={false}
      // className="d-flex justify-content-center align-items-center"
      // animation="slide"
      // duration={500}
      // width={800}
      // height={600}
      // navButtnsAlwaysVisible={false}
      // fullHeightHover={true}
      // stopAutoPlayOnHover={true}
      // swipe={true}
    >
      {images.map((item, i) => (
        <div key={i}>
          <img src={item} />
        </div>
        // <CardMedia
        //   className="d-flex justify-content-center align-items-center carousel-item"
        //   style={{
        //     width: "100%",
        //     height: "100%",
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     marginLeft: "0",
        //     boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
        //     borderRadius: "20px",
        //     transition: "transform 0.3s ease-in-out",
        //   }}
        //   key={i}
        //   image={item}
        //   alt="Logo"
        // />
      ))}
    </Carousel>
  );
}
ProductSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function ProductInfo() {
  const { productid } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [productId, setProductId] = useState("");
  // const test = () => {
  //   navigate("/urunler/agiz-ici-tarayicilar/:asdasd");
  // };
  // const [productModel, setProductModel] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    console.log(productid);
    let result = productid.replace(":", "");
    console.log(result);

    Products.map((item) => {
      item.product.map((section) => {
        console.log(section.id);
        if (result === section.id) {
          setProductInfo(section);
          setProductImages(section.img);
          // setProductModel(section.model);
          setProductId(section.id);
          console.log(section);
        }
      });
    });
    console.log(productInfo);
  }, []);
  const renderProductComponentTitle = () => {
    switch (productId) {
      case "y62vbr40D9":
        return <Carestream3600Title />;
      case "U2qoPEPPn7":
        return <Carestream3700Title />;
      case "0fky5JRUK5":
        return <DentaFabSega3DTitle />;
      case "wF2McAwDbN":
        return <Siladent3dPrinterSilaPrintLCDTitle />;
      case "OgKzyq7qlj":
        return <Silamill4EditionTitle />;
      case "9XlMdrhb4i":
        return <Silamill58EditionTitle />;
      case "Aq012yPOpC":
        return <SilamillN4EditionTitle />;
      case "6AGNtjzh3x":
        return <SilamillR5Title />;
      case "fxI4W0jv90":
        return <SilamillT5Title />;
      case "kyBvNYd9Eo":
        return <SilamillT5EditionTitle />;

      case "iNp4KdAwi3":
        return <SilamillZ4Title />;
      case "6ckA2QoXgA":
        return <SmartOpticsVinylOpenAirTitle />;

      case "VWt82QTAxh":
        return <SmartOpticsVinylHighResolutionTitle />;

      case "jJpfLj3OLE":
        return <Up3dP53DentalFrezelemeCihaziTitle />;

      case "aYdRQamh7o":
        return <CeramicMasterE20Title />;

      case "OJ14vR3cSM":
        return <CeramicMasterE1000Title />;

      case "ZK14vR3cSM":
        return <CeramicMasterE3000Title />;

      case "TsvMva0AMu":
        return <CeramicMasterPressTitle />;

      case "gX0OVoBxIK":
        return <CeramicMasterPressProTitle />;

      case "Qv0OVoBxIK":
        return <FireMagicEt400Title />;

      case "nxwVeHnsqI":
        return <LcCast600TTitle />;

      case "fS9WOxabf1":
        return <PinprecisePP100Title />;

      case "us9Wpxabf1":
        return <PoliamTitle />;

      case "u963sxabf1":
        return <PolimaxTitle />;
      case "zObKvzOCgk":
        return <SlitpreciseSP100Title />;

      case "AbbKvzOCgk":
        return <ZirconMasterSTitle />;

      case "JqScIHy2mA":
        return <AdvanceAskiliDisUnitesiTitle />;

      case "lKBwnEMjYG":
        return <AdvanceAskiliDisUnitesiA1Title />;
      case "PnKlBZXX8A":
        return <AdvanceAskiliDisUnitesiA3Title />;

      case "I74N2fI3Y8":
        return <AdvanceKamciliDisUnitesiTitle />;

      case "m0A99mC1Fk":
        return <AdvanceKamciliDisUnitesiA1Title />;

      case "uRnqC40euA":
        return <AdvanceKamciliDisUnitesiA3Title />;

      case "dxYoNv22oe":
        return <AmeliyatMasalariTitle />;

      case "d8kYA19AkJ":
        return <JinekolojikVeUrolojikMasaTitle />;

      case "6Xn6aML6Fq":
        return <PhantomDentalSimulasyonCalismaMasasiTitle />;

      case "AvrFuUwAeb":
        return <QuattroAskiliDisUnitesiTitle />;

      case "YNRlN6GndQ":
        return <QuattroKamciliDisUnitesiTitle />;

      case "3ZTv5PyOQ4":
        return <PanoramikTitle />;

      case "cTg3vb7U9Y":
        return <TomografiTitle />;

      case "epnxnAvWlU":
        return <Anemon00Title />;

      case "2T1pEFn3YS":
        return <Anemon04Title />;

      case "552Cyt4p01":
        return <Anemon05Title />;

      case "2xYBmwMbdT":
        return <Anemon06Title />;

      case "9VIP5Ei9QX":
        return <Anemon07Title />;

      case "WzVYkyUoD2":
        return <Azurit01Title />;

      case "Xi5k2aJ4ed":
        return <Azurit02Title />;

      case "hLqXePzk1g":
        return <Azurit05Title />;

      case "7YfeKNbzL9":
        return <Kuvars01Title />;

      case "AiJ5G4Zj0o":
        return <KuvarsMobilTitle />;

      case "mDrVUOMGai":
        return <MobilKabin02Title />;

      case "BfOBwS5xTj":
        return <MobilKabin03Title />;

      case "Kw9eOocx1F":
        return <MobilKabin04Title />;

      case "r3etcIMTgJ":
        return <DFM75ETitle />;

      case "V7RSRfY4BO":
        return <PinprecisePP100Title />;

      case "SwCYBQQ3TM":
        return <SlitpreciseSP100Title />;

      case "1jmZFqoVSi":
        return <CiftTeknisyenCalismaMasasiTitle />;

      case "pW7rUCqbGJ":
        return <TekliTeknisyenCalismaMasasiTitle />;

      default:
        return null;
    }
  };
  const renderProductComponent = () => {
    switch (productId) {
      case "y62vbr40D9":
        return <Carestream3600 />;
      case "U2qoPEPPn7":
        return <Carestream3700 />;
      case "0fky5JRUK5":
        return <DentaFabSega3D />;
      case "wF2McAwDbN":
        return <Siladent3dPrinterSilaPrintLCD />;
      case "OgKzyq7qlj":
        return <Silamill4Edition />;
      case "9XlMdrhb4i":
        return <Silamill58Edition />;
      case "Aq012yPOpC":
        return <SilamillN4Edition />;
      case "6AGNtjzh3x":
        return <SilamillR5 />;
      case "fxI4W0jv90":
        return <SilamillT5 />;
      case "kyBvNYd9Eo":
        return <SilamillT5Edition />;

      case "iNp4KdAwi3":
        return <SilamillZ4 />;
      case "6ckA2QoXgA":
        return <SmartOpticsVinylOpenAir />;

      case "VWt82QTAxh":
        return <SmartOpticsVinylHighResolution />;

      case "jJpfLj3OLE":
        return <Up3dP53DentalFrezelemeCihazi />;

      case "aYdRQamh7o":
        return <CeramicMasterE20 />;

      case "OJ14vR3cSM":
        return <CeramicMasterE1000 />;

      case "ZK14vR3cSM":
        return <CeramicMasterE3000 />;

      case "TsvMva0AMu":
        return <CeramicMasterPress />;

      case "gX0OVoBxIK":
        return <CeramicMasterPressPro />;

      case "Qv0OVoBxIK":
        return <FireMagicEt400 />;

      case "nxwVeHnsqI":
        return <LcCast600T />;

      case "fS9WOxabf1":
        return <PinprecisePP100 />;

      case "us9Wpxabf1":
        return <Poliam />;

      case "u963sxabf1":
        return <Polimax />;
      case "zObKvzOCgk":
        return <SlitpreciseSP100 />;

      case "AbbKvzOCgk":
        return <ZirconMasterS />;

      case "JqScIHy2mA":
        return <AdvanceAskiliDisUnitesi />;

      case "lKBwnEMjYG":
        return <AdvanceAskiliDisUnitesiA1 />;
      case "PnKlBZXX8A":
        return <AdvanceAskiliDisUnitesiA3 />;

      case "I74N2fI3Y8":
        return <AdvanceKamciliDisUnitesi />;

      case "m0A99mC1Fk":
        return <AdvanceKamciliDisUnitesiA1 />;

      case "uRnqC40euA":
        return <AdvanceKamciliDisUnitesiA3 />;

      case "dxYoNv22oe":
        return <AmeliyatMasalari />;

      case "d8kYA19AkJ":
        return <JinekolojikVeUrolojikMasa />;

      case "6Xn6aML6Fq":
        return <PhantomDentalSimulasyonCalismaMasasi />;

      case "AvrFuUwAeb":
        return <QuattroAskiliDisUnitesi />;

      case "YNRlN6GndQ":
        return <QuattroKamciliDisUnitesi />;

      case "3ZTv5PyOQ4":
        return <Panoramik />;

      case "cTg3vb7U9Y":
        return <Tomografi />;

      case "epnxnAvWlU":
        return <Anemon00 />;

      case "2T1pEFn3YS":
        return <Anemon04 />;

      case "552Cyt4p01":
        return <Anemon05 />;

      case "2xYBmwMbdT":
        return <Anemon06 />;

      case "9VIP5Ei9QX":
        return <Anemon07 />;

      case "WzVYkyUoD2":
        return <Azurit01 />;

      case "Xi5k2aJ4ed":
        return <Azurit02 />;

      case "hLqXePzk1g":
        return <Azurit05 />;

      case "7YfeKNbzL9":
        return <Kuvars01 />;

      case "AiJ5G4Zj0o":
        return <KuvarsMobil />;

      case "mDrVUOMGai":
        return <MobilKabin02 />;

      case "BfOBwS5xTj":
        return <MobilKabin03 />;

      case "Kw9eOocx1F":
        return <MobilKabin04 />;

      case "r3etcIMTgJ":
        return <DFM75E />;

      case "V7RSRfY4BO":
        return <PinprecisePP100 />;

      case "SwCYBQQ3TM":
        return <SlitpreciseSP100 />;

      case "1jmZFqoVSi":
        return <CiftTeknisyenCalismaMasasi />;

      case "pW7rUCqbGJ":
        return <TekliTeknisyenCalismaMasasi />;

      case "DentaFab Sega 3D Printer":
        return <DentaFabSega3D />;
      case "SILADENT 3D PRINTER SILAPRINT LCD":
        return <Sıladent3DPrinter />;
      case "SMARTOPTICS VINYL HIGH RESOLUTION":
        return <SVHighResolution />;
      case "SMART OPTİCS VİNYL OPEN AİR":
        return <SVOpenAir />;
      default:
        return null;
    }
  };
  return (
    <>
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
      />{" "}
      <Grid paddingX={10} paddingY={15} container paddingBottom={5}>
        <Grid className="product-card-right" borderRadius={25} item xs={4} md={5} lg={6}>
          <ProductSlider
            sx={{
              width: "100%",
              height: "auto",
            }}
            images={productImages}
          />
        </Grid>

        <Grid className="product-card-left" item xs={4} md={5} lg={6}>
          <MKBox
            minHeight="75vh"
            width="100%"
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              sx={{ mx: "auto", textAlign: "center" }}
            >
              <MKTypography className="productTitle"> {productInfo.model}</MKTypography>

              <MKTypography marginBottom={3} color="white">
                {renderProductComponentTitle()}
              </MKTypography>

              <MKTypography marginTop={3} variant="h6" color="blue">
                Daha Fazla Bilgi İçin Bize Ulaşın
              </MKTypography>
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <Link to="https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum">
                  <MKTypography component="a" variant="body1" color="blue" href="#" mr={3}>
                    <i className="fa fa-whatsapp" />
                  </MKTypography>
                </Link>
                <Link to="/iletişim">
                  <MKTypography component="a" variant="body1" color="blue" href="#" mr={3}>
                    <i className="fa fa-phone" />
                  </MKTypography>
                  <MKTypography component="a" variant="body1" color="blue" href="#" mr={3}>
                    <i className="fa fa-envelope  " />
                  </MKTypography>
                </Link>
              </MKBox>
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
      <Card
        sx={{
          p: 0,
          // mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 0,
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {renderProductComponent()}
      </Card>
    </>
  );
}

export default ProductInfo;
