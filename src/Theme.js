const breakpointVals = [375, 735, 1070, 1280, 1440];
const gap = 30;

export const custom_novella = {
  styles: {
    root: {
      // "@import":
      //   "url(https://fonts.googleapis.com/css2?family=Questrial&display=swap)",
      "@import":
        'url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600&display=swap")',
      "@import":
        "url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap)",
      "@import":
        "url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap)",

      // '@import':'url()',

      backgroundColor: "#FAFAFA",
      fontFamily: "body",

      // fontWeight: 300,
      // page title: 32, 38, 38, 52, 52
      // product headline: 22, 24, 21, 24, 24
      // body text: 16, 16, 16, 16, 16
      // menu option

      // headline: h1
      // Section Title
      // body text
      h1: { fontSize: [32, 38, 38, 52, 52], fontWeight: 700 },
      h2: { fontSize: [22, 24, 21, 24, 24], fontWeight: 700 },
      h3: { fontSize: 32, fontWeight: 400 },
      // Topnav
      h5: { fontSize: 23, fontWeight: 700 },
      p: { fontSize: 16, fontWeight: 400 }
    }
  },

  fonts: {
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    body: "Noto Sans, Roboto, IBM Plex Sans, Baskerville",
    heading: "Georgia, serif"
  },
  fontWeights: {
    body: 300,
    heading: 300
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  breakpoints: ["375px", "735px", "1070px", "1280px", "1440px"],
  containers: {
    pageColumn: {
      maxWidth: [335, 487, 850, 980, 1140]
      // maxWidth: [335, 487, 830, 950, 1160]
      // width: [335, 487, 850, 980, 1140]
    },
    cardA: {
      width: [335, 487, 415, 475, 653],
      minWidth: [335, 487, 415, 475, 653]
    },
    cardB: {
      width: [335, 487, 415, 475, 457]
    }
  },
  images: {
    card: {
      // maxHeight: [280, 280, 280, 193, 200],
      height: [200, 193, 280, 280, 280],
      width: [335, 487, 415, 475, 475]
    },
    productCardA: {
      objectFit: "cover",
      height: [200, 193, 280, 280, 280],
      width: [335, 487, 415, 475, 653]
      // width: [10, 75, 150, 300, 600]
    },
    productCardB: {
      objectFit: "cover",
      height: [200, 193, 280, 280, 280],
      width: [335, 487, 415, 475, 457]
    },
    logo: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  }
};
