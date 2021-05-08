import { typesConstants } from "../constants";

export const changeBackgroundColor = () => {
  return {
    type: typesConstants.CHANGE_BACKGROUND_COLOR,
  };
};
export const increaseFontSize = (currentFontSize: any) => {
  return {
    type: typesConstants.INCREASE_FONT_SIZE,
    currentFontSize,
  };
};
export const decreaseFontSize = (currentFontSize: number) => {
  return {
    type: typesConstants.DECREASE_FONT_SIZE,
    currentFontSize,
  };
};
