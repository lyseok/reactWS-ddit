import { createContext, useEffect, useState } from 'react';
import MbtiDetail from './MbtiDetail';
import MbtiList from './MbtiList';
import FetchRestApi from './api/FetchRestApi';
import AddMbti from './AddMbti';

export const RestAPIContext = createContext();
export const selectMbtiContent = createContext();

function App() {
  const [list, setList] = useState([]);
  const [selectMbti, setSelectMbti] = useState(null);
  const [addMbti, setAddMbti] = useState(false);

  const restAPI = new FetchRestApi('http://localhost/ws02/rest/mbti');

  useEffect(() => {
    restAPI.getAll().then(setList);
  }, []);

  return (
    <RestAPIContext.Provider value={restAPI}>
      <selectMbtiContent.Provider value={{selectMbti, setSelectMbti}}>
        <div className='container mx-auto mt-6'>
          <MbtiList list={list} addMbti={addMbti} setAddMbti={setAddMbti}/>
          {
            addMbti
            ? (
              <AddMbti setList={setList} setAddMbti={setAddMbti}/>
            )
            : (
              <MbtiDetail setList={setList}/>
            )
          }
        </div>
      </selectMbtiContent.Provider>
    </RestAPIContext.Provider>
  );
}

export default App;
