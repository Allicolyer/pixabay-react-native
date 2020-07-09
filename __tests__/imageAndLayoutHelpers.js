import {
  calculateScreenOrientation,
  calculateImageThumbnailWidthandHeight,
  calculateImageDisplayDimensions,
} from "../src/utils/helpers";

//values to use for these tests
const screenSizes = {
  portraitScreen: {
    screenWidth: 400,
    screenHeight: 800,
    screenOrientation: "portrait",
  },
  landscapeScreen: {
    screenWidth: 800,
    screenHeight: 400,
    screenOrientation: "landscape",
  },
};

//screen orientation function tests
test("screen oriention helper function should return portrait", () => {
  expect(
    calculateScreenOrientation(
      screenSizes.portraitScreen.screenWidth,
      screenSizes.portraitScreen.screenHeight
    )
  ).toBe(screenSizes.portraitScreen.screenOrientation);
});

test("screen oriention helper function should return landscape", () => {
  expect(
    calculateScreenOrientation(
      screenSizes.landscapeScreen.screenWidth,
      screenSizes.landscapeScreen.screenHeight
    )
  ).toBe(screenSizes.landscapeScreen.screenOrientation);
});

//test for image thumbnail sizes in image grid
test("Image thumbnail size test on portrait screen", () => {
  const screenWidth = screenSizes.portraitScreen.screenWidth;
  const screenOrientation = screenSizes.portraitScreen.screenOrientation;
  const marginInPixels = 8;

  let imageHeightandWidth = calculateImageThumbnailWidthandHeight(
    screenWidth,
    screenOrientation,
    marginInPixels
  );
  expect(imageHeightandWidth).toBe(88);
});

test("Image thumbnail size test on landscape screen", () => {
  const screenWidth = screenSizes.landscapeScreen.screenWidth;
  const screenOrientation = screenSizes.landscapeScreen.screenOrientation;
  const marginInPixels = 8;

  let imageHeightandWidth = calculateImageThumbnailWidthandHeight(
    screenWidth,
    screenOrientation,
    marginInPixels
  );
  expect(imageHeightandWidth).toBe(90);
});

//image resizing tests
test("Image resizing for portrait screen orientation", () => {
  const inputWidth = 400;
  const inputHeight = 200;
  const imageRatio = inputWidth / inputHeight;
  //specified in helper function
  const imageResizeFactor = 0.85;
  const outputWidth =
    screenSizes.portraitScreen.screenWidth * imageResizeFactor;

  const outputHeight = (1 / imageRatio) * outputWidth;

  const imageDimensions = calculateImageDisplayDimensions(
    screenSizes.portraitScreen,
    inputWidth,
    inputHeight
  );
  expect(imageDimensions.width).toBe(outputWidth);
  expect(imageDimensions.height).toBe(outputHeight);
});

test("Image resizing for extra long image in portrait screen orientation", () => {
  const inputWidth = 400;
  const inputHeight = 1000;
  const imageRatio = inputWidth / inputHeight;
  //specified in helper function
  const imageResizeFactor = 0.6;
  const outputHeight =
    screenSizes.portraitScreen.screenHeight * imageResizeFactor;
  const outputWidth = imageRatio * outputHeight;

  const imageDimensions = calculateImageDisplayDimensions(
    screenSizes.portraitScreen,
    inputWidth,
    inputHeight
  );
  expect(imageDimensions.width).toBe(outputWidth);
  expect(imageDimensions.height).toBe(outputHeight);
});

test("Image resizing for landscape screen orientation", () => {
  const inputWidth = 400;
  const inputHeight = 600;
  const imageRatio = inputWidth / inputHeight;
  //specified in helper function
  const imageResizeFactor = 0.7;
  const outputHeight =
    screenSizes.landscapeScreen.screenHeight * imageResizeFactor;
  const outputWidth = imageRatio * outputHeight;

  const imageDimensions = calculateImageDisplayDimensions(
    screenSizes.landscapeScreen,
    inputWidth,
    inputHeight
  );

  expect(imageDimensions.width).toBe(outputWidth);
  expect(imageDimensions.height).toBe(outputHeight);
});

test("Image resizing for extra wide image on landscape screen orientation", () => {
  const inputWidth = 1500;
  const inputHeight = 600;
  const imageRatio = inputWidth / inputHeight;
  //specified in helper function
  const imageResizeFactor = 0.6;
  const outputWidth =
    screenSizes.landscapeScreen.screenWidth * imageResizeFactor;
  const outputHeight = (1 / imageRatio) * outputWidth;

  const imageDimensions = calculateImageDisplayDimensions(
    screenSizes.landscapeScreen,
    inputWidth,
    inputHeight
  );

  expect(imageDimensions.width).toBe(outputWidth);
  expect(imageDimensions.height).toBe(outputHeight);
});
