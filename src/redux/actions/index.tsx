import AsyncStorage from "@react-native-async-storage/async-storage";
import { typesConstants } from "../constants";

export const changeBackgroundColor = () => {
  return {
    type: typesConstants.CHANGE_BACKGROUND_COLOR,
  };
};
export const increaseFontSize = (currentFontSize: any) => {
  AsyncStorage.getItem('persist:root').then((data)=>{
    console.log(data);
  });
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
