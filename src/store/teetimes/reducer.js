import {
  FETCH_ALL_TEETIMES_PENDING,
  ADD_TEETIME_PENDING,
  REMOVE_TEETIME_PENDING,
  FETCH_ONE_TEETIME_PENDING,
  FETCH_ALL_TEETIMES_FAILED,
  FETCH_ONE_TEETIME_FAILED,
  ADD_TEETIME_FAILED,
  REMOVE_TEETIME_FAILED,
  FETCH_ALL_TEETIMES_SUCCESS,
  ADD_TEETIME_SUCCESS,
  REMOVE_TEETIME_SUCCESS,
  UPDATE_TEETIME_SUCCESS,
  UPDATE_TEETIME_PENDING,
  UPDATE_TEETIME_FAILED
} from "./constants";

const initialState = {
  all: [],
  err: {},
  editTeeTimeId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_TEETIMES_PENDING:
    case ADD_TEETIME_PENDING:
    case REMOVE_TEETIME_PENDING:
    case FETCH_ONE_TEETIME_PENDING:
    case UPDATE_TEETIME_PENDING:
      return state;

    case FETCH_ALL_TEETIMES_FAILED:
    case FETCH_ONE_TEETIME_FAILED:
    case ADD_TEETIME_FAILED:
    case REMOVE_TEETIME_FAILED:
    case UPDATE_TEETIME_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case FETCH_ALL_TEETIMES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_TEETIME_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case REMOVE_TEETIME_SUCCESS:
      return {
        ...state,
        all: state.all.filter(teetime => teetime.id !== action.payload.id)
      };

    case UPDATE_TEETIME_SUCCESS:
      return {
        ...state,
        editTeeTimeId: action.payload
      };

    default:
      return state;
  }
};
