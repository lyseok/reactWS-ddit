import React from 'react'
import { Link, useNavigate } from 'react-router';

function MbtiList() {
  const navigate = useNavigate();
  const selMbti = (e) => {
    const mtType = e.target.value;
    navigate(`/mbti/${mtType}`);
  }

  return (
    <>
      <select onChange={selMbti}>
        <option value="">선택</option>
        <option value="istp">ISTP 인가민가</option>
      </select>
      <Link to={'/mbti/new'}>신규등록</Link>
    </>
  )
}

export default MbtiList