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
import StarBorder from "@mui/icons-material/StarBorder";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Products from "products/ProductDatas/products";
import { Link } from "react-router-dom";
import ExampleCard from "pages/Presentation/components/ExampleCard";
function CategoryMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [open, setOpen] = useState(true);
  const [isOpenCadCam] = useState(true);
  const [isOpenDentalFirin] = useState(true);
  const [listingProduct, setListingProduct] = useState([]);

  const cadCam = (index) => {
    setSelectedIndex(index);
    // setIsOpenCadCam(!isOpenCadCam);
  };
  const dental = (index) => {
    setSelectedIndex(index);
    // setIsOpenDentalFirin(!isOpenDentalFirin);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    console.log(selectedIndex);
    if (selectedIndex === 0) {
      console.log(Products[0].product);
      setListingProduct(Products[0].product);
    } else if (selectedIndex === 1) {
      setListingProduct(Products[1].product);
    } else if (selectedIndex === 11) {
      setListingProduct(Products[1].product.filter((item) => item.code === 1));
    } else if (selectedIndex === 12) {
      setListingProduct(Products[1].product.filter((item) => item.code === 2));
    } else if (selectedIndex === 13) {
      setListingProduct(Products[1].product.filter((item) => item.code === 3));
    } else if (selectedIndex === 2) {
      setListingProduct(Products[2].product);
    } else if (selectedIndex === 21) {
      setListingProduct(Products[2].product.filter((item) => item.code === 1));
    } else if (selectedIndex === 22) {
      setListingProduct(Products[2].product.filter((item) => item.code === 2));
    } else if (selectedIndex === 23) {
      setListingProduct(Products[2].product.filter((item) => item.code === 3));
    } else if (selectedIndex === 24) {
      setListingProduct(Products[2].product.filter((item) => item.code === 4));
    } else if (selectedIndex === 3) {
      setListingProduct(Products[3].product);
    } else if (selectedIndex === 4) {
      setListingProduct(Products[4].product);
    } else if (selectedIndex === 5) {
      setListingProduct(Products[5].product);
    } else if (selectedIndex === 6) {
      setListingProduct(Products[6].product);
    } else if (selectedIndex === 7) {
      setListingProduct(Products[7].product);
    } else {
      setListingProduct([]);
    }
  }, [selectedIndex]);
  console.log(listingProduct);

  const renderData = listingProduct.map((section, index) => (
    <Grid item xs={12} lg={4} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={index}>
      <Link to={"/urun-detay/:" + section.id}>
        <ExampleCard image={section.img[0]} name={section.model} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid container spacing={10}>
            <Grid
              className="d-flex justify-content-center align-items-center"
              item
              xs={12}
              lg={5}
              sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}
            >
              <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                <List
                  sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
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
                    onClick={() => handleListItemClick(0)}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Ağız İçi Tarayıcılar" />
                  </ListItemButton>

                  <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={() => cadCam(1)}
                    // onClick={(event) => cadCam(event, 1)}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="CAD/CAM Sistemleri" />
                    {isOpenCadCam ? <ExpandMore /> : <ExpandLess />}
                  </ListItemButton>
                  <Collapse in={isOpenCadCam} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === 11}
                        onClick={() => handleListItemClick(11)}
                      >
                        <ListItemIcon>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="3D Printerlar" />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === 12}
                        onClick={() => handleListItemClick(12)}
                      >
                        <ListItemIcon>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Kazıyıcılar" />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === 13}
                        onClick={() => handleListItemClick(13)}
                      >
                        <ListItemIcon>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Model Tarayıcılar" />
                      </ListItemButton>
                    </List>
                  </Collapse>

                  <ListItemButton selected={selectedIndex === 2} onClick={() => dental(2)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Dental Fırınlar" />
                    {isOpenDentalFirin ? <ExpandMore /> : <ExpandLess />}
                  </ListItemButton>
                  <Collapse in={isOpenDentalFirin} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === 21}
                        onClick={() => handleListItemClick(21)}
                      >
                        <ListItemIcon>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ceramic Processing - Porselen Fırınları" />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === 22}
                        onClick={() => handleListItemClick(22)}
                      >
                        <ListItemIcon>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Döküm Fırınları" />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === 23}
                        onClick={() => handleListItemClick(23)}
                      >
                        <ListItemIcon>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Press Fırınları" />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === 23}
                        onClick={() => handleListItemClick(24)}
                      >
                        <ListItemIcon>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Zirkon Sinterleme Fırınları" />
                      </ListItemButton>
                    </List>
                  </Collapse>

                  <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={() => handleListItemClick(3)}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Diş Üniteleri" />
                  </ListItemButton>

                  <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={() => handleListItemClick(4)}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Görüntülenme Sistemleri" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={() => handleListItemClick(5)}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Klinik Dolapları" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 6}
                    onClick={() => handleListItemClick(6)}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Laboratuvar Ekipmanları" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 7}
                    onClick={() => handleListItemClick(7)}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Teknisyen Masaları" />
                  </ListItemButton>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Container sx={{ mt: { xs: 8, lg: 12 } }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={12}>
                    <Grid container spacing={4}>
                      {renderData}
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
