function ControlPanel({ changeAppStateHandler, appStateValue }) {
  return (
    <div className='fixed sm:right-[50px] right-[15px] sm:bottom-[65px] bottom-[15px] z-50 no-print '>
      {appStateValue === 'edit' ? (
        <button
          type='button'
          className='bg-orange-700 text-gray-50 font-semibold tracking-wide text-sm px-5 pb-2.5 pt-2.5 rounded-3xl cursor-pointer shadow-md flex items-center gap-2'
          onClick={changeAppStateHandler}
        >
          Generate CV{' '}
          <span className='text-2xl only-firefox pb-1.5 inline-block'>
            &rarr;
          </span>
        </button>
      ) : (
        <button
          type='button'
          className='bg-orange-700  text-gray-50 font-semibold tracking-wide text-sm px-5 pb-2.5 pt-2.5 rounded-3xl cursor-pointer shadow-md flex items-center gap-2'
          onClick={changeAppStateHandler}
        >
          <span className='text-2xl only-firefox pb-1.5 inline-block'>
            &larr;
          </span>{' '}
          Edit CV
        </button>
      )}
    </div>
  );
}

export default ControlPanel;
