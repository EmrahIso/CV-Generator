import SingleForm from './SingleForm';
import singleFormsConfig from '../singleFormsConfig';
import formCheckboxTypes from '../formCheckboxConfig';

function SingleFormsControl({
  onFormMinimize,
  filteredForms,
  updateSingleFormInfo,
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
              heading={formInfoObj.title}
              inputs={formInfoObj.inputs}
              onFormMinimize={() => onFormMinimize(id)}
              isFiltered={filteredForms[currentFormsFilterCheckboxObj.id]}
              updateSingleFormInfo={updateSingleFormInfo}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SingleFormsControl;
