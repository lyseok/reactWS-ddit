import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PeopleList() {
  const navigate = useNavigate();
  const [peopleState, setPeopleState] = useState({});
  // const { peopleState, peopleDispatch } = usePeopleContext();

  useEffect(() => {
    axios.get('http://localhost/hw07/rest/people').then((res) =>
      // peopleDispatch({
      //   type: 'getList',
      //   payload: res.data,
      // })
      setPeopleState(res.data)
    );
  }, []);

  const handleClick = (id) => {
    navigate(`/people/${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-sm text-left border border-gray-300">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">이름</th>
            <th className="px-4 py-2 border">성별</th>
            <th className="px-4 py-2 border">나이</th>
            <th className="px-4 py-2 border">주소</th>
          </tr>
        </thead>
        <tbody>
          {peopleState && peopleState.length > 0 ? (
            peopleState.map((person) => (
              <tr key={person.id} className="hover:bg-gray-50">
                <td
                  onClick={() => handleClick(person.id)}
                  className="px-4 py-2 border-black border text-blue-500 underline cursor-pointer"
                >
                  {person.id}
                </td>
                <td className="px-4 py-2 border">{person.name}</td>
                <td className="px-4 py-2 border">{person.gender}</td>
                <td className="px-4 py-2 border text-right">{person.age}</td>
                <td className="px-4 py-2 border">{person.address}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 border">
                등록된 인물이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleList;
