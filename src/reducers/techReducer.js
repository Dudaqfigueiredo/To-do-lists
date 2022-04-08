import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) { //If gigante, entre parenteses a variavel que será comparado em cada caso
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload), //Filter -> Todo mundo que for diferente do id que guardei no payload, ele vai retornar. Logo, os que são do ID selecionado, não será mostrado
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
