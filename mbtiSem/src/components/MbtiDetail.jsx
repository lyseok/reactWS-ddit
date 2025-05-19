import { useMbtiContext, useRestAPIContext } from '../context/mbtiContext';

function MbtiDetail() {
  const restApi = useRestAPIContext();
  const { mbtiState, mbtiDispacth } = useMbtiContext();
  const mbti = mbtiState.selected;
  console.log("selected ", mbti);

  console.log(mbtiState)

  if(!mbti) return (<h4>아직 선택하지 않았음</h4>)

  return (
    <div>
      {/* <h1>{mbti?.mtTitle ?? "test"}</h1> */}
      <h1>{mbti.mtType}, ({mbti.mtSort})</h1>
      <hr />
      <h3>{mbti.mtTitle}</h3>
      <h3>{mbti.mtContent}</h3>
      <hr />
    </div>
  );
}

export default MbtiDetail;
