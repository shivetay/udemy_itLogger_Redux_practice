import { connect } from 'react-redux';

import { fetchLogsRequest, logLoading } from '../../../redux/LogReducer';
import Logs from './Logs';

const mapStateToProps = state => ({
  logs: state.logs,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchLogs: () => dispatch(fetchLogsRequest()),
  loading: () => dispatch(logLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
