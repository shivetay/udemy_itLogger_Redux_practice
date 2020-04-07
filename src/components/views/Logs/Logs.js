import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Log from '../Log/LogContainer';
import Loader from '../../common/Loader/Loader';

class Logs extends Component {
  static propTypes = {
    logs: PropTypes.any,
    fetchLogs: PropTypes.func,
    loading: PropTypes.func,
  };

  componentDidMount() {
    const { fetchLogs } = this.props;
    fetchLogs();
  }

  render() {
    const {
      logs: { logs, loading },
    } = this.props;
    if (loading || logs === []) {
      return <Loader />;
    } else {
      return (
        <section>
          <ul className='collection with-header'>
            <li className='collection-header'>
              <h4>Logs List</h4>
            </li>
            {logs.map(log => (
              <Log key={log.id} logData={log} />
            ))}
            {/* {!loading && logs.length === 0 ? (
              <p className='center'>
                <Loader />
                No logs
              </p>
            ) : (
              logs.map(log => <Log key={log.id} logData={log} />)
            )} */}
          </ul>
        </section>
      );
    }
  }
}

export default Logs;
