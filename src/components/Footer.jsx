function Footer() {
  return (
    <footer>
      <div className='px-3 py-5 rounded-xl bg-[white] dark:bg-gray-800 flex gap-3 items-center justify-center'>
        <p className='text-center text-sm text-gray-800 dark:text-gray-300'>
          <span>Created by </span>
          <a
            href='https://github.com/EmrahIso'
            target='_blank'
            rel='noopener noreferrer'
            className='text-orange-700 dark:text-orange-500 decoration-1 underline'
          >
            Emrah Isovic
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
