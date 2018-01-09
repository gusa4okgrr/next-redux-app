import axios from 'axios';

// API requests
export const getReportsRequest = () => (
  axios.get('/reports')
    .then(res => res.data)
);

export const updateReportRequest = payload => (
  axios.put(`/report/${payload.id}`, { ticketState: payload.type })
    .then(res => res.data)
);
