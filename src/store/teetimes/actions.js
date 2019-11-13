import axios from "axios";
import {
  FETCH_ALL_TEETIMES_PENDING,
  BASE_URL,
  FETCH_ALL_TEETIMES_SUCCESS,
  FETCH_ALL_TEETIMES_FAILED,
  FETCH_ONE_TEETIME_PENDING,
  FETCH_ONE_TEETIME_FAILED,
  FETCH_ONE_TEETIME_SUCCESS,
  ADD_TEETIME_PENDING,
  ADD_TEETIME_SUCCESS,
  ADD_TEETIME_FAILED,
  REMOVE_TEETIME_PENDING,
  REMOVE_TEETIME_SUCCESS,
  REMOVE_TEETIME_FAILED,
  UPDATE_TEETIME_PENDING,
  UPDATE_TEETIME_SUCCESS,
  UPDATE_TEETIME_FAILED
} from "./constants";

export const fetchAllTeetimes = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_TEETIMES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    console.log("data", response.data);
    dispatch({
      type: FETCH_ALL_TEETIMES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_TEETIMES_FAILED,
      payload: err
    });
  }
};

export const fetchOneTeetime = id => async dispatch => {
  dispatch({
    type: FETCH_ONE_TEETIME_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: FETCH_ONE_TEETIME_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_TEETIME_FAILED,
      payload: err
    });
  }
};

export const addTeetime = newTeetime => async dispatch => {
  dispatch({
    type: ADD_TEETIME_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newTeetime);
    dispatch({
      type: ADD_TEETIME_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_TEETIME_FAILED,
      payload: err
    });
  }
};

export const removeTeetime = id => async dispatch => {
  dispatch({
    type: REMOVE_TEETIME_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: REMOVE_TEETIME_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: REMOVE_TEETIME_FAILED,
      payload: err
    });
  }
};

export const updateTeetime = id => async dispatch => {
  console.log("updateTeetimeId", id);
  dispatch({
    type: UPDATE_TEETIME_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`);
    dispatch({
      type: UPDATE_TEETIME_SUCCESS,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: UPDATE_TEETIME_FAILED,
      payload: err
    });
  }
};
