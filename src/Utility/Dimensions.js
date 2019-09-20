import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

const designSizeWidth = 360;
const designSizeHeight = 740;
const cacheMap = new Map();
const { width: deviceScreenWidth, height: deviceHeight } = Dimensions.get('window');
const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
  );
};
const deviceScreenHeight = isIphoneX()
  ? deviceHeight * 0.9
  : Platform.OS === 'android'
  ? deviceHeight - StatusBar.currentHeight
  : deviceHeight;

export const getWidth = function getWidth(imgWidth: number) {
  if (cacheMap.has(`w${imgWidth}`)) {
    return cacheMap.get(`w${imgWidth}`);
  }
  const requiredWidth = PixelRatio.roundToNearestPixel(
    (imgWidth / designSizeWidth) * deviceScreenWidth
  );
  cacheMap.set(`w${imgWidth}`, requiredWidth);
  return requiredWidth;
};
export const getHeight = function getHeight(imgHeight: number): number {
  if (cacheMap.has(`h${imgHeight}`)) {
    return cacheMap.get(`h${imgHeight}`);
  }
  const requiredHeight = PixelRatio.roundToNearestPixel(
    (imgHeight / designSizeHeight) * deviceScreenHeight
  );
  cacheMap.set(`h${imgHeight}`, requiredHeight);
  return requiredHeight;
};
