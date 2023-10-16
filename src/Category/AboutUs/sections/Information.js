// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";
import { useEffect, useRef, useState } from "react";
import { Box, Pagination } from "@mui/material";
import Products from "products/ProductDatas/products";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import "./category.css";
function CategoryMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [open, setOpen] = useState(true);
  const [isOpenCadCam] = useState(true);
  const [isOpenDentalFirin] = useState(true);
  const [listingProduct, setListingProduct] = useState([]);
  const navigate = useNavigate();
  const myRef = useRef(null);
  // const values = useParams();
  const location = useLocation();
  const [page, setPage] = useState(1);
  // const navigate = useNavigate();

  const cadCam = (index, path) => {
    navigate(path);
    setSelectedIndex(index);
    // setIsOpenCadCam(!isOpenCadCam);
  };
  const dental = (index, path) => {
    navigate(path);

    setSelectedIndex(index);
    // setIsOpenDentalFirin(!isOpenDentalFirin);
  };

  const handleListItemClick = (index, path) => {
    navigate(path);
    setSelectedIndex(index);
  };

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    const currentURL = location.pathname;
    const pathArray = currentURL.split("/");
    console.log(pathArray[3]);
    if (pathArray[2] === "agiz-ici-tarayicilar") {
      const result = Products[0].product;
      setListingProduct(result);
    } else if (pathArray[3] === "3d-printer") {
      const result = Products[1].product.filter((item) => item.code === 1);
      setListingProduct(result);
    } else if (pathArray[3] === "kaziyicilar") {
      const result = Products[1].product.filter((item) => item.code === 2);
      setListingProduct(result);
    } else if (pathArray[3] === "model-tarayicilar") {
      const result = Products[1].product.filter((item) => item.code === 3);
      setListingProduct(result);
    } else if (pathArray[2] === "cad-cam-sistemleri") {
      const result = Products[1].product;
      setListingProduct(result);
    } else if (pathArray[3] === "porselen-firinlar") {
      const result = Products[2].product.filter((item) => item.code === 1);
      setListingProduct(result);
    } else if (pathArray[3] === "dokum-firinlar") {
      const result = Products[2].product.filter((item) => item.code === 2);
      setListingProduct(result);
    } else if (pathArray[3] === "press-firinlar") {
      const result = Products[2].product.filter((item) => item.code === 3);
      setListingProduct(result);
    } else if (pathArray[3] === "zirkon-sinterleme-firinlari") {
      const result = Products[2].product.filter((item) => item.code === 4);
      setListingProduct(result);
    } else if (pathArray[2] === "dental-firinlar") {
      const result = Products[2].product;
      setListingProduct(result);
    } else if (pathArray[2] === "dis-uniteleri") {
      const result = Products[3].product;
      setListingProduct(result);
    } else if (pathArray[2] === "goruntuleme-sistemleri") {
      const result = Products[4].product;
      setListingProduct(result);
    } else if (pathArray[2] === "klinik-dolaplari") {
      const result = Products[5].product;
      setListingProduct(result);
    } else if (pathArray[2] === "labaratuvar-ekipmanlari") {
      const result = Products[6].product;
      setListingProduct(result);
    } else if (pathArray[2] === "teknisyen-masalari") {
      const result = Products[7].product;
      setListingProduct(result);
    } else {
      setListingProduct([]);
    }
  }, [selectedIndex]);
  console.log(listingProduct);
  const renderData = listingProduct.map((section, index) => (
    <Grid item xs={12} lg={4} key={Math.random(index) * 10000}>
      <Link to={"/urun-detay/:" + section.id}>
        <div className="product-card">
          <ExampleCard
            image={section.img[0]}
            name={section.model}
            // display="grid"
            // minHeight="auto"
          />{" "}
        </div>
      </Link>
    </Grid>
  ));
  const handleChangePage = (event, value) => {
    console.log(value);
    setPage(value);
  };
  return (
    <MKBox component="section" py={12}>
      <div ref={myRef} />

      <Container re>
        <Grid container spacing={3} alignItems="center">
          <Grid container spacing={10}>
            <Grid
              className="d-flex justify-content-center align-items-center"
              item
              xs={12}
              lg={3}
              sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}
            >
              <MKBox position="sticky" top="100px">
                <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                  <List
                    sx={{ width: "100%", bgcolor: "background.paper" }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        Kategoriler
                      </ListSubheader>
                    }
                  >
                    <ListItemButton
                      selected={selectedIndex === 0}
                      onClick={() => handleListItemClick(0, "/urunler/agiz-ici-tarayicilar")}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText>
                        <p
                          style={{
                            fontSize: "18px",
                            fontFamily: "Arial, sans-serif",
                            color: "007bff",
                          }}
                        >
                          Ağız İçi Tarayıcılar
                        </p>
                      </ListItemText>
                    </ListItemButton>

                    <ListItemButton
                      selected={selectedIndex === 1}
                      onClick={() => cadCam(1, "/urunler/cad-cam-sistemleri")}
                      // onClick={(event) => cadCam(event, 1)}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText>
                        <p
                          style={{
                            fontSize: "18px",
                            fontFamily: "Arial, sans-serif",
                            color: "007bff",
                          }}
                        >
                          CAD/CAM Sistemleri
                        </p>
                      </ListItemText>
                      {isOpenCadCam ? <ExpandMore /> : <ExpandLess />}
                    </ListItemButton>
                    <Collapse in={isOpenCadCam} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          selected={selectedIndex === 11}
                          onClick={() =>
                            handleListItemClick(11, "/urunler/cad-cam-sistemleri/3d-printer")
                          }
                        >
                          <ListItemIcon>
                            <SendIcon />
                          </ListItemIcon>
                          <ListItemText>
                            <p
                              style={{
                                fontSize: "15px",
                                fontFamily: "Arial, sans-serif",
                                color: "007bff",
                              }}
                            >
                              3D Printerlar
                            </p>
                          </ListItemText>
                        </ListItemButton>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          selected={selectedIndex === 12}
                          onClick={() =>
                            handleListItemClick(12, "/urunler/cad-cam-sistemleri/kaziyicilar")
                          }
                        >
                          <ListItemIcon>
                            <SendIcon />
                          </ListItemIcon>
                          <ListItemText>
                            <p
                              style={{
                                fontSize: "15px",
                                fontFamily: "Arial, sans-serif",
                                color: "007bff",
                              }}
                            >
                              Kazıyıcılar
                            </p>
                          </ListItemText>
                        </ListItemButton>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          selected={selectedIndex === 13}
                          onClick={() =>
                            handleListItemClick(13, "/urunler/cad-cam-sistemleri/model-tarayicilar")
                          }
                        >
                          <ListItemIcon>
                            <SendIcon />
                          </ListItemIcon>
                          <ListItemText>
                            <p
                              style={{
                                fontSize: "15px",
                                fontFamily: "Arial, sans-serif",
                                color: "007bff",
                              }}
                            >
                              Model Tarayıcılar
                            </p>
                          </ListItemText>
                        </ListItemButton>
                      </List>
                    </Collapse>

                    <ListItemButton
                      selected={selectedIndex === 2}
                      onClick={() => dental(2, "/urunler/dental-firinlar")}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText>
                        <p
                          style={{
                            fontSize: "18px",
                            fontFamily: "Arial, sans-serif",
                            color: "007bff",
                          }}
                        >
                          Dental Fırınlar
                        </p>
                      </ListItemText>
                      {isOpenDentalFirin ? <ExpandMore /> : <ExpandLess />}
                    </ListItemButton>
                    <Collapse in={isOpenDentalFirin} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          selected={selectedIndex === 21}
                          onClick={() =>
                            handleListItemClick(21, "/urunler/dental-firinlar/porselen-firinlar")
                          }
                        >
                          <ListItemIcon>
                            <SendIcon />
                          </ListItemIcon>
                          <ListItemText>
                            <p
                              style={{
                                fontSize: "15px",
                                fontFamily: "Arial, sans-serif",
                                color: "007bff",
                              }}
                            >
                              Ceramic Processing - Porselen Fırınları
                            </p>
                          </ListItemText>
                        </ListItemButton>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          selected={selectedIndex === 22}
                          onClick={() =>
                            handleListItemClick(22, "/urunler/dental-firinlar/dokum-firinlar")
                          }
                        >
                          <ListItemIcon>
                            <SendIcon />
                          </ListItemIcon>
                          <ListItemText>
                            <p
                              style={{
                                fontSize: "15px",
                                fontFamily: "Arial, sans-serif",
                                color: "007bff",
                              }}
                            >
                              Döküm Fırınları
                            </p>
                          </ListItemText>
                        </ListItemButton>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          selected={selectedIndex === 23}
                          onClick={() =>
                            handleListItemClick(23, "/urunler/dental-firinlar/press-firinlar")
                          }
                        >
                          <ListItemIcon>
                            <SendIcon />
                          </ListItemIcon>
                          <ListItemText>
                            <p
                              style={{
                                fontSize: "15px",
                                fontFamily: "Arial, sans-serif",
                                color: "007bff",
                              }}
                            >
                              Press Fırınları
                            </p>
                          </ListItemText>
                        </ListItemButton>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          selected={selectedIndex === 24}
                          onClick={() =>
                            handleListItemClick(
                              24,
                              "/urunler/dental-firinlar/zirkon-sinterleme-firinlari"
                            )
                          }
                        >
                          <ListItemIcon>
                            <SendIcon />
                          </ListItemIcon>
                          <ListItemText>
                            <p
                              style={{
                                fontSize: "15px",
                                fontFamily: "Arial, sans-serif",
                                color: "007bff",
                              }}
                            >
                              Zirkon Sinterleme Fırınları
                            </p>
                          </ListItemText>
                        </ListItemButton>
                      </List>
                    </Collapse>

                    <ListItemButton
                      selected={selectedIndex === 3}
                      onClick={() => handleListItemClick(3, "/urunler/dis-uniteleri")}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText>
                        <p
                          style={{
                            fontSize: "18px",
                            fontFamily: "Arial, sans-serif",
                            color: "007bff",
                          }}
                        >
                          Diş Üniteleri
                        </p>
                      </ListItemText>
                    </ListItemButton>

                    <ListItemButton
                      selected={selectedIndex === 4}
                      onClick={() => handleListItemClick(4, "/urunler/goruntuleme-sistemleri")}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText>
                        <p
                          style={{
                            fontSize: "18px",
                            fontFamily: "Arial, sans-serif",
                            color: "007bff",
                          }}
                        >
                          Görüntülenme Sistemleri
                        </p>
                      </ListItemText>
                    </ListItemButton>
                    <ListItemButton
                      selected={selectedIndex === 5}
                      onClick={() => handleListItemClick(5, "/urunler/klinik-dolaplari")}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText>
                        <p
                          style={{
                            fontSize: "18px",
                            fontFamily: "Arial, sans-serif",
                            color: "007bff",
                          }}
                        >
                          Klinik Dolapları
                        </p>
                      </ListItemText>
                    </ListItemButton>
                    <ListItemButton
                      selected={selectedIndex === 6}
                      onClick={() => handleListItemClick(6, "/urunler/labaratuvar-ekipmanlari")}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText>
                        <p
                          style={{
                            fontSize: "18px",
                            fontFamily: "Arial, sans-serif",
                            color: "007bff",
                          }}
                        >
                          Laboratuvar Ekipmanları
                        </p>
                      </ListItemText>
                    </ListItemButton>
                    <ListItemButton
                      selected={selectedIndex === 7}
                      onClick={() => handleListItemClick(7, "/urunler/teknisyen-masalari")}
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText>
                        <p
                          style={{
                            fontSize: "18px",
                            fontFamily: "Arial, sans-serif",
                            color: "007bff",
                          }}
                        >
                          Teknisyen Masaları
                        </p>
                      </ListItemText>
                    </ListItemButton>
                  </List>
                </Box>{" "}
              </MKBox>
            </Grid>

            <Grid item xs={12} md={6} lg={9}>
              <Container sx={{ mt: { xs: 4, lg: 8 } }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={12}>
                    <Grid container spacing={4}>
                      {renderData}
                      <div className="d-flex justify-content-end align-items-end">
                        <Pagination count={10} page={page} onChange={handleChangePage} />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CategoryMenu;
