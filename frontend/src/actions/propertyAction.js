import axios from 'axios';
import {
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  CREATE_PROPERTY_REQUEST,
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_FAIL,
  // CREATE_PROPERTY_RESET,
  PROPERTY_DELETE_REQUEST,
  PROPERTY_DELETE_SUCCESS,
  PROPERTY_DELETE_FAIL,
  PROPERTY_SINGLE_REQUEST,
  PROPERTY_SINGLE_SUCCESS,
  PROPERTY_SINGLE_FAIL,
} from '../constants/propertyConstant';

export const listProperties = (
  category = '',
  type = '',
  bedroom = '',
  furnished = '',
  serviced = '',
  keywords = ''
) => async dispatch => {
  try {
    dispatch({ type: PROPERTY_LIST_REQUEST });
    const { data } = await axios.get(
      `/api/property?category=${category}&type=${type}&bedroom=${bedroom}&furnished=${furnished}&serviced=${serviced}&keywords=${keywords}`
    );

    dispatch({
      type: PROPERTY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROPERTY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProperty = postData => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_PROPERTY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/property`, postData, config);

    dispatch({
      type: CREATE_PROPERTY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: CREATE_PROPERTY_FAIL,
      payload: message,
    });
  }
};

export const deleteProperty = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROPERTY_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/property/${id}`, config);

    dispatch({
      type: PROPERTY_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PROPERTY_DELETE_FAIL,
      payload: message,
    });
  }
};

export const getProperty = id => async dispatch => {
  try {
    dispatch({
      type: PROPERTY_SINGLE_REQUEST,
    });

    const { data } = await axios.get(`/api/property/${id}`);

    dispatch({
      type: PROPERTY_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PROPERTY_SINGLE_FAIL,
      payload: message,
    });
  }
};
