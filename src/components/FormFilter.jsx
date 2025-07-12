import { useState } from 'react';
import FilterInputCheckbox from './FilterInputCheckbox.jsx';
import SingleFormsControl from './SingleFormsControl.jsx';
import MultipleFormsControl from './MultipleFormsControl.jsx';
import formCheckboxTypes from '../formCheckboxConfig.js';

function FormFilter({
  updateSingleFormInfo,
  defaultSingleFormData,
  updateMultipleFormInfo,
  defaultMultipleFormData,
}) {
  const [filteredForms, setFilteredForms] = useState({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const toggleCheckboxHandler = (id) => {
    const newFilteredForms = { ...filteredForms, [id]: !filteredForms[id] };
    setFilteredForms(newFilteredForms);
  };

  return (
    <div className='mt-10'>
      <h2 className='text-2xl text-gray-800 dark:text-gray-100 mb-6'>
        Form Filter:{' '}
      </h2>
      <fieldset className='flex gap-2 flex-wrap mb-16'>
        {formCheckboxTypes.map((formCheckboxType) => {
          return (
            <FilterInputCheckbox
              key={formCheckboxType.key}
              value={formCheckboxType.title}
              id={'filtered-checkbox-' + formCheckboxType.id}
              isChecked={filteredForms[formCheckboxType.id]}
              onToggle={() => toggleCheckboxHandler(formCheckboxType.id)}
            />
          );
        })}
      </fieldset>
      <div>
        <SingleFormsControl
          onFormMinimize={toggleCheckboxHandler}
          filteredForms={filteredForms}
          updateSingleFormInfo={updateSingleFormInfo}
          defaultSingleFormData={defaultSingleFormData}
        />
        <MultipleFormsControl
          onFormMinimize={toggleCheckboxHandler}
          filteredForms={filteredForms}
          updateMultipleFormInfo={updateMultipleFormInfo}
          defaultMultipleFormData={defaultMultipleFormData}
        />
      </div>
    </div>
  );
}

export default FormFilter;
