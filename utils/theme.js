const shadows = {
  small: "0px 2px 4px rgba(38, 38, 38, 0.15)",
  large: "0px 4px 8px rgba(38, 38, 38, 0.15);",
};

const zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

const colors = {
  primary: "#191B26",
  primaryTint: "#474951",
  primaryShade: "#14161e",
  white: "#fff",
};

const sizes = {
  ///// Sizes
  breakpoints: ["40em", "52em", "64em"],
  breakpointspx: [480, 624, 768],
  // Radius
  radii: [4, 6, 8],
  // [C] Nav
  navHeight: 64,
  // Spaces
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
  ],
  // Font
  fontSizes: [12, 14, 16, 20, 28, 32, 48, 64],
  fontWeights: [300, 400, 600, 700],
  fontStack: "sans-serif-thin, sans-serif-light, sans-serif",
};

export const theme = {
  colors,
  shadows,
  ...sizes,
  ...zIndex,
};
