import React, { useContext } from 'react'
import { RestAPIContext } from './App';

function MbtiList({ list }) {
  const restAPI = useContext(RestAPIContext);
  return (
    <select>
      <option value>유형선택</option>
      {
        list.map(mbti => <option key={mbti.mtType} value={mbti.mtType}>{mbti.mtTitle}</option>)
      }
    </select>
  )
}

export default MbtiList