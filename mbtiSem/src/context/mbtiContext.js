import { createContext, useContext } from "react";

export const RestAPIContext = createContext();
export const MbtiContext = createContext();

export function useRestAPIContext() {
  return useContext(RestAPIContext); 
};

export function useMbtiContext() {
  return useContext(MbtiContext);
};

export const initState = {
  list: [],
  selected: null
};

export function mbtiReducer(state, {type, payload}) {
  switch(type){
    case 'getList':
      return {
        ...state,
        list: payload,
      }; 
    case 'getDetail':
      return {
        ...state,
        selected: payload,
      }
    case 'create':
      return {
        ...state,
        list: payload.list,
        selected: payload.created,
      }
    default:
      return state;
  }
};