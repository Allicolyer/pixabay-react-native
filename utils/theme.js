const colors = {
  primary: "#191B26",
  primaryTint: "#474951",
  primaryShade: "#14161e",
  white: "#fff",
};

const sizes = {
  // Radius
  radii: [4, 6, 8],
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
  ...sizes,
};
