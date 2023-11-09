import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Information from "pages/Presentation/sections/Information";
import Testimonials from "pages/Presentation/sections/Testimonials";
import logo from "assets/images/logos/arenadis-logo-web-1.png";
import routes from "routes";
import intro from "assets/videos/UP3D.mp4";
import ReactPlayer from "react-player";
// import sld1 from "assets/images/carousel/SLIDER-1psd.jpg";
// import sld2 from "assets/images/carousel/SLIDER-2.jpg";
// import sld3 from "assets/images/carousel/SLIDER-3.jpg";
import React, { useRef } from "react";
import UrunlerCard from "./sections/UrunlerCards";
import CarouselImages from "./sections/Carousel";
// import videoBg from "assets/images/test1.mp4";
import MKBox from "components/MKBox";
import { useNavigate } from "react-router-dom";
import MKTypography from "components/MKTypography";
import { Container, Grid, Icon, InputBase, Stack } from "@mui/material";
import p53 from "assets/images/products-images/cad-cam-sistemleri/kaziyicilar/up3d-p53-dental-frezleme-cihazi/UP3D-P53-Gorsel.jpg";
import dentafab from "assets/images/products-images/cad-cam-sistemleri/3d-printer/dentafab-sega-3d-printer/Sega-double.jpg";
// import blz from "assets/images/products-images/blz/Poster of LS100.jpg";
// import zirdent from "assets/images/products-images/zirdent/4.jpg";
import zirconmasters from "assets/images/products-images/dental-firinlar/zirkon-sinterleme-firinlari/zirconmatser-s/Z.M.S-1.jpg";
import ceramicmastere20 from "assets/images/products-images/dental-firinlar/ceramic-processing-porselen-firinlari/ceramic-matser-e20/E-20-3.jpg";
import { SearchBoxDatas } from "products/ProductDatas/productsSearch";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import EtkinlikImages from "./sections/etkinlik";
import { useLogoWidth } from "utils";
import("./video.css");

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
function Presentation() {
  const navigate = useNavigate();
  // const [images] = useState([sld1, sld2, sld3]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const playerRef = useRef(null);

  const [searchTerm, setSearchTerm] = React.useState(""); // Arama terimini saklamak için bir state tanımla
  const [searchResults, setSearchResults] = React.useState([]); // Arama sonuçlarını saklamak için bir state tanımla

  // Arama işlevini tanımla
  const handleSearch = (event) => {
    console.log(event);
    if (event.target.value !== "") {
      const query = event.target.value.toLowerCase();
      setSearchTerm(query);

      // Arama sonuçlarını filtrele
      const filteredResults = SearchBoxDatas?.filter((item) =>
        item.value.toLowerCase().includes(query)
      );
      console.log(filteredResults);
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const navigateSearchBox = (e) => {
    console.log(e.target.innerHTML);
    const found = SearchBoxDatas.find((element) => element.value === e.target.innerHTML);
    navigate("/urun-detay/:" + found.key);
    // navigate();
  };
  // const imageDuration = 30000;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isVideoPlaying) {
  //       if (playerRef.current) {
  //         const player = playerRef.current;
  //         if (player && player.getCurrentTime) {
  //           const currentTime = player.getCurrentTime();
  //           if (currentTime >= player.getDuration()) {
  //             setIsVideoPlaying(false);
  //             setCurrentIndex(0);
  //             setTimeout(() => {
  //               setIsVideoPlaying(true);
  //             }, imageDuration);
  //           }
  //         }
  //       }
  //     } else {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //       setTimeout(() => {
  //         setIsVideoPlaying(true);
  //       }, imageDuration);
  //     }
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [currentIndex, isVideoPlaying]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const bgPosition = `-${scrollY / 15}px 0`;
  //     const divBackground = document.querySelector(".div-background");

  //     if (divBackground) {
  //       divBackground.style.backgroundPosition = bgPosition;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const logoWidth = useLogoWidth();

  console.log(searchTerm);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route:
            "https://api.whatsapp.com/send?phone=+905078688953&text=Merhabasiparivermekistiyorum",
          // label: "Whatsapp ıle Sipariş",
          color: "default",
        }}
        blue
      />{" "}
      <MKBox
        sx={{
          position: "absolute",
          top: "15px",
          left: "20px",
          zIndex: 3,
          size: "cover",
          maxWidth: logoWidth,
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
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </MKBox>
      <MKBox
        style={{}}
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          zIndex: 3,
          size: "cover",
        }}
      >
        <div
          style={{
            zIndex: 1,
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={handleSearch}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              zIndex: 1,
              background: "rgb(248,249,255)",
              borderRadius: "15px",
            }}
          >
            {/* Arama sonuçlarını görüntüle */}
            {searchResults.map((result) => (
              <div
                style={{ fontSize: "17px", opacity: "0.8" }}
                onClick={(e) => navigateSearchBox(e)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#0C2540"; // Mouse ile üzerine gelindiğinde arka plan rengi mavi olsun
                  e.target.style.color = "white"; // Mouse ile üzerine gelindiğinde yazı rengi beyaz olsun
                  e.target.style.cursor = "pointer";
                  e.target.style.borderRadious = "15px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "initial"; // Mouse ayrıldığında arka plan rengini varsayılana dön
                  e.target.style.color = "initial"; // Mouse ayrıldığında yazı rengini varsayılana dön
                }}
                key={result.key}
              >
                {result.value}
              </div>
            ))}
          </div>
        </div>
      </MKBox>
      <Card
        sx={{
          zIndex: 42545545,
          borderRadius: "30px",
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.light.main, 0.1),
              rgba(gradients.light.state, 0.45)
            )}, url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%", // Kartın yüzde 100 genişlikte olmasını sağlar.
          height: "100%", // Kartın yüzde 100 yükseklikte olmasını sağlar.
        }}
      ></Card>
      <Card
        sx={{
          zIndex: 1,
          p: 0,
          mt: 0,
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div className="video-card">
          <ReactPlayer
            ref={playerRef}
            style={{ borderRadius: "15px", zIndex: 0 }}
            width="100%"
            height="100%"
            url={intro}
            playing={true}
            muted={true}
            controls={false}
            loop={true}
          />
        </div>
      </Card>
      <div
        style={{
          background: "#0C2540 ",
        }}
      >
        <Card
          sx={{
            p: 0,
            mt: -25,
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            zIndex: 56456,
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Information />
        </Card>{" "}
        <Card
          sx={{
            p: 0,
            mt: 0,
            backgroundColor: "#F8F9FF",
            borderRadius: "0px",
            zIndex: 56456,
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            position: "relative",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* <video
              src={videoBg}
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
            
              }}
            /> */}
            <CarouselImages />
          </div>
        </Card>
        <Card style={{ borderRadius: "0px 0px 30px 30px" }}>
          <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
            <Grid
              item
              xs={12}
              lg={6}
              flexDirection="column"
              alignItems="center"
              sx={{ textAlign: "center", my: 10, mx: "auto" }}
            >
              {" "}
              <MKTypography
                style={{ marginBottom: "20px" }}
                // color="white"
                variant="h2"
                fontWeight="bold"
              >
                Ürünlerimiz
              </MKTypography>
              <MKTypography variant="body1">
                Ürünlerimiz sektörün ihtiyaçlarına uygun çözümler sunuyor.
              </MKTypography>
            </Grid>
          </Grid>
          <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
            <Container>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={5}>
                  <div>
                    <div style={{ marginBottom: "20px" }}>
                      <img src={p53} loading="lazy" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                  <Stack>
                    <MKTypography variant="h3" my={1}>
                      Up3D P53 Dental Frezeleme Cihazı
                    </MKTypography>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">mediation</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Tek tıkla otomatik kalibrasyon, kazıyıcının yüksek
                        <br />
                        hassasiyette işlemesine olanak sağlar.
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">settings_overscan</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        90 derece dikey frezeleme yöntemi, ön dişlerin
                        <br />
                        tasarımını daha estetik hale getirebilir.
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">token</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Çoklu operasyonlar için tek arayüz, kullanımı kolay
                        <br />
                        ve tek tıkla işleme
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKTypography
                        component="a"
                        href="#"
                        variant="body2"
                        color="info"
                        fontWeight="regular"
                        sx={{
                          width: "max-content",
                          display: "flex",
                          alignItems: "center",

                          "& .material-icons-round": {
                            fontSize: "1.125rem",
                            transform: "translateX(3px)",
                            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                          },

                          "&:hover .material-icons-round, &:focus .material-icons-round": {
                            transform: "translateX(6px)",
                          },
                        }}
                      >
                        İncele
                        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                      </MKTypography>
                    </MKBox>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
          <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
            <Container>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                  <Stack>
                    <MKTypography variant="h3" my={1}>
                      DentaFab Sega 3D Printer
                    </MKTypography>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">mediation</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Dental üretim için Ultra Hızlı DLP teknolojisi
                        {/* <br />
                        hassasiyette işlemesine olanak sağlar. */}
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">settings_overscan</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        %99,9’un üzerinde başarılı baskı oranıyla kararlı üretim
                        {/* <br />
                        tasarımını daha estetik hale getirebilir. */}
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">token</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Dakikalar içinde hızlı baskı için hızlı kürlenme özellikleri!
                        <br />
                        {/* ve tek tıkla işleme */}
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKTypography
                        component="a"
                        href="#"
                        variant="body2"
                        color="info"
                        fontWeight="regular"
                        sx={{
                          width: "max-content",
                          display: "flex",
                          alignItems: "center",

                          "& .material-icons-round": {
                            fontSize: "1.125rem",
                            transform: "translateX(3px)",
                            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                          },

                          "&:hover .material-icons-round, &:focus .material-icons-round": {
                            transform: "translateX(6px)",
                          },
                        }}
                      >
                        İncele
                        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                      </MKTypography>
                    </MKBox>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={5}>
                  <div>
                    <div style={{ marginBottom: "20px" }}>
                      <img src={dentafab} loading="lazy" />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
          <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
            <Container>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={5}>
                  {/* <div>
                    <div style={{ marginBottom: "20px" }}>
                      <img src={blz} loading="lazy" />
                    </div>
                  </div> */}
                </Grid>
                <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                  <Stack>
                    <MKTypography variant="h3" my={1}>
                      BLZ
                    </MKTypography>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">mediation</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Tek tıkla otomatik kalibrasyon, kazıyıcının yüksek
                        <br />
                        hassasiyette işlemesine olanak sağlar.
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">settings_overscan</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        90 derece dikey frezeleme yöntemi, ön dişlerin
                        <br />
                        tasarımını daha estetik hale getirebilir.
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">token</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Çoklu operasyonlar için tek arayüz, kullanımı kolay
                        <br />
                        ve tek tıkla işleme
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKTypography
                        component="a"
                        href="#"
                        variant="body2"
                        color="info"
                        fontWeight="regular"
                        sx={{
                          width: "max-content",
                          display: "flex",
                          alignItems: "center",

                          "& .material-icons-round": {
                            fontSize: "1.125rem",
                            transform: "translateX(3px)",
                            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                          },

                          "&:hover .material-icons-round, &:focus .material-icons-round": {
                            transform: "translateX(6px)",
                          },
                        }}
                      >
                        İncele
                        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                      </MKTypography>
                    </MKBox>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
          <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
            <Container>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                  <Stack>
                    <MKTypography variant="h3" my={1}>
                      Zirdent
                    </MKTypography>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">mediation</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Tek tıkla otomatik kalibrasyon, kazıyıcının yüksek
                        <br />
                        hassasiyette işlemesine olanak sağlar.
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">settings_overscan</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        90 derece dikey frezeleme yöntemi, ön dişlerin
                        <br />
                        tasarımını daha estetik hale getirebilir.
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">token</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Çoklu operasyonlar için tek arayüz, kullanımı kolay
                        <br />
                        ve tek tıkla işleme
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKTypography
                        component="a"
                        href="#"
                        variant="body2"
                        color="info"
                        fontWeight="regular"
                        sx={{
                          width: "max-content",
                          display: "flex",
                          alignItems: "center",

                          "& .material-icons-round": {
                            fontSize: "1.125rem",
                            transform: "translateX(3px)",
                            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                          },

                          "&:hover .material-icons-round, &:focus .material-icons-round": {
                            transform: "translateX(6px)",
                          },
                        }}
                      >
                        İncele
                        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                      </MKTypography>
                    </MKBox>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={5}>
                  {/* <div>
                    <div style={{ marginBottom: "20px" }}>
                      <img src={zirdent} loading="lazy" />
                    </div>
                  </div> */}
                </Grid>
              </Grid>
            </Container>
          </MKBox>
          <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
            <Container>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={5}>
                  <div>
                    <div style={{ marginBottom: "20px" }}>
                      <img src={zirconmasters} loading="lazy" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                  <Stack>
                    <MKTypography variant="h3" my={1}>
                      ZirconMaster S
                    </MKTypography>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">mediation</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Zno2’nin her türlü diş hekimi için tasarlanmıştır
                        {/* <br />
                        hassasiyette işlemesine olanak sağlar. */}
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">settings_overscan</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        10 işletim programı
                        {/* <br />
                        tasarımını daha estetik hale getirebilir. */}
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">token</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Yüksek kaliteli mosi2 ısıtma elemanları
                        {/* <br />
                        ve tek tıkla işleme */}
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKTypography
                        component="a"
                        href="#"
                        variant="body2"
                        color="info"
                        fontWeight="regular"
                        sx={{
                          width: "max-content",
                          display: "flex",
                          alignItems: "center",

                          "& .material-icons-round": {
                            fontSize: "1.125rem",
                            transform: "translateX(3px)",
                            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                          },

                          "&:hover .material-icons-round, &:focus .material-icons-round": {
                            transform: "translateX(6px)",
                          },
                        }}
                      >
                        İncele
                        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                      </MKTypography>
                    </MKBox>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
          <MKBox component="section" py={{ xs: 3, md: 2, lg: 0 }}>
            <Container>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                  <Stack>
                    <MKTypography variant="h3" my={1}>
                      CeramicMaster E20
                    </MKTypography>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">mediation</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Mevcut tüm dental metal seramik türleri için tasarlanmıştır.
                        {/* <br />
                        hassasiyette işlemesine olanak sağlar. */}
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">settings_overscan</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Geliştirilmiş kendi kendine teşhis ve otomatik kalibrasyon sistemi
                        {/* <br />
                        tasarımını daha estetik hale getirebilir. */}
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">token</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        201 işletim programları
                        {/* <br />
                        ve tek tıkla işleme */}
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKTypography
                        component="a"
                        href="#"
                        variant="body2"
                        color="info"
                        fontWeight="regular"
                        sx={{
                          width: "max-content",
                          display: "flex",
                          alignItems: "center",

                          "& .material-icons-round": {
                            fontSize: "1.125rem",
                            transform: "translateX(3px)",
                            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                          },

                          "&:hover .material-icons-round, &:focus .material-icons-round": {
                            transform: "translateX(6px)",
                          },
                        }}
                      >
                        İncele
                        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                      </MKTypography>
                    </MKBox>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={5}>
                  <div>
                    <div style={{ marginBottom: "20px" }}>
                      <img src={ceramicmastere20} loading="lazy" />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Card>
        {/* <Card
          sx={{
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            backgroundColor: "#F8F9FF",
            height: "100%",
          }}
        >
          <MKBox
            minHeight="5vh"
            width="100%"
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
            }}
          ></MKBox>
        </Card> */}{" "}
        <UrunlerCard />
        <Card
          sx={{
            p: 0,
            mt: 0,
            backgroundColor: "#F8F9FF",
            borderRadius: "0px",
            zIndex: 56456,
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            position: "relative",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* <video
              src={videoBg}
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
            
              }}
            /> */}
            <EtkinlikImages />{" "}
          </div>
        </Card>
        <Card
          sx={{
            p: 0,
            borderRadius: "30px",
            // backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          {/* <Container sx={{ mt: 6 }}>
            <Pages> </Pages>
          </Container> */}
          <Testimonials />
        </Card>
      </div>
    </>
  );
}

export default Presentation;
