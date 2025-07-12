function PreviewCV({ singleFormData, multipleFormData }) {
  const skillsArray = multipleFormData.find(
    (formObj) => formObj.title === 'skills'
  ).collection;

  const educationArray = multipleFormData.find(
    (formObj) => formObj.title === 'education'
  ).collection;

  const experienceArray = multipleFormData.find(
    (formObj) => formObj.title === 'experience'
  ).collection;

  return (
    <div className='bg-sky-50  p-0.5 dark:bg-gray-900'>
      <div className='container font-body xl:max-w-[900px] mx-auto px-2 py-2'>
        <article className='h-full w-full bg-gray-50 p-3 border-1 border-slate-200  print-only shadow-2xl'>
          <section className='flex border-1 border-slate-200  py-12.5 flex-col items-center max-w-[500px] mx-auto'>
            <h1 className='text-4xl font-light relative capitalize text-gray-900 before:absolute before:top-[70%] before:left-[50%] before:translate-x-[-50%] before:h-4 before:w-[180px] before:bg-red-200 before:z-[1] before:rounded-lg'>
              <span className='z-9 relative'>
                {
                  singleFormData.find((formObj) => formObj.title === 'general')
                    .values['full-name']
                }
              </span>
            </h1>
            <ul className='mt-12 flex items-center flex-col gap-3 tracking-wider font-semibold text-gray-900text-sm'>
              <li>
                {
                  singleFormData.find((formObj) => formObj.title === 'contact')
                    .values['email']
                }
              </li>
              <li>
                {
                  singleFormData.find((formObj) => formObj.title === 'contact')
                    .values['location-address']
                }
              </li>
              <li>
                {
                  singleFormData.find((formObj) => formObj.title === 'contact')
                    .values['phone-number']
                }
              </li>
            </ul>
          </section>
          <section className='border-1 border-t-0 py-12.5 border-slate-200  px-3 max-w-[500px] mx-auto'>
            <h2 className="font-black text-xl uppercase text-center tracking-wide relative text-stone-900 before:content-[''] before:absolute before:top-[57.5%] before:left-[50%] before:translate-x-[-50%] before:h-4 before:w-[200px] before:bg-red-200 before:z-[1] before:rounded-lg">
              <span className='z-9 relative'>About Me</span>
            </h2>
            <p className='mt-8 text-gray-600 text-center leading-[1.5]'>
              {
                singleFormData.find((formObj) => formObj.title === 'general')
                  .values['personal-description']
              }
            </p>
          </section>
          <section className='border-1 border-t-0 border-slate-200  px-3 py-12.5 max-w-[500px] mx-auto'>
            <h2 className="font-black text-xl uppercase text-center tracking-wide relative text-stone-900  before:content-[''] before:absolute before:top-[57.5%]  before:left-[50%] before:translate-x-[-50%] before:h-4 before:w-[200px] before:bg-red-200 before:z-[1] before:rounded-lg">
              <span className='z-9 relative'>Skills</span>
            </h2>
            <ul>
              {skillsArray.map((skillItemObj) => (
                <li key={skillItemObj.key}>
                  <h3 className='text-orange-700 mt-15 font-bold text-center'>
                    {skillItemObj.values['technical-skill']}
                  </h3>
                  <p className=' text-gray-600 text-center leading-[1.5] mt-4'>
                    {skillItemObj.values['skills-description']}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className='border-1 border-t-0 border-slate-200  px-3 py-12.5 max-w-[500px] mx-auto'>
            <h2 className="font-black text-xl uppercase text-center tracking-wide relative text-stone-900  before:content-[''] before:absolute before:top-[57.5%] before:left-[50%] before:translate-x-[-50%] before:h-4 before:w-[200px] before:bg-red-200  before:z-[1] before:rounded-lg">
              <span className='z-9 relative'>Education</span>
            </h2>
            <ul>
              {educationArray.map((educationItemObj) => (
                <li key={educationItemObj.key}>
                  <h3 className='text-orange-700 mt-15 font-bold text-center'>
                    {educationItemObj.values['degree-title']}
                  </h3>
                  <p className=' text-gray-600 text-center leading-[1.5] mt-4'>
                    {educationItemObj.values['university-name']}
                  </p>
                  <p className=' text-gray-600 text-center leading-[1.5] mt-4'>
                    {educationItemObj.values['education-start-date']}
                  </p>
                  <p className=' text-gray-600 text-center leading-[1.5] mt-4'>
                    {educationItemObj.values['education-end-date']}
                  </p>
                  <p className=' text-gray-600 text-center leading-[1.5] mt-4'>
                    {educationItemObj.values.gpa === ''
                      ? ''
                      : 'GPA: ' + educationItemObj.values.gpa}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className='border-1 border-t-0 border-slate-200  px-3 py-12.5 max-w-[500px] mx-auto'>
            <h2 className="font-black text-xl uppercase text-center tracking-wide relative text-stone-900 before:content-[''] before:absolute before:top-[57.5%]  before:left-[50%] before:translate-x-[-50%] before:h-4 before:w-[200px] before:bg-red-200 0 before:z-[1] before:rounded-lg">
              <span className='z-9 relative'>Experience</span>
            </h2>
            <ul>
              {experienceArray.map((experienceItemObj) => (
                <li key={experienceItemObj.key}>
                  <h3 className='text-orange-700  mt-15 font-bold text-center'>
                    {experienceItemObj.values['company-name']}
                  </h3>
                  <p className=' text-gray-600  text-center leading-[1.5] mt-4'>
                    {experienceItemObj.values['job-title']}
                  </p>
                  <p className=' text-gray-600  text-center leading-[1.5] mt-4'>
                    {experienceItemObj.values['job-start-date']}
                  </p>
                  <p className=' text-gray-600  text-center leading-[1.5] mt-4'>
                    {experienceItemObj.values['job-end-date']}
                  </p>
                  <p className=' text-gray-600  text-center leading-[1.5] mt-4'>
                    {experienceItemObj.values['job-description']}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </article>
        <button
          type='button'
          className='bg-orange-700 text-gray-50 fixed sm:right-[50px] right-[15px] sm:top-[65px] top-[15px] z-50 tracking-wide text-sm px-5 font-bold py-4 rounded-3xl cursor-pointer shadow-md no-print'
          onClick={() => window.print()}
        >
          Export as PDF
        </button>
      </div>
    </div>
  );
}

export default PreviewCV;
