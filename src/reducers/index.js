//import {actions } from '../actions';

const reducer = (state, action)  => {
  // switch para evaluar cada caso y ver que debo hacer con cada estado
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [ ...state.myList, action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      }
    case 'LOGIN_REQUEST':
          return {
        ...state,
        user: action.payload

          }
    case 'LOGOUT_REQUEST':
              return {
                  ...state,
                  user: action.payload,
        }
    default:
      return state;
  }
}

export default reducer;
