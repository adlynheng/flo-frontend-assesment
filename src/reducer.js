export const STATUS = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FILE_DROPPED":
      return { ...state, status: STATUS.LOADING, data: null };
    case "RESULT_PROCESSED":
      return { ...initialState, status: STATUS.SUCCESS, data: action.payload };
    case "RESET":
      return { ...initialState, status: STATUS.IDLE, data: null };
    default:
      return state;
  }
};

export const initialState = {
  status: STATUS.IDLE,
  data: null,
};
