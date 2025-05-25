import { createContext, useContext } from "react";

export const PeopleContext = createContext();

export function usePeopleContext() {
  return useContext(PeopleContext);
}

export const initState = {
  list: [],
  selected: null,
}

export function peopleReducer(state, {type, payload}) {
  switch(type){
    case 'getList':
      return {
        ...state,
        list: payload,
      };
    case 'getPeople':
      return {
        ...state,
        selected: payload,
      };
    case 'create':
      return {
        ...state,
        list: payload.list,
        selected: payload.created,
      };
    case 'update':
      return {
        ...state,
        selected: payload.updated,
      };
    case 'delete':
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
}

