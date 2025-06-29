import ThemeButton from './ThemeButton';

function HeaderNavigation({ colorTheme, changeColorThemeHandler }) {
  return (
    <header>
      <div className='px-3 py-3 rounded-xl bg-[white] dark:bg-gray-800 flex items-center justify-between'>
        <h1 className='text-xl font-semibold tracking-wide text-neutral-900 dark:text-neutral-50'>
          <span className='text-amber-600 dark:text-amber-400'>CV</span>ision
        </h1>
        <ThemeButton
          colorTheme={colorTheme}
          changeColorThemeHandler={changeColorThemeHandler}
        />
      </div>
    </header>
  );
}

export default HeaderNavigation;
