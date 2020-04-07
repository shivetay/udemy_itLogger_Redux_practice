import { connect } from 'react-redux';

import { addLogsRequest, logLoading } from '../../../redux/LogReducer';
import AddLog from './AddLog';

const mapStateToProps = state => ({
  logs: state.logs,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  addLogs: logs => dispatch(addLogsRequest(logs)),
  loading: () => dispatch(logLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLog);
