import { useState } from 'react';
import HeaderNavigation from './HeaderNavigation.jsx';
import FormFilter from './FormFilter.jsx';
import FormsControl from './FormsControl.jsx';

function App() {
  const [colorTheme, setColorTheme] = useState('light');

  const changeColorThemeHandler = () => {
    setColorTheme(colorTheme === 'light' ? 'dark' : 'light');

    const rootEl = document.documentElement;

    rootEl.classList.add(colorTheme === 'light' ? 'dark' : 'light');
    rootEl.classList.remove(colorTheme === 'light' ? 'light' : 'dark');
  };

  return (
    <div className='container font-body xl:max-w-[1280px] mx-auto px-4 py-4 grid grid-cols-1'>
      <HeaderNavigation
        colorTheme={colorTheme}
        changeColorThemeHandler={changeColorThemeHandler}
      />
      <p className='text-gray-600 dark:text-gray-400 mt-8 text-sm'>
        Create your CV with CVision cv-generator. Fill up the forms and submit
        changes to see results in the preview.
      </p>
      <FormFilter />
      <FormsControl />
    </div>
  );
}

export default App;
