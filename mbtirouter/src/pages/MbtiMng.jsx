import React from 'react'
import { Outlet } from 'react-router'

function MbtiMng() {
  return (
    <div className='h-full'>
      <h1>MBTI 관리</h1>
      <header>공통 헤더</header>
      <Outlet />
      <footer>공통 푸터</footer>
    </div>
  )
}

export default MbtiMng