import { useState } from 'react';
import CustomInput from './CustomInput.jsx';
import FormMinimizeButton from './FormMinimizeButton.jsx';
import DynamicListWithForm from './DynamicListWithForm.jsx';
import FormSubmitButton from './FormSubmitButton.jsx';
import FormCollectionItemSaveButton from './FormCollectionItemSaveButton.jsx';

function MultipleForm({
  heading,
  inputs,
  onFormMinimize,
  isFiltered,
  updateMultipleFormInfo,
  defaultMultipleFormData,
  formId,
}) {
  // formsItemsCount represents the number of times MultipleForm has been submitted and a new item of that form created for CV (with all form information) has been added to the list and collection.
  // Max number of items should be 5.

  const [formsItemsCount, setFormsItemsCount] = useState(1);

  // defaultCollectionObj represents the default values for all form inputs for a particular form item  (which need be created first).

  const defaultCollectionObj = {};

  const inputsIDsArray = inputs.map((input) => input.id);

  inputsIDsArray.forEach((id) => {
    defaultCollectionObj[id] = '';
  });

  // collectionItemsObj represents the object that is and item of 'collection' property of the entire form data object. That collection property has all the information about the form items that have been submitted and added to the CV.

  const collectionItemsObj = {
    values: defaultCollectionObj,
    key: heading.toLowerCase() + '-items-',
  };

  // state formsInputsData represents an object that 'stores' the current form input values so that we can access those values when needed and so that we can have controlled inputs.

  const [formsInputsData, setFormsInputsData] = useState(defaultCollectionObj);

  const onInputChangeHandler = (e) => {
    const { id, value } = e.target;

    // update current form fields values
    setFormsInputsData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // defaultFormData object represents the default formData object used by the PreviewCV component so that it can render all information.

  const defaultFormData = defaultMultipleFormData.find(
    (formObj) => formObj.title === formId.slice(5)
  );

  // state formData 'stores' all of the form data including all collection items with its input values.

  const [formData, setFormData] = useState(defaultFormData);

  const [isEditingCurrentItem, setIsEditingCurrentItem] = useState({
    isEditing: false,
    formId: null,
    id: null,
  }); // This state variable is used to determine the behavior of form submit button. If it is false submit button should add new item to the collection. If it is true (That means that we are editing existing collection list item) it should change values of that item.

  const submitMultipleFormHandler = (e) => {
    e.preventDefault();

    const formId = e.target.id;

    // update form items counter
    setFormsItemsCount(formsItemsCount + 1);

    // Use the default collection object boilerplate
    const newInfoObj = collectionItemsObj;

    // Change key and values properties.
    newInfoObj.key = newInfoObj.key + String(formsItemsCount);
    newInfoObj.values = formsInputsData;

    // newFormDataCollection is a copy of current forms collection
    const newFormDataCollection = formData.collection;

    if (newFormDataCollection.length < 5) {
      newFormDataCollection.push(newInfoObj);

      // Update form data with new collection array
      setFormData((prevState) => ({
        ...prevState,
        collection: newFormDataCollection,
      }));

      // Reset Forms Fields to default (empty) values

      setFormsInputsData(defaultCollectionObj);

      // Update CV Information

      updateMultipleFormInfo(formId, formData);
    }
  };

  const deleteDynamicListItemHandler = (e) => {
    const { id } = e.target;

    const key = id.slice(5);

    const formId = key.split('-')[0];

    // newFormDataCollection is a copy of current forms collection
    const newFormDataCollection = formData.collection.filter(
      (dataObj) => dataObj.key !== key
    );

    // Update form data with new collection array
    setFormData((prevState) => ({
      ...prevState,
      collection: newFormDataCollection,
    }));

    // Reset Forms Fields to default (empty) values

    setFormsInputsData(defaultCollectionObj);

    setIsEditingCurrentItem({
      id: null,
      formId: null,
      isEditing: false,
    });

    // We use form Data Copy which is exactly the same as the new formData value, but formData is only updated in the render phase, so we need our copy to pass an argument to the updateMultipleFormInfo function

    const formDataCopy = {
      title: formData.title,
      collection: newFormDataCollection,
      key: formData.key,
    };

    // Update CV Information
    updateMultipleFormInfo(formId, formDataCopy);
  };

  const editDynamicListItemHandler = (e) => {
    const { id } = e.target;

    const key = id.slice(5);

    const formId = key.split('-')[0];

    // get needed information

    const listItemObj = formData.collection.find(
      (dataObj) => dataObj.key === key
    );

    setFormsInputsData(listItemObj.values);

    setIsEditingCurrentItem({
      id: key,
      formId: formId,
      isEditing: true,
    });
  };

  const itemSaveButtonClickHandler = (e) => {
    const { dataset } = e.target;

    const { formId, itemId } = dataset;

    // update form items counter
    setFormsItemsCount(formsItemsCount + 1);

    // Use the default collection object boilerplate
    const newInfoObj = collectionItemsObj;

    // Change key and values properties.
    newInfoObj.key = itemId;
    newInfoObj.values = formsInputsData;

    // newFormDataCollection is a copy of current forms collection
    const newFormDataCollection = formData.collection.filter(
      (dataObj) => dataObj.key !== itemId
    );

    newFormDataCollection.push(newInfoObj);

    // Update form data with new collection array
    setFormData((prevState) => ({
      ...prevState,
      collection: newFormDataCollection,
    }));

    // Reset Forms Fields to default (empty) values

    setFormsInputsData(defaultCollectionObj);

    // Reset isEditing

    setIsEditingCurrentItem({
      id: null,
      formId: null,
      isEditing: false,
    });

    // Update CV Information

    const formDataCopy = {
      title: formData.title,
      collection: newFormDataCollection,
      key: formData.key,
    };

    updateMultipleFormInfo(formId, formDataCopy);
  };

  return (
    <form
      action='#'
      className='bg-white p-5 rounded-2xl border-1 border-slate-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 mb-10'
      id={heading.toLowerCase()}
      onSubmit={submitMultipleFormHandler}
    >
      <div
        className={
          'flex justify-between items-center ' + (isFiltered ? 'mb-7.5' : '')
        }
      >
        <h2 className='text-xl relative text-stone-900 dark:text-gray-50 font-medium before:content-[""] before:h-1 w-[fit-content] before:bg-orange-700 before:absolute before:bottom-[20%] before:w-[40px] before:right-[-50px]'>
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
                  value={formsInputsData[inputObj.id]}
                />
              );
            })}
          </div>
          <DynamicListWithForm
            data={formData.collection}
            heading={formData.title}
            deleteDynamicListItemHandler={deleteDynamicListItemHandler}
            editDynamicListItemHandler={editDynamicListItemHandler}
          />
          {isEditingCurrentItem.isEditing ? (
            <FormCollectionItemSaveButton
              itemId={isEditingCurrentItem.id}
              formId={isEditingCurrentItem.formId}
              itemSaveButtonClickHandler={itemSaveButtonClickHandler}
            />
          ) : (
            <FormSubmitButton />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </form>
  );
}

export default MultipleForm;
