import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PeopleDetail() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost/hw07/rest/people/${id}`).then((res) =>
      setPerson(res.data)
    );
  }, [id]);

  const handleClick = () => {
    navigate('/people/edit', {state: person});
  }

  const handleDelete = () => {
    axios.delete(`http://localhost/hw07/rest/people/${id}`).then((res) =>{
      setPerson(res.data)
      alert(res.data.message);
      if(res.data.status){
        navigate('/people/list');
      }
    }
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">인물 상세 조회</h2>
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm">
        <tbody>
          {person ? (
            <>
              <TableRow label="ID" value={person.id} />
              <TableRow label="이름" value={person.name} />
              <TableRow label="성별" value={person.gender} />
              <TableRow label="나이" value={`${person.age}세`} />
              <TableRow label="주소" value={person.address} />
            </>
          ) : (
            <tr>
              <td>등록된 인물이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-4 text-right flex gap-1.5 justify-end">
        <button 
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          수정
        </button>
        <button 
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          삭제
        </button>
      </div>
    </div>
  );
}

function TableRow({ label, value }) {
  return (
    <tr>
      <th className="bg-gray-100 text-left px-4 py-2 border w-1/3">{label}</th>
      <td className="px-4 py-2 border">{value}</td>
    </tr>
  );
}

export default PeopleDetail;
