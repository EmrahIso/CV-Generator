import ThemeButton from './ThemeButton.jsx';

function HeaderNavigation({ colorTheme, changeColorThemeHandler }) {
  return (
    <header>
      <div className='px-3 py-3 rounded-xl bg-[white] dark:bg-gray-800'>
        <nav className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold tracking-wide text-neutral-900 dark:text-neutral-50'>
            <span className='text-orange-700 dark:text-orange-600'>CV</span>
            ision
          </h1>
          <ThemeButton
            colorTheme={colorTheme}
            changeColorThemeHandler={changeColorThemeHandler}
          />
        </nav>
      </div>
    </header>
  );
}

export default HeaderNavigation;
