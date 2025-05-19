import React from 'react'
import MbtiForm from '../components/MbtiForm'
import MbtiList from '../components/MbtiList'
import MbtiDetail from '../components/MbtiDetail'
import MbtiContextProvider from '../components/MbtiContextProvider'

function MbtiMng() {
  return (
    <MbtiContextProvider>
      <h3>MBTI 관리</h3>
      <MbtiForm/>
      <hr />
      <MbtiList/>
      <hr/>
      <MbtiDetail/>
    </MbtiContextProvider>
  )
}

export default MbtiMng