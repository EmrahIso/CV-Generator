function FormMinimizeButton({ onFormMinimize, isMinimized }) {
  return (
    <div className='h-[40px]'>
      <button
        className='inline-block border-2 focus:outline-black  rounded-full text-white border-transparent p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer '
        type='button'
        onClick={onFormMinimize}
      >
        <img
          src='./minimize-icon.svg'
          alt='Minimize form button icon'
          className={
            'h-6 w-6 pointer-events-none ' +
            (isMinimized ? 'rotate-180' : 'rotate-0')
          }
        />
      </button>
    </div>
  );
}

export default FormMinimizeButton;
