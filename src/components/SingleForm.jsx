import { useState } from 'react';

import CustomInput from './CustomInput.jsx';
import FormMinimizeButton from './FormMinimizeButton.jsx';
import FormSubmitButton from './FormSubmitButton.jsx';

function SingleForm({
  heading,
  inputs,
  onFormMinimize,
  isFiltered,
  updateSingleFormInfo,
  defaultSingleFormData,
  formId,
}) {
  const defaultFormsData = defaultSingleFormData.find(
    (formObj) => formObj.title === formId.slice(5)
  ).values;

  const [formData, setFormData] = useState(defaultFormsData);

  const onInputChangeHandler = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const submitSingleFormHandler = (e) => {
    e.preventDefault();

    const formsID = e.target.id;

    const newInfoObj = {
      title: formsID,
      values: formData,
      key: formsID + '-cv-data',
    };

    updateSingleFormInfo(newInfoObj.key, newInfoObj);
  };

  return (
    <form
      action='#'
      className='bg-white p-5 rounded-2xl border-1 border-slate-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 mb-10'
      id={heading.toLowerCase()}
      onSubmit={submitSingleFormHandler}
    >
      <div
        className={
          'flex justify-between items-center ' + (isFiltered ? 'mb-7.5' : '')
        }
      >
        <h2 className='text-xl relative text-stone-900 dark:text-gray-50 font-medium before:content-[""] before:h-1 w-[fit-content] before:bg-orange-700  before:absolute before:bottom-[20%] before:w-[40px] before:right-[-50px]'>
          {heading}
        </h2>
        <FormMinimizeButton
          onFormMinimize={onFormMinimize}
          isMinimized={isFiltered}
        />
      </div>
      {isFiltered ? (
        <div>
          <div className='mb-7.5'>
            {inputs.map((inputObj) => {
              return (
                <CustomInput
                  id={inputObj.id}
                  key={inputObj.id}
                  title={inputObj.title}
                  type={inputObj.type}
                  label={inputObj.label}
                  required={inputObj.required}
                  placeholder={inputObj.placeholder}
                  maxLength={inputObj.maxLength}
                  minLength={inputObj.minLength}
                  max={inputObj.max}
                  min={inputObj.min}
                  step={inputObj.step}
                  pattern={inputObj.pattern}
                  titleAttribute={inputObj.titleAttribute}
                  onInputChangeHandler={onInputChangeHandler}
                  value={formData[inputObj.id]}
                />
              );
            })}
          </div>
          <FormSubmitButton />
        </div>
      ) : (
        <div></div>
      )}
    </form>
  );
}

export default SingleForm;
