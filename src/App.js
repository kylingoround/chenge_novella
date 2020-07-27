/** @jsx jsx */

import React, { lazy } from "react";
import { ThemeProvider, jsx, Flex, Box, Grid, Image } from "theme-ui";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import { custom_novella as novella } from "./Theme";

import { ReactComponent as UILogo } from "./images/UILogo.svg";

// import { importMDX } from "mdx.macro";
import Markdown from "markdown-to-jsx";

import MDXDocument from "./content/Test.mdx";

// import flatIronImg from "./images/flatiron.jpeg";
// import machineImg from "./images/machine.jpeg";
import machineImg2 from "./images/machine2.jpg";
import machineImg3 from "./images/machine3.jpg";

const TestContent = lazy(() => importMDX("./content/Test.mdx"));

// TODOS:
// [x] router
// footer
// font
// button
// language
// content
// util: tracker, scroll

const devMode = true;

const context = {
  devMode: true,
  language: "EN",
  colorMode: "bright"
};

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
        // backgroundColor: devMode ? "yellow" : "white",
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
      <Link to="/">
        <UILogo sx={{ variant: "images.logo" }} />
      </Link>
    </Box>
    <Flex sx={{ margin: "auto" }}>
      {/* <UIText>About</UIText>
      <UIText>Products</UIText>
      <UIText>Contact</UIText> */}
      {/* <UIText>产品介绍</UIText> */}
      <UIText>
        <Link to="/product">产品介绍</Link>
      </UIText>

      <UIText>关于我们</UIText>
      <UIText>联系方式</UIText>
    </Flex>
  </Flex>
);

const Intro = () => (
  <div>
    <div sx={{ paddingTop: 120 }} />

    {/* <h1>Chenge Co. is an Industry Leader of BoLiGang Technology.</h1> */}
    <h1>晨舸环境科技有限公司</h1>
    <h3>20年经验中国环保科技领先企业！</h3>

    {/* <h2>
      Chenge is an awesome company. It sells something something something.
    </h2> */}
    <div sx={{ paddingTop: 120 }} />
  </div>
);

const About = () => (
  <Box>
    <div sx={{ paddingTop: 80 }} />

    {/* <h2>About Us</h2> */}
    <h2>关于我们</h2>
    {/* <p>
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
    </p> */}
    <p>
      公司地处江苏省南端、沪、宁、杭三角中心、“东滨太湖，南临天目山的宜兴市”——宜兴环保科技工业园，公司占地400余亩，注册资金1亿元，生产厂房面积168000余平方米。
      公司拥有一批长期工作在电力、化工、有色等行业的知名专家，已组建成产品开发，工程设计、工程总承包、试车投产等专业技术队伍。成功开发了51项国家专利技术，其中发明专利13项。现有中、高级职称技术人员115人，其中教授级高工20人。并与国内十几家科研、设计院所建立了良好的技术协作关系，这为保证公司产品技术位于前列和工程设计提供了可靠的技术支持。
      公司拥有从事工程设计、研发的专业团队，具有化工工程和环境工程设计及工程施工总承包资质，并拥有压力容器制造、压力管道设计和安装资质。公司生产装备先进，加工能力强，拥有国内的湿式电除尘装置工程技术研究中心、高效洗涤器检测平台及原材料测试中心。同时拥有微机控制的玻璃钢自动化生产线23条、大型数控加工中心5套、轻重钢生产线6条。这些完善的硬件设施，为公司不断开发新型、耐用、技术含量高、质量稳定的产品提供了可靠的装备条件。
      公司在国内同行业中一枝独秀，市场占有率高，我公司生产的SDD-CF立式管式湿式电除尘器在国内实现了火电厂百万机组烟尘排放小于5mg/Nm3的目标，达到超低排放要求。已成功应用于国电泰州电厂、国电谏壁电厂、中电国际常熟电厂、大唐南京电厂、中电国际山西神头电厂、华润曹妃甸电厂、国电兰州范坪电厂、江阴苏龙电厂、国电宿迁电厂、河北龙山电厂、常州中天钢铁等企业。在燃煤火力发电厂烟气超低排放治理项目中，凭借自身核心专利技术，目前已获得了约5000万千瓦总装机容量的湿式电除尘装置业绩，单台湿式电除尘器处理气量达到4500000m3/h。
      我公司在有色、冶金、化工等行业中承揽的项目成绩斐然，已成功应用于金川集团、江西铜业、云南铜业、铜陵有色、紫金铜业、云南锡业、五矿集团、西部矿业、云南驰宏锌锗、新疆有色、河南豫光金铅、汉中锌业、上海赛科石化、中石油、中石化、宝钢集团、太钢集团、赞比亚谦比希铜冶炼厂、印度Dariba铅冶炼厂、菲律宾联合熔炼、俄罗斯铜厂等知名企业，经过几十年的发展，现已为国内外几百家企业成功配套了湿式电除雾（尘）器1000余台套，净化装置百余套，硫酸总承包项目60余套（交钥匙工程），得到用户普遍好评。
    </p>
    <div sx={{ paddingTop: 120 }} />
  </Box>
);

const ProductCardA = () => (
  <div
    sx={{
      // background: "teal",
      variant: "containers.cardA"
      // paddingRight: "2rem"
    }}
  >
    <Image src={machineImg2} sx={{ variant: "images.productCardA" }} />
    <Box sx={{ paddingLeft: "0.5rem" }}>
      {/* <h2>SDD-CF Wet Electrical Dust Precipitator</h2> */}
      <h2>SDD-CF湿式电除尘器产品介绍</h2>
      {/* <p>
        The product consists of anodic dust collection system, cathodic
        saturated discharge system, uppwer and lower air chamber, spray device,
        power supply and control systems.
      </p> */}
      <p>
        SDD-CF湿式电除尘器是我公司在上世纪90年初经两次引进平板式和方管式日本技术包的基础上，通过消化吸收首家成功开发了具有自主知识产权的第四代高速高效蜂窝结构型湿式电除尘器，应用于国电泰州电厂4x1000MW燃煤机组，单台处理气量4500000m3/h，烟气流速达3.75m/s，出口尘含量小于3mg/Nm3并通过了环保部门验收且获超低排放电价补贴.
      </p>
      <button sx={{ variant: "buttons.secondary" }}>details</button>
    </Box>
  </div>
);

const ProductCardB = () => (
  <div
    sx={{
      // background: "teal",
      variant: "containers.cardB"
      // paddingRight: "2rem"
    }}
  >
    <Image src={machineImg3} sx={{ variant: "images.productCardB" }} />
    <Box sx={{ paddingLeft: "0.5rem" }}>
      {/* <h2>Flue Gas Desulfurization Technology</h2> */}
      <h2>烟气脱硫技术</h2>
      {/* <p>
        Low systemic resistance, low energy consumption, high efficiency. No
        blocking, little maintenance. Well adapted to change of gas volume and
        smoke volume. Small floor area, low
      </p> */}
      <p>
        双盾H型湍冲塔双循环脱硫技术是一种新型高效脱硫技术，气、液两相在特定的区域充分接触，达到动量平衡状态，液体在此区域内形成稳定泡沫区，在泡沫区内完成气、液、固三相的高效传质，既能有效地清除粉尘，又能高效地脱除气态污染物，单级脱硫效率可达到99.5%以上...
      </p>
      <button sx={{ variant: "buttons.secondary" }}>details</button>
    </Box>
  </div>
);

// TODO: replace with layoutA, layoutB, layoutC (single image)
const ProductList = () => (
  <div>
    {/* <h2>Products</h2> */}
    <h2>产品介绍</h2>
    <Flex
      sx={{
        flexWrap: "wrap"
      }}
    >
      <ProductCardA />
      <div
        sx={{
          paddingRight: [null, null, 20, 30, 30]
        }}
      />
      <ProductCardB />
      <ProductCardB />
      <div
        sx={{
          paddingRight: [null, null, 20, 30, 30]
        }}
      />
      <ProductCardA />
    </Flex>
    {/* <Grid
      columns={[1, 1, 2, 2, 2]}
      gap={[null, null, 20, 30, 30]}
      // sx={{ background: "red" }}
    >
      <ProductCardA />
      <ProductCardB />
      <ProductCardA />
      <ProductCardB />
    </Grid> */}
  </div>
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
    <p>CN legal stuff</p>
  </Box>
);

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
        {/* <Markdown>{MDXDocument}</Markdown> */}
        <Intro />
        <ProductList />
        <About />
        <Push />
      </ContentWrapper>
      <Footer />
    </ColumnWrapper>
  </ThemeProvider>
);

const ProductDummyData = {
  productName: "SDD-CF Wet Electrical Dust Precipitator",
  productThumbnail: "",
  productDescription: ""
};

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
