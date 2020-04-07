import axios from 'axios';
import { FloatingActionButton } from 'materialize-css';

/* selectors */

// export const getLogs = ({ logs }) => logs.data;

/* action creator name */

const reducerName = 'logs';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

export const FETCH_LOG = createActionName('FETCH_LOG');
export const LOG_LOADING = createActionName('LOG_LOADING');
export const END_LOADING = createActionName('END_LOADING');
export const ERROR_LOADING = createActionName('ERROR_LOADING');
export const ADD_LOG = createActionName('ADD_LOG');
export const DEL_LOG = createActionName('DEL_LOG');

/* action createros */

export const fetchLog = payload => ({ payload, type: FETCH_LOG });
export const logLoading = payload => ({ payload, type: LOG_LOADING });
export const endLoading = payload => ({ payload, type: END_LOADING });
export const errorLoading = payload => ({ payload, type: ERROR_LOADING });
export const addLog = payload => ({ payload, type: ADD_LOG });
export const delLogs = payload => ({ payload, type: DEL_LOG });

/* THUNK */
export const fetchLogsRequest = () => {
  return async dispatch => {
    dispatch(logLoading({ name: 'LOG_LOADING' }));
    try {
      let res = await axios.get('http://localhost:5000/logs');
      dispatch(fetchLog(res.data));
      dispatch(endLoading({ name: 'END_LOADING' }));
    } catch (err) {
      dispatch(errorLoading({ name: 'LOG_LOADING', error: err.message }));
    }
  };
};

/* add new log */
export const addLogsRequest = logs => {
  return async dispatch => {
    dispatch(logLoading({ name: 'ADD_LOG' }));
    try {
      let res = await axios.post('http://localhost:5000/logs', logs);
      dispatch(addLog(res.data));
      dispatch(endLoading({ name: 'ADD_LOG' }));
    } catch (err) {
      dispatch(errorLoading({ name: 'ADD_LOG', error: err.message }));
    }
  };
};

/* delete log */
export const deleteLogsRequest = id => {
  return async dispatch => {
    dispatch(logLoading({ name: 'DEL_LOG' }));
    try {
      let res = await axios.delete(`http://localhost:5000/logs/${id}`);
      dispatch(delLogs(res.data));
      dispatch(endLoading({ name: 'DEL_LOG' }));
    } catch (err) {
      dispatch(errorLoading({ name: 'DEL_LOG', error: err.message }));
    }
  };
};

/* initial state */

const initialState = {
  logs: [],
  loading: false,
};

/* reducer */

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_LOG:
      return { ...state, logs: action.payload, loading: false };

    case ADD_LOG:
      return { ...state, logs: [...state.logs, action.payload], loading: false };

    case DEL_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload.id),
        loading: false,
      };

    case LOG_LOADING:
      return { ...state, loading: true };

    case END_LOADING:
      return { ...state, loading: false };

    case ERROR_LOADING:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
