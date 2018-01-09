import { actionTypes } from './actionCreators';

export const initialState = {
  reports: [],
  message: '',
  loadingPage: true,
  error: ''
};

// reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_REPORTS.REQUEST:
    case actionTypes.UPDATE_REPORT.REQUEST:
      return {
        ...state,
        loadingPage: true
      };
    case actionTypes.LOAD_REPORTS.SUCCESS: {
      return {
        ...state,
        loadingPage: false,
        reports: action.payload
      };
    }
    case actionTypes.UPDATE_REPORT.SUCCESS: {
      const reports = state.reports.map(item => (
        item.id === action.payload.id
          ? { ...item, status: action.payload.ticketState }
          : item
      ));
      return {
        ...state,
        loadingPage: false,
        message: action.payload.message,
        reports
      };
    }
    case actionTypes.ERROR:
      return {
        ...state,
        loadingPage: false,
        error: action.error
      };
    default: return state;
  }
};
