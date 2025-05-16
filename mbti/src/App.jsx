import { createContext, useEffect, useState } from 'react';
import MbtiDetail from './MbtiDetail';
import MbtiList from './MbtiList';
import FecthRestApi from './api/FetchRestApi';

export const RestAPIContext = createContext();

function App() {
  const [list, setList] = useState([]);
  const restAPI = new FecthRestApi('http://localhost/ws02/rest/mbti');


  useEffect(() => {
    restAPI.getAll().then((data) => {
      setList(data);
    });
  }, []);

  return (
    <RestAPIContext.Provider value={restAPI}>
      <h1>MBTI 관리</h1>
      <MbtiList list={list} />
      <MbtiDetail />
    </RestAPIContext.Provider>
  );
}

export default App;
