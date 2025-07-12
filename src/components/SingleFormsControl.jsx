import SingleForm from './SingleForm.jsx';
import singleFormsConfig from '../singleFormsConfig.js';
import formCheckboxTypes from '../formCheckboxConfig.js';

function SingleFormsControl({
  onFormMinimize,
  filteredForms,
  updateSingleFormInfo,
  defaultSingleFormData,
}) {
  return (
    <div>
      {singleFormsConfig.map((formInfoObj) => {
        const currentFormsFilterCheckboxObj = formCheckboxTypes.find(
          (formCheckboxType) =>
            formCheckboxType.title.toLowerCase() ===
            formInfoObj.title.toLowerCase()
        );

        const id = currentFormsFilterCheckboxObj.id; // This id is used by minimize form button so that onFormMinimize updates right filterFormCheckbox

        return (
          <div key={formInfoObj.key}>
            <SingleForm
              formId={'form-' + formInfoObj.title.toLowerCase()}
              heading={formInfoObj.title}
              inputs={formInfoObj.inputs}
              onFormMinimize={() => onFormMinimize(id)}
              isFiltered={filteredForms[currentFormsFilterCheckboxObj.id]}
              updateSingleFormInfo={updateSingleFormInfo}
              defaultSingleFormData={defaultSingleFormData}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SingleFormsControl;
