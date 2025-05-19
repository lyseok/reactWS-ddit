import { initState, MbtiContext, mbtiReducer, RestAPIContext } from '../context/mbtiContext'
import FetchRestApi from '../api/FetchRestApi'
import { createContext, useReducer } from 'react';

function MbtiContextProvider({ children }) {
  const restApi = new FetchRestApi('http://localhost/ws02/rest/sem/mbti');
  const [mbtiState, mbtiDispatch] = useReducer(mbtiReducer, initState);

  return (
    <RestAPIContext.Provider value={ restApi }>
      <MbtiContext.Provider value={{ mbtiState, mbtiDispatch }}>
        {children}
      </MbtiContext.Provider>
    </RestAPIContext.Provider>
  )
}

export default MbtiContextProvider