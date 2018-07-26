import { ADD_DATA } from "../actions";

const initialState = {
  data: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: state.data
      };

    default:
      return state;
  }
};

export default reducer;
