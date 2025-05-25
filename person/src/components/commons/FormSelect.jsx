function FormSelect({ label, id, options, register, rules, error }) {
  return (
    <div className="h-[95px]">
      <label htmlFor={id} className="text-[16px] font-medium mb-0.5">
        {label}
      </label>
      <select
        id={id}
        className="block w-full p-[10px] font-normal border-[1px] rounded-[4px] border-gray-300"
        {...register(id, rules)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}

export default FormSelect;
