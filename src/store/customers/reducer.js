import {
  FETCH_ALL_CUSTOMERS_PENDING,
  ADD_CUSTOMER_PENDING,
  REMOVE_CUSTOMER_PENDING,
  FETCH_ONE_CUSTOMER_PENDING,
  FETCH_ALL_CUSTOMERS_FAILED,
  FETCH_ONE_CUSTOMER_FAILED,
  ADD_CUSTOMER_FAILED,
  REMOVE_CUSTOMER_FAILED,
  FETCH_ALL_CUSTOMERS_SUCCESS,
  ADD_CUSTOMER_SUCCESS,
  REMOVE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_PENDING,
  UPDATE_CUSTOMER_FAILED
} from "./constants";

const initialState = {
  all: [],
  err: {},
  updateCustomerId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CUSTOMERS_PENDING:
    case ADD_CUSTOMER_PENDING:
    case REMOVE_CUSTOMER_PENDING:
    case FETCH_ONE_CUSTOMER_PENDING:
    case UPDATE_CUSTOMER_PENDING:
      return state;

    case FETCH_ALL_CUSTOMERS_FAILED:
    case FETCH_ONE_CUSTOMER_FAILED:
    case ADD_CUSTOMER_FAILED:
    case REMOVE_CUSTOMER_FAILED:
    case UPDATE_CUSTOMER_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case FETCH_ALL_CUSTOMERS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case REMOVE_CUSTOMER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(customer => customer.id !== action.payload.id)
      };

    case UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        updateCustomerId: action.payload
      };

    default:
      return state;
  }
};
