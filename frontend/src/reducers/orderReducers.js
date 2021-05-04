import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_RESET,
  ORDER_ASSIGN_DRIVER_REQUEST,
  ORDER_ASSIGN_DRIVER_SUCCESS,
  ORDER_ASSIGN_DRIVER_FAIL,
  ORDER_DRIVER_REQUEST,
  ORDER_DRIVER_SUCCESS,
  ORDER_DRIVER_FAIL,
  ORDER_MARK_DRIVER_DELIVERED_REQUEST,
  ORDER_MARK_DRIVER_DELIVERED_SUCCESS,
  ORDER_MARK_DRIVER_DELIVERED_FAIL,
  ORDER_MARK_DRIVER_FAILED_REQUEST,
  ORDER_MARK_DRIVER_FAILED_SUCCESS,
  ORDER_MARK_DRIVER_FAILED_FAIL,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST:
      return {
        loading: true,
      };
    case ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_LIST_MY_RESET:
      return { orders: {} };
    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderAssignDriverReducer = (
  state = { loading: false },
  action
) => {
  switch (action.type) {
    case ORDER_ASSIGN_DRIVER_REQUEST:
      return {
        loading: true,
      };
    case ORDER_ASSIGN_DRIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_ASSIGN_DRIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDriverReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case ORDER_DRIVER_REQUEST:
      return {
        loading: true,
      };
    case ORDER_DRIVER_SUCCESS:
      return {
        loading: false,
        success: true,
        orders: action.payload,
      };
    case ORDER_DRIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderMarkDriverDeliveredReducer = (
  state = { loading: false },
  action
) => {
  switch (action.type) {
    case ORDER_MARK_DRIVER_DELIVERED_REQUEST:
      return {
        loading: true,
      };
    case ORDER_MARK_DRIVER_DELIVERED_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_MARK_DRIVER_DELIVERED_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderMarkDriverFailedReducer = (
  state = { loading: false },
  action
) => {
  switch (action.type) {
    case ORDER_MARK_DRIVER_FAILED_REQUEST:
      return {
        loading: true,
      };
    case ORDER_MARK_DRIVER_FAILED_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_MARK_DRIVER_FAILED_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
