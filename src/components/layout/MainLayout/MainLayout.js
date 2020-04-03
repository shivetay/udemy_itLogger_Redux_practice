import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Header from '../Header/Header';

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <main>{children}</main>
      </div>
    );
  }
}

MainLayout.propTypes = {};

export default MainLayout;

// const MainLayout = ({ children }) => {
//   return (
//     <div>
//       <main>{children}</main>
//     </div>
//   );
// };

// MainLayout.propTypes = {
//   children: PropTypes.node,
// };

// export default MainLayout;
