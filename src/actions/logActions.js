import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

// Get logs from server
export const getLogs = () => async dispatch => { //Async - Dizendo que é uma função assincrona. Então, todas as atividades devem parar para essa atividade ser feita. O Await é para mostrar o que se deve esperar para voltar as atividades.
  try { //Tentar
    setLoading(); 

    const res = await fetch('/logs'); //Pega os logs que estão no /logs no db.json (dado mockado que deveria estar no back mas está no front)
    const data = await res.json(); //Res vem com dois parametros que é o status e o data, então pegaremos o data. Transformando em um dado que o JS entenda usando o .json() 

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) { //Caso não conseguir, capturar esse erro e tratá-lo
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add new log
export const addLog = (log) => async dispatch => { //Ele recebe o log
  try {
    setLoading();
    //Todo fetch por padrão é GET, então passo as configurações dele pois ele será um POST
    const res = await fetch('/logs', { 
      method: 'POST',
      body: JSON.stringify(log), //Os dados que eu quero guardar. O log vai estar formado em objeto então transformamos em string
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Delete log from server
export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Update log on server
export const updateLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search server logs
export const searchLogs = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${text}`); 
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => { //Está esperando
  return {
    type: SET_LOADING
  };
};
