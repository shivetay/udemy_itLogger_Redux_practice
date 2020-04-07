import { connect } from 'react-redux';

import { deleteLogsRequest, logLoading } from '../../../redux/LogReducer';
import Log from './Log';

const mapStateToProps = state => ({
  logs: state.logs,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  delLog: id => dispatch(deleteLogsRequest(id)),
  loading: () => dispatch(logLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Log);
