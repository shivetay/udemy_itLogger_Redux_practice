import React, { Component } from 'react';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

class AddLog extends Component {
  static propTypes = {
    logs: PropTypes.any,
    addLogs: PropTypes.func,
    loading: PropTypes.func,
  };

  state = {
    message: '',
    attention: false,
    tech: '',
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { addLogs } = this.props;
    const { message, tech, attention } = this.state;

    const onSubmit = () => {
      if (message === '' || tech === '') {
        M.toast({ html: 'Please enetr a message and tech.' });
      } else {
        const newLog = {
          message,
          attention,
          tech,
          date: new Date(),
        };
        console.log('newlog', newLog);

        addLogs(newLog);

        this.setState({ message: '' });
        this.setState({ tech: '' });
        this.setState({ attention: false });
      }
    };
    return (
      <div id='add-log-modal' className='modal'>
        <div className='modal-content'>
          <h4>Enter Log</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='message'
                value={message}
                onChange={this.onChange}
              />
              <label className='active' htmlFor='message'>
                Log Message
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <select
                className='browser-default'
                name='tech'
                value={tech}
                onChange={this.onChange}
              >
                <option value='' disabled>
                  Select Tech
                </option>
                <option value='Mieszko Dawidowicz'>Mieszko Dawidowicz</option>
                <option value='Mieszko Dawidowicz'>Dorota Dawidowicz</option>
                <option value='Mieszko Dawidowicz'>Łukasz Dawidowicz</option>
                <option value='Mieszko Dawidowicz'>Chili Dawidowicz</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => this.setState({ attention: true })}
                />
                <span>attention requierd</span>
              </label>
            </div>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect waves-green btn'
          >
            Enter
          </a>
        </div>
      </div>
    );
  }
}

export default AddLog;
