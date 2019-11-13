import axios from "axios";
import {
  FETCH_ALL_CUSTOMERS_PENDING,
  BASE_URL,
  FETCH_ALL_CUSTOMERS_SUCCESS,
  FETCH_ALL_CUSTOMERS_FAILED,
  FETCH_ONE_CUSTOMER_PENDING,
  FETCH_ONE_CUSTOMER_FAILED,
  FETCH_ONE_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_PENDING,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILED,
  REMOVE_CUSTOMER_PENDING,
  REMOVE_CUSTOMER_SUCCESS,
  REMOVE_CUSTOMER_FAILED,
  UPDATE_CUSTOMER_PENDING,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILED
} from "./constants";

export const fetchAllCustomers = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_CUSTOMERS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: FETCH_ALL_CUSTOMERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_CUSTOMERS_FAILED,
      payload: err
    });
  }
};

export const fetchOneCustomer = id => async dispatch => {
  dispatch({
    type: FETCH_ONE_CUSTOMER_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: FETCH_ONE_CUSTOMER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_CUSTOMER_FAILED,
      payload: err
    });
  }
};

export const addCustomer = newCustomer => async dispatch => {
  dispatch({
    type: ADD_CUSTOMER_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newCustomer);
    dispatch({
      type: ADD_CUSTOMER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_CUSTOMER_FAILED,
      payload: err
    });
  }
};

export const removeCustomer = id => async dispatch => {
  dispatch({
    type: REMOVE_CUSTOMER_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: REMOVE_CUSTOMER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: REMOVE_CUSTOMER_FAILED,
      payload: err
    });
  }
};

export const updateCustomer = id => async dispatch => {
  dispatch({
    type: UPDATE_CUSTOMER_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`);
    dispatch({
      type: UPDATE_CUSTOMER_SUCCESS,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: UPDATE_CUSTOMER_FAILED,
      payload: err
    });
  }
};
