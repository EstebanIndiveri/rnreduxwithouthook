import {typesConstants} from '../constants';

interface fontInterface {
  fontSize: number;
}

const initalState: fontInterface = {
  fontSize: 20,
};

export const fontSizeReducer = (
  state: fontInterface = initalState,
  action: any,
): fontInterface => {
  switch (action.type) {
    case typesConstants.INCREASE_FONT_SIZE:
      return {
        ...state,
        fontSize: action.currentFontSize + 1,
      };
    case typesConstants.DECREASE_FONT_SIZE:
      return {
        ...state,
        fontSize: state.fontSize - 1,
      };
    default:
      return state;
  }
};
