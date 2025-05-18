import { useContext, useEffect, useRef, useState } from "react";
import { RestAPIContext, selectMbtiContent } from "./App";

function MbtiDetail({ setList }) {
  const restAPI = useContext(RestAPIContext);
  const { selectMbti, setSelectMbti } = useContext(selectMbtiContent);
  const [ edit, setEdit ] = useState(false);
  const inputTitle = useRef();
  const inputContent = useRef();

  useEffect(() => {
    setEdit(false);
  }, [selectMbti])

  const handleUpdate = () => {
    setEdit(!edit);
  }

  const handleSubmit = async () => {
    const newMbti = {
      ...selectMbti,
      mtTitle: inputTitle.current.value,
      mtContent: inputContent.current.value
    }

    const res = await restAPI.update(selectMbti.mtType, newMbti);
    if(res.result === 'success'){
      const updateMbti = await restAPI.getOne(selectMbti.mtType);
      setSelectMbti(updateMbti);
      handleUpdate();
    }
  }

  const handleDelete = async () => {
    const res = await restAPI.remove(selectMbti.mtType);
    if(res.result === 'success'){
      restAPI.getAll().then(setList);
      setSelectMbti(null);
    }
  }

  return (
  <div className="max-w-[650px] container mx-auto border-gray-700 border-2 rounded-2xl p-2">
      {selectMbti !== null ? (
        <>
            {
              edit 
              ? (
                <>
                  <div className="flex relative items-center">
                    <input 
                      type='text'
                      className="text-3xl mb-2 border-2 box-border"
                      ref={inputTitle}
                      defaultValue={selectMbti.mtTitle}
                    />
                    <div className="absolute right-0">
                      <span 
                        className="cursor-pointer"
                        onClick={handleSubmit}
                      >완료</span>
                      <span 
                        onClick={handleUpdate}
                        className="ml-3 cursor-pointer"
                      >취소</span>
                    </div>
                  </div>
                  <textarea 
                    className="border-[1px] "
                    cols={70} 
                    rows={20} 
                    ref={inputContent}
                    defaultValue={selectMbti.mtContent}
                  ></textarea>
                </>
              )
              : (
                <>
                  <div className="flex relative items-center">
                    <h2
                      className="text-3xl mb-2.5 m-0.5"
                    >{selectMbti.mtTitle}</h2>
                    <div className="absolute right-0">
                      <span 
                        onClick={handleUpdate} 
                        className="cursor-pointer"
                      >수정</span>
                      <span 
                      onClick={handleDelete}
                        className="ml-3 cursor-pointer"
                      >삭제</span>
                    </div>
                  </div>
                  <div>
                  {
                    selectMbti.mtContent.split('\n').map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))
                  }
                  </div>
                </>
              )
            }
          </>
      ) : (
        <div>MBTI를 선택하세요</div>
      )}
  </div>
);
}

export default MbtiDetail;
