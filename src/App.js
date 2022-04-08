import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'; //Diferente do MaterialUI, não precisa ficar fazendo importações, se trabalha com classes
import './App.css';

const App = () => {
  useEffect(() => { //Recebe instruções e quando deve executar essas funções. Nesse caso, está iniciando o materialize e o [] quer dizer que vai ocorrer na abertura do navegador(somente)
    // Init Materialize JS
    M.AutoInit();
  }, []); //[] -> dependencias 
  return (
    <Provider store={store}> {/* Redux e ele está mostrando onde vai ser usado o redux */}
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
