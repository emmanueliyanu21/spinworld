import {
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  CREATE_PROPERTY_REQUEST,
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_FAIL,
  CREATE_PROPERTY_RESET,
  PROPERTY_DELETE_REQUEST,
  PROPERTY_DELETE_SUCCESS,
  PROPERTY_DELETE_FAIL,
  PROPERTY_SINGLE_REQUEST,
  PROPERTY_SINGLE_SUCCESS,
  PROPERTY_SINGLE_FAIL,
} from '../constants/propertyConstant';

export const propertyListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PROPERTY_LIST_REQUEST:
      return { loading: true, properties: [] };
    case PROPERTY_LIST_SUCCESS:
      return { loading: false, properties: action.payload };
    case PROPERTY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const propertyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PROPERTY_REQUEST:
      return { loading: true };
    case CREATE_PROPERTY_SUCCESS:
      return { loading: false, success: true, property: action.payload };
    case CREATE_PROPERTY_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_PROPERTY_RESET:
      return {};
    default:
      return state;
  }
};

export const propertyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROPERTY_DELETE_REQUEST:
      return { loading: true };
    case PROPERTY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PROPERTY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const propertySingleReducer = (state = {}, action) => {
  switch (action.type) {
    case PROPERTY_SINGLE_REQUEST:
      return { loading: true };
    case PROPERTY_SINGLE_SUCCESS:
      return { loading: false, property: action.payload };
    case PROPERTY_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
