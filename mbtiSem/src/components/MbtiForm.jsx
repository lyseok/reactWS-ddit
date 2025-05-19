import React from 'react';
import { useMbtiContext, useRestAPIContext } from '../context/mbtiContext';

function MbtiForm() {
  const restApi = useRestAPIContext();
  const {mbtiState, mbtiDispatch} = useMbtiContext();

  const addMbti = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const newMbti = Object.fromEntries(fd.entries());
    restApi.create(newMbti)
      .then((data) => mbtiDispatch({
        type: 'create',
        payload: {
          list: data,
          created: data.find((mt) => mt.mtType === newMbti.mtType),
        }}
      )
    );
    e.target.reset();
  }

  return (
    <form onSubmit={addMbti}>
      <ul>
        <li>
          <input type="text" name="mtType" placeholder='유형' />
        </li>
        <li>
          <input type="text" name="mtTitle" placeholder='요약' />
        </li>
        <li>
          <textarea type="text" name="mtContent" placeholder='상세'></textarea>
        </li>
        <li>
          <button type='submit'>등록</button>
          <button type='reset'>취소</button>
        </li>
      </ul>
    </form>
  );
}

export default MbtiForm;
