import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
  loading: false,
  get: []
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.JOIN_TEAM_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.JOIN_TEAM_SUCCESS:
      return {
        ...state,
        get: action.payload,
        loading: false
      };
    case actionTypes.JOIN_TEAM_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default store;
