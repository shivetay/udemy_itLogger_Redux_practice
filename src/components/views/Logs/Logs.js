import React, { Component } from 'react';

import Log from '../Log/Log';
import Loader from '../../common/Loader/Loader';

class Logs extends Component {
  state = {
    logs: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchLogs();
  }

  fetchLogs() {
    this.setState({ loading: true });
    fetch('http://localhost:5000/logs')
      .then(res => res.json())
      .then(data => this.setState({ logs: data }));

    this.setState({ loading: false });
  }
  render() {
    const { logs, loading } = this.state;
    return (
      <section>
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h4>Logs List</h4>
          </li>
          {!loading && logs.length === 0 ? (
            <p className='center'>
              <Loader />
              No logs
            </p>
          ) : (
            logs.map(log => <Log key={log.id} logData={log} />)
          )}
        </ul>
      </section>
    );
  }
}

export default Logs;
