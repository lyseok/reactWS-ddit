import React from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import cute3 from '../../assets/cute3.JPG';

function MbtiDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const backward = () => {
    navigate(-1);
  }

  return (
    <div>
      <h1>상세 페이지(MbtiDetail)</h1>
      <h1>{params.mtType}</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <nav className='inline menu-bar'>
        <button onClick={backward}>뒤로가기</button>
        <Link to={'/mbti'}>목록으로</Link>
        <Link to={`/mbti/${params.mtType}/edit`}>수정</Link>
      </nav>
      <img src={cute3} alt="" />
    </div>
  )
}

export default MbtiDetail