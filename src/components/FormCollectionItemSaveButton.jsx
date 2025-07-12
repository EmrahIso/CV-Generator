function FormCollectionItemSaveButton({
  itemId,
  formId,
  itemSaveButtonClickHandler,
}) {
  return (
    <div>
      <button
        className='font-semibold tracking-wide bg-orange-700 px-5 py-2.5 rounded-xl focus:outline-black text-gray-50 cursor-pointer'
        type='submit'
        onClick={itemSaveButtonClickHandler}
        data-item-id={itemId}
        data-form-id={formId}
      >
        Save
      </button>
    </div>
  );
}

export default FormCollectionItemSaveButton;
