import React from 'react'
import { useNavigate } from 'react-router';

function MbtiForm() {
  const navigate = useNavigate();
  const createMbti = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const searchParams = new URLSearchParams(fd); // 직렬화된 파라미터 전송
    const obj = Object.fromEntries(fd.entries()); // 객체 생성 용
    alert(
      `search params : ${searchParams} \n
      json : ${JSON.stringify(obj)}
      `
    );
    navigate(`/mbti`);
  }

  return (
    <form onSubmit={createMbti}>
      <input type="text" name='mtType' defaultValue={""} />
      <input type="text" name='mtTitle' defaultValue={""} />
      <button type='submit'>등록</button>
    </form>
  )
}

export default MbtiForm