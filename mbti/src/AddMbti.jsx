import { useContext, useEffect, useRef, useState } from "react";
import { RestAPIContext, selectMbtiContent } from "./App";

function AddMbti({setList, setAddMbti}) {
  const restAPI = useContext(RestAPIContext);
  const { selectMbti, setSelectMbti } = useContext(selectMbtiContent);
  const inputTitle = useRef();
  const inputType = useRef();
  const inputContent = useRef();

  const handleSubmit = async () => {
    const newMbti = {
      mtTitle: inputTitle.current.value,
      mtType: inputType.current.value,
      mtContent: inputContent.current.value
    }

    const res = await restAPI.create(newMbti);
    if(res.result === 'success'){
      const updateMbti = await restAPI.getOne(inputType.current.value);
      restAPI.getAll().then(setList);
      setSelectMbti(updateMbti);
      setAddMbti(false);
    }
  }


  return (
  <div className="max-w-[650px] container mx-auto border-gray-700 border-2 rounded-2xl p-2">
    <div className="flex relative items-start flex-col ">
      <input 
        type='text'
        className="text-3xl mb-2 border-2 box-border"
        placeholder="MBTI TITLE"
        ref={inputTitle}
      />
      <input 
        type='text'
        className="text-2xl mb-2 border-2 box-border"
        placeholder="MBTI TYPE"
        ref={inputType}
      />
      <div className="absolute right-0">
        <span 
          className="cursor-pointer"
          onClick={handleSubmit}
        >완료</span>
      </div>
    </div>
    <textarea 
      className="border-[1px] "
      cols={70} 
      rows={20} 
      ref={inputContent}
    ></textarea>
  </div>
);
}

export default AddMbti;
