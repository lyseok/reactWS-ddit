import React from 'react';

function InputText({ label, id, type = 'text', placeholder, register, error }) {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="text-[16px] font-medium mb-0.5 block">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="block w-full p-[10px] font-normal border-[1px] rounded-[4px] border-gray-300"
        {...register}
      />
      <small className="text-red-500">{error ? error.message : 'ㅤ'}</small>
    </div>
  );
}

export default InputText;
