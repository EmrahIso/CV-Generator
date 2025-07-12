import { useState } from 'react';
import HeaderNavigation from './HeaderNavigation.jsx';
import FormFilter from './FormFilter.jsx';
import PreviewCV from './PreviewCV.jsx';
import ControlPanel from './ControlPanel.jsx';
import Footer from './Footer.jsx';

function App() {
  const [colorTheme, setColorTheme] = useState('light');

  const [appState, setAppState] = useState('edit');

  const [cvSingleData, setCvSingleData] = useState([
    {
      title: 'general',
      values: {
        'full-name': 'Emrah Isovic',
        'personal-description': `I'm a 17-year-old aspiring frontend web developer from Sarajevo, BiH, focused on crafting intuitive user experiences and clean UI design. Always learning, always building.`,
      },
      key: 'general-cv-data',
    },
    {
      title: 'contact',
      values: {
        email: 'emrahisovic20@gmail.com',
        'phone-number': '+123 456 78 90',
        'location-address': 'Sarajevo, BiH',
      },
      key: 'contact-cv-data',
    },
  ]);

  const updateSingleFormInfo = (key, newObjValue) => {
    const copyCVSingleData = [...cvSingleData];

    const newCvSingleData = copyCVSingleData.filter(
      (formData) => formData.key !== key
    );
    newCvSingleData.push(newObjValue);

    setCvSingleData(newCvSingleData);
  };

  const [cvMultipleData, setCvMultipleData] = useState([
    {
      title: 'skills',
      collection: [
        {
          values: {
            'technical-skill': 'Front-End Developer',
            'skills-description':
              'I specialize in building responsive, accessible, and visually appealing web interfaces using modern frontend technologies. ',
          },
          key: 'skills-item-0',
        },
      ],
      key: 'skills-cv-data',
    },
    {
      title: 'education',
      collection: [
        {
          values: {
            'university-name': 'University Nowhere',
            'degree-title': 'Bachelor of Statistics',
            'education-start-date': '',
            'education-end-date': '',
            gpa: '',
          },
          key: 'education-item-0',
        },
      ],
      key: 'education-cv-data',
    },
    {
      title: 'experience',
      collection: [
        {
          values: {
            'company-name': 'SomeCompany',
            'job-title': 'Software Engineer',
            'job-start-date': '',
            'job-end-date': '',
            'job-description': '',
          },
          key: 'experience-item-0',
        },
      ],
      key: 'experience-cv-data',
    },
  ]);

  const updateMultipleFormInfo = (key, newObjValue) => {
    const keyID = key + '-cv-data';

    const copyCVMultipleData = [...cvMultipleData];

    const newCVMultipleData = copyCVMultipleData.filter(
      (formData) => formData.key !== keyID
    );

    newCVMultipleData.push(newObjValue);

    setCvMultipleData(newCVMultipleData);
  };

  const changeColorThemeHandler = () => {
    setColorTheme(colorTheme === 'light' ? 'dark' : 'light');
  };

  const changeAppStateHandler = () => {
    setAppState(appState === 'edit' ? 'preview' : 'edit');
  };

  return (
    <main
      id='theme-control'
      className={'bg-sky-50 dark:bg-gray-900 font-body ' + colorTheme}
    >
      {appState === 'edit' ? (
        <div className='container xl:max-w-[1280px] mx-auto px-4 py-4 grid grid-cols-1 no-print'>
          <HeaderNavigation
            colorTheme={colorTheme}
            changeColorThemeHandler={changeColorThemeHandler}
          />
          <p className='text-gray-600 dark:text-gray-400 mt-8 text-sm'>
            Create your CV with CVision cv-generator. Fill up the forms and
            submit changes to see results in the preview.
          </p>
          <FormFilter
            updateSingleFormInfo={updateSingleFormInfo}
            defaultSingleFormData={cvSingleData}
            updateMultipleFormInfo={updateMultipleFormInfo}
            defaultMultipleFormData={cvMultipleData}
          />
          <Footer />
        </div>
      ) : (
        <PreviewCV
          singleFormData={cvSingleData}
          multipleFormData={cvMultipleData}
        />
      )}
      <ControlPanel
        changeAppStateHandler={changeAppStateHandler}
        appStateValue={appState}
      />
    </main>
  );
}

export default App;
