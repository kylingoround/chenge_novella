/** @jsx jsx */

import React from "react";
import { ThemeProvider, jsx, Flex, Box, Grid, Image } from "theme-ui";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { custom_novella as novella } from "./Theme";

import { ReactComponent as UILogo } from "./images/UILogo.svg";
import flatIronImg from "./images/flatiron.jpeg";
import machineImg from "./images/machine.jpeg";

// TODOS:
// [x] router
// footer
// font
// button
// language
// content
// util: tracker, scroll

const devMode = true;

// footer 142px

const ColumnWrapper = props => (
  <Box
    className="pageWrapper"
    sx={{
      minHeight: "100vh",
      width: "auto",
      margin: "auto",
      // fontWeight: 100,
      // color: "primary",
      // backgroundColor: "white",
      // backgroundColor: "salmon",
      alignItem: "center",
      justifyContent: "center",
      variant: "containers.pageColumn"

      // fontSize: 4,
    }}
  >
    <Flex
      className="flexBody"
      sx={{
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: devMode ? "yellow" : "white",
        width: "auto"
      }}
    >
      {props.children}
    </Flex>
  </Box>
);

const UIText = ({ children }) => (
  <Box
    sx={{
      marginLeft: "1rem",
      marginRight: "1rem",
      fontSize: 18
    }}
  >
    {children}
  </Box>
);

const Topnav = () => (
  <Flex sx={{ marginTop: "100px" }}>
    <Box sx={{ flex: "1 1 auto", margin: "auto" }}>
      <UILogo sx={{ variant: "images.logo" }} />
    </Box>
    <Flex sx={{ margin: "auto" }}>
      <UIText>About</UIText>
      <UIText>Products</UIText>
      <UIText>Contact</UIText>
    </Flex>
  </Flex>
);

const Intro = () => (
  <div>
    <h1>Chenge is an awesome company</h1>
    {/* <h2>
      Shuangdun Environment Technology Co., Ltd. (original Yiixng Complete
      Chemical Equipment Co., Ltd.) was restructured in 1992. It is general
      contractor enterprise of environmental device and complete chemical device
      appointed by the original Ministry of Chemical Industry. At present, the
      company mainly engages in engineering project contracting (EPC) of clean
      emission, flue gas desulfurization, sulfuric acid from flue gas, smelting
      by wet method, pressure vessel manufacturing, sewage treatment, and in
      designing, manufacturing, installing and debugging special equipment. Our
      main products including honeycombed electric mist precipitator for
      conductive FRP with proprietary intellectual property rights, new-model
      fourth generation SDD-CF wet electrical dust precipitator, complete
      sulfuric acid production device from flue gas (efficient washer,
      isothermal pre-reforming
    </h2> */}
    {/* <h2>
      Chenge is an awesome company. It sells something something something.
    </h2> */}
  </div>
);

// const PCImage = props => (
//   <Box
//     sx={{
//       height: [200, 193, 280, 280, 280],
//       width: [335, 487, 415, 475, 475],
//       backgroundImage: `url(${props.src})`,
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "auto"
//     }}
//   >
//     <Image src={props.src} sx={{ height: "100%", width: "auto" }} />
//   </Box>
// );

// const ProductCard = () => (
//   <div
//     sx={{
//       // flex: "0 50%",
//       background: "teal",
//       variant: "containers.card"
//     }}
//   >
//     <Image src={machineImg} sx={{ variant: "images.card" }} />
//     <h3>Product Title</h3>
//     <h4>Product Description</h4>
//     <button sx={{ variant: "buttons.secondary" }}>details</button>
//   </div>
// );

const ProductCardA = () => (
  <div
    sx={{
      background: "teal",
      variant: "containers.cardA"
    }}
  >
    <Image src={machineImg} sx={{ variant: "images.productCardA" }} />
    <h2>Product Title</h2>
    <p>Product Description</p>
    <button sx={{ variant: "buttons.secondary" }}>details</button>
  </div>
);

const ProductCardB = () => (
  <div
    sx={{
      background: "teal",
      variant: "containers.cardB"
    }}
  >
    <Image src={machineImg} sx={{ variant: "images.productCardB" }} />
    <h2>Product Title</h2>
    <p>Product Description</p>
    <button sx={{ variant: "buttons.secondary" }}>details</button>
  </div>
);

// TODO: replace with layoutA, layoutB, layoutC (single image)
const ProductList = () => (
  <div>
    <h2>Products</h2>
    <Grid
      columns={[1, 1, 2, 2, 2]}
      gap={[null, null, 20, 30, 30]}
      sx={{ background: "red" }}
    >
      <ProductCardA />
      <ProductCardB />
      <ProductCardA />
      <ProductCardB />
    </Grid>
  </div>
);

const FooterShadow = () => (
  <Box
    sx={{
      height: "590px",
      width: "100vw",
      background: "salmon",
      position: "absolute",
      marginLeft: "-100px",
      marginBottom: "-590px"
      // background:
      //   "linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #D9DBE0 100%)"
    }}
  />
);

const Footer = () => (
  <Box
    sx={{
      // marginBottom: "71px"
      height: "142px",
      width: "100%",
      overflow: "hidden",
      position: "relative"
    }}
  >
    <p>Copywrites and stuff</p>
    {/* <FooterShadow /> */}
  </Box>
);

// const Main = () => (
//   <ThemeProvider theme={novella}>
//     <ColumnWrapper>
//       <Topnav />
//       <Intro />
//       <ProductList />
//       <Footer />
//     </ColumnWrapper>
//   </ThemeProvider>
// );

const ContentWrapper = props => (
  <Box
    sx={{
      minHeight: "100%",
      marginBottom: "-142px"
    }}
  >
    {props.children}
  </Box>
);

const Push = () => <Box sx={{ height: "142px" }} />;

const TestingTypography = () => (
  <div>
    <h1>This is h1</h1>
    <h2>This is h2</h2>
    <h3>This is h3</h3>

    <p>This is p</p>
  </div>
);

const Main = () => (
  <ThemeProvider theme={novella}>
    <ColumnWrapper>
      <ContentWrapper>
        <Topnav />
        <Intro />
        <ProductList />
        <Push />
      </ContentWrapper>
      <Footer />
    </ColumnWrapper>
  </ThemeProvider>
);

const TestingProductPage = () => (
  <ThemeProvider theme={novella}>
    <ColumnWrapper>
      <Topnav />

      <Box>This is an example product page.</Box>
      <div>Product Title</div>
      <div>Product Description</div>
      <div>Product Spec</div>
      <div>Product Pictures</div>
      {/* <Intro /> */}
      {/* <ProductList /> */}
      <Footer />
    </ColumnWrapper>
  </ThemeProvider>
);

const App = () => (
  <Router>
    <Route exact path="/" component={Main} />
    <Route path="/product" component={TestingProductPage} />
  </Router>
);

export default App;
