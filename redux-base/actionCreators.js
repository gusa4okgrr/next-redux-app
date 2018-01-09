import {
  getReportsRequest,
  updateReportRequest
} from '../utils/apiHelper';

// Action Types
export const actionTypes = {
  LOAD_REPORTS: {
    REQUEST: 'LOAD_REPORTS_REQUEST',
    SUCCESS: 'LOAD_REPORTS_SUCCESS',
  },
  UPDATE_REPORT: {
    REQUEST: 'UPDATE_REPORT_REQUEST',
    SUCCESS: 'UPDATE_REPORT_SUCCESS',
  },
  ERROR: 'ERROR'
};

// Actions
export const loadReportsActionCreator = reports => ({
  type: actionTypes.LOAD_REPORTS.SUCCESS,
  payload: reports
});

export const updateReportActionCreator = response => ({
  type: actionTypes.UPDATE_REPORT.SUCCESS,
  payload: response
});

export const throwError = error => ({
  type: actionTypes.ERROR,
  error
});

// action creators
export const fetchReports = () => (dispatch) => {
  dispatch({ type: actionTypes.LOAD_REPORTS.REQUEST });
  return getReportsRequest()
    .then(reports => dispatch(loadReportsActionCreator(reports)))
    .catch((err) => {
      dispatch(throwError(err));
    });
};

export const updateReport = payload => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_REPORT.REQUEST });
  return updateReportRequest(payload)
    .then(response => dispatch(updateReportActionCreator(response)))
    .catch((err) => {
      dispatch(throwError(err));
    });
};
