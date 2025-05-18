import { RestAPIContext } from './App';
import MbtiItem from './MbtiItem';

function MbtiList({ list, setAddMbti, addMbti }) {
  const handleAdd = () => {
    setAddMbti(!addMbti);
  }

  return (
    <>
      <div className="max-w-[650px] container mx-auto mb-3">
        <div className="flex justify-end mb-2">
          <button 
            onClick={handleAdd}
            className='block border-2 rounded-[5px] px-[20px] py-[5px] duration-200 ease-in justify-end hover:bg-gray-500'
          >추가</button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {list.map(mbti => (
            <MbtiItem 
              key={mbti.mtType} 
              mbti={mbti}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default MbtiList