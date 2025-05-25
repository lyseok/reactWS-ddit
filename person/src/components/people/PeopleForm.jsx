import { useForm } from 'react-hook-form';
import FormInput from '../commons/FormInput';
import FormSelect from '../commons/FormSelect';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PeopleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));

    axios.post("http://localhost/hw07/rest/people", data)
      .then(res => {
        console.log(res.data)
        if(res.data.status){
          navigate(`/people/${data.id}`);       
        } else {
          const alertText = Object.entries(res.data.message)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');
          alert(alertText);
        }  
      });
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col shrink w-full pr-1.5 pl-1.5"
    >
      <FormInput
        label="ID"
        id="id"
        placeholder="ID"
        register={register}
        rules={{ required: '아이디는 필수 입력입니다.' }}
        error={errors.id}
      />
      <FormInput
        label="이름"
        id="name"
        placeholder="이름"
        register={register}
        rules={{ required: '이름는 필수 입력입니다' }}
        error={errors.name}
      />
      <FormSelect
        label="성별"
        id="gender"
        register={register}
        rules={{ required: '성별은 필수 선택입니다.' }}
        error={errors.gender}
        options={[
          { value: '', label: '성별 선택' },
          { value: 'M', label: 'Male' },
          { value: 'F', label: 'Female' },
        ]}
      />
      <FormInput
        label="나이"
        id="age"
        placeholder="나이"
        type="number"
        register={register}
        rules={{ required: '나이는 필수 입력입니다.' }}
        error={errors.age}
      />
      <FormInput
        label="주소"
        id="address"
        placeholder="주소"
        register={register}
        rules={{ required: '주소는 필수 입력입니다.' }}
        error={errors.address}
      />

      <div className="mt-[16px] flex gap-1.5">
        <button
          className="bg-blue-500 text-[14px] w-[80px] h-[36px] rounded-[4px] text-white font-bold"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
        <button
          className="bg-red-400 text-[14px] w-[80px] h-[36px] rounded-[4px] text-white font-bold"
          type="button"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default PeopleForm;
