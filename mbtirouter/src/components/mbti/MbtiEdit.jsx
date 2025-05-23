import React, { useRef } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'

function MbtiEdit() {
  const { mtType } = useParams();
  const inputRef = useRef();
  const navigate =useNavigate();
  const updateMbti = () => {
    alert(inputRef.current.value);
    navigate(`/mbti/${mtType}`)
  }
  return (
    <div>
      <h1>MBTI 수정 (MbtiEdit)</h1>
      <input 
        ref={inputRef}
        type="text" 
        defaultValue={mtType} 
      />
      <button onClick={updateMbti}>저장</button>
    </div>
  )
}

export default MbtiEdit