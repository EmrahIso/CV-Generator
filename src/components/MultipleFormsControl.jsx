import MultipleForm from './MultipleForm.jsx';
import multipleFormsConfig from '../multipleFormsConfig.js';
import formCheckboxTypes from '../formCheckboxConfig.js';

function MultipleFormsControl({
  onFormMinimize,
  filteredForms,
  updateMultipleFormInfo,
  defaultMultipleFormData,
}) {
  return (
    <div>
      {multipleFormsConfig.map((formInfoObj) => {
        const currentFormsFilterCheckboxObj = formCheckboxTypes.find(
          (formCheckboxType) =>
            formCheckboxType.title.toLowerCase() ===
            formInfoObj.title.toLowerCase()
        );

        return (
          <div key={formInfoObj.key}>
            <MultipleForm
              heading={formInfoObj.title}
              inputs={formInfoObj.inputs}
              onFormMinimize={() =>
                onFormMinimize(currentFormsFilterCheckboxObj.id)
              }
              updateMultipleFormInfo={updateMultipleFormInfo}
              isFiltered={filteredForms[currentFormsFilterCheckboxObj.id]}
              defaultMultipleFormData={defaultMultipleFormData}
              formId={'form-' + formInfoObj.title.toLowerCase()}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MultipleFormsControl;
