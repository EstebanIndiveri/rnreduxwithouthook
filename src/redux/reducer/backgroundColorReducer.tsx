import { typesConstants } from "../constants";

const initalState = {
  backgroundColor: '#f7e5ed',
};

export const backgroundColorReducer = (state:any = initalState, action: any) => {
  switch (action.type) {
    case typesConstants.CHANGE_BACKGROUND_COLOR:
      if (state.backgroundColor === '#f7e5ed') {
        return {backgroundColor: 'green'};
      } else {
        return {backgroundColor: '#f7e5ed'};
      }
    default:
      return state;
  }
};
