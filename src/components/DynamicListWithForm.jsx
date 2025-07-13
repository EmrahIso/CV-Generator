function DynamicListWithForm({
  data,
  heading,
  deleteDynamicListItemHandler,
  editDynamicListItemHandler,
}) {
  return (
    <div>
      <h3>Your {heading}: (max: 5) </h3>
      <ul className='pb-10 pt-3.5'>
        {data.map((dataObj) => {
          let optionsName;

          switch (heading) {
            case 'skills':
              optionsName = dataObj.values['technical-skill'];
              break;
            case 'education':
              optionsName = dataObj.values['university-name'];
              break;
            case 'experience':
              optionsName = dataObj.values['company-name'];
              break;
          }

          return (
            <li
              className='py-2.5 border-b-1 border-gray-200 dark:border-gray-600 flex justify-between items-center'
              key={dataObj.key}
            >
              <h4 className='sm:text-base text-sm text-gray-600 dark:text-gray-300'>
                {optionsName}
              </h4>
              <div className='flex gap-5'>
                <button
                  className='cursor-pointer bg-transparent hover:bg-gray-100 hover:dark:bg-gray-600 px-3 py-2 rounded-lg'
                  type='button'
                  id={'list-' + dataObj.key}
                  onClick={editDynamicListItemHandler}
                >
                  <img
                    src='./src/assets/edit.svg'
                    alt='edit button icon'
                    className='pointer-events-none h-6 w-6'
                  />
                </button>
                <button
                  className='cursor-pointer bg-transparent hover:bg-gray-100  hover:dark:bg-gray-600 px-3 py-2 rounded-lg'
                  type='button'
                  id={'list-' + dataObj.key}
                  onClick={deleteDynamicListItemHandler}
                >
                  <img
                    src='./src/assets/delete.svg'
                    alt='delete button icon'
                    className='pointer-events-none h-6 w-6'
                  />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DynamicListWithForm;
