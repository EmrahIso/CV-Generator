function FilterInputCheckbox({ value, isChecked, onToggle, id }) {
  return (
    <label
      htmlFor={id}
      className={
        'px-2.5 pt-1 pb-1.5 rounded-2xl inline-block text-center cursor-pointer border-1 transition-colors duration-200 shadow-sm ' +
        (isChecked
          ? 'bg-amber-500 text-gray-100 dark:bg-amber-500 border-transparent '
          : 'bg-white border-slate-200 text-gray-900 dark:text-white dark:border-gray-600 dark:bg-gray-700 ')
      }
    >
      <input
        type='checkbox'
        name='filteredForms'
        id={id}
        value={value}
        className='opacity-0 pointer-events-none absolute'
        checked={isChecked}
        onChange={onToggle}
      />
      <span className='text-sm'>{value}</span>
    </label>
  );
}

export default FilterInputCheckbox;
