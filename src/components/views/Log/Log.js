import React from 'react';
import PropTypes from 'prop-types';

const Log = ({ logData }) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${logData.attention ? 'red-text' : 'blue-text'}`}
        >
          {logData.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID# {logData.id}</span> last updated by{' '}
          <span className='black-text'>{logData.tech}</span> <span>{logData.date}</span>
        </span>
        <a href='#' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

Log.propTypes = {
  logData: PropTypes.object.isRequired,
};

export default Log;
