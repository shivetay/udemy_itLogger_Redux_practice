import React from 'react';

import Logs from '../Logs/LogsContainer';
import ButtonAdd from '../../common/Buttons/ButtonAdd';
import AddLog from '../../common/Modals/AddLogContainer';
import EditLogModa from '../../common/Modals/EditLogModa';
import AddTechModal from '../../common/Modals/AddTechModal';
import TechListModal from '../../common/Modals/TechListModal';

const Home = () => {
  return (
    <div className='container'>
      <ButtonAdd />
      <AddLog />
      <EditLogModa />
      <AddTechModal />
      <TechListModal />
      <Logs />
    </div>
  );
};

export default Home;
