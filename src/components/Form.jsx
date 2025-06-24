import CustomInput from './CustomInput';

function Form({ inputs }) {
  return (
    <form action='#'>
      {inputs.map((inputObj) => {
        return (
          <CustomInput
            key={inputObj.key}
            title={inputObj.title}
            type={inputObj.type}
            label={inputObj.label}
            required={inputObj.required}
            placeholder={inputObj.placeholder}
          />
        );
      })}
    </form>
  );
}

export default Form;
