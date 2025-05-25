function FormInput({ label, id, type = 'text', placeholder, register, rules, error, readOnly = false }) {
  return (
    <div className="h-[95px]">
      <label htmlFor={id} className="text-[16px] font-medium mb-0.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        className="block w-full p-[10px] font-normal border-[1px] rounded-[4px] border-gray-300"
        {...register(id, rules)}
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}

export default FormInput;
