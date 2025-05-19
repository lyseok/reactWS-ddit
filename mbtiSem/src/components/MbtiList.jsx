import { useEffect } from 'react';
import { useMbtiContext, useRestAPIContext } from '../context/mbtiContext';

function MbtiList() {
  const restApi = useRestAPIContext();
  const { mbtiState, mbtiDispatch } = useMbtiContext();

  useEffect(() => {
    restApi.getAll()
      .then(data => {
        mbtiDispatch({
          type: 'getList', 
          payload: data
        });
      });
  }, []);

  const selMbti = (e) => {
    console.log(e.target);
    const selMbtiType = e.target.value;
    const selected = mbtiState.list.find((mbti) => mbti.mtType === selMbtiType)
    console.log('selected', selected)
    mbtiDispatch({
      type: 'getDetail',
      payload: selected,
    });
    console.log(mbtiState)
  }

  return (

  <select onChange={selMbti}>
    <option value={mbtiState.selected?.mtType ?? ''}>선택</option>
    {
      mbtiState.list.map((mbti) => 
        <option 
          className='text-gray-800'
          key={mbti.mtType} 
          value={mbti.mtType}
        >{mbti.mtTitle}</option>
      )
    }
  </select>
)
}

export default MbtiList;
