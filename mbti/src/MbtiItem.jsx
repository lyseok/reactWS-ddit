import React, { useContext } from 'react';
import { RestAPIContext, selectMbtiContent } from './App';

function MbtiItem({ mbti }) {
  const restAPI = useContext(RestAPIContext);
  const { setSelectMbti } = useContext(selectMbtiContent);

  const handleClick = async () => {
    const detail = await restAPI.getOne(mbti.mtType);
    console.log(detail);
    setSelectMbti(detail);
  }

  return (
    <div 
      className="w-[150px] m-1 p-2.5 bg-gray-700 text-center border-2 box-border rounded-xl cursor-pointer"
      onClick={handleClick}
    >
      <h3 className='text-white'>{mbti.mtTitle}</h3>
    </div>
  );
}

export default MbtiItem;
