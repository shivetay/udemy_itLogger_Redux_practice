import axios from 'axios';

/* selectors */

// export const getLogs = ({ logs }) => logs.data;

/* action creator name */

const reducerName = 'logs';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

export const FETCH_LOG = createActionName('FETCH_LOG');
export const LOG_LOADING = createActionName('LOG_LOADING');
export const END_LOADING = createActionName('END_LOADING');

/* action createros */

export const fetchLog = payload => ({ payload, type: FETCH_LOG });
export const logLoading = payload => ({ payload, type: LOG_LOADING });
export const endLoading = payload => ({ payload, type: END_LOADING });

/* THUNK */
export const fetchLogsRequest = () => {
  return async dispatch => {
    dispatch(logLoading({ name: 'LOG_LOADING' }));
    let res = await axios.get('http://localhost:5000/logs');
    dispatch(fetchLog(res.data));
    dispatch(endLoading({ name: 'END_LOADING' }));
  };
};

const initialState = {
  logs: [],
  loading: false,
};
/* reducer */

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_LOG:
      return { ...state, logs: action.payload, loading: false };

    case LOG_LOADING:
      return { ...state, loading: true };

    case END_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
}
