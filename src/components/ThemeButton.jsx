function ThemeButton({ changeColorThemeHandler, colorTheme }) {
  return (
    <button
      onClick={changeColorThemeHandler}
      className='cursor-pointer py-1.5 px-2 rounded-lg bg-neutral-100 dark:bg-gray-700 shadow-xs'
      type='button'
    >
      <img
        src='./src/assets/sunny-outline.svg'
        alt='Light Color Theme Icon'
        className={'h-7 w-7 ' + (colorTheme === 'light' ? 'hidden' : 'block')}
      />
      <img
        src='./src/assets/moon-outline.svg'
        alt='Dark Color Theme Icon'
        className={'h-7 w-7 ' + (colorTheme === 'dark' ? 'hidden' : 'block')}
      />
    </button>
  );
}

export default ThemeButton;
