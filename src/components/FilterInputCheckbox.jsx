function FilterInputCheckbox({ value, isChecked, onToggle, id }) {
  return (
    <div>
      <input
        type='checkbox'
        name='filteredForms'
        id={id}
        value={value}
        className='filter-forms-inputs opacity-0 w-0 pointer-events-none'
        checked={isChecked}
        onChange={onToggle}
      />
      <label
        htmlFor={id}
        className={
          'px-2.5 pt-1 pb-1.5 rounded-2xl inline-block text-center cursor-pointer focusable border-1 transition-colors duration-200 shadow-sm ' +
          (isChecked
            ? 'bg-orange-700 text-white border-transparent '
            : 'bg-white border-slate-200 text-gray-900 dark:text-white dark:border-gray-600 dark:bg-gray-700 ')
        }
      >
        <span className='text-sm'>{value}</span>
      </label>
    </div>
  );
}

export default FilterInputCheckbox;
