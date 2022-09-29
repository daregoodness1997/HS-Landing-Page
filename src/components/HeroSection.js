export default function HeroSection() {
  return (
    <>
      <main className='lg:relative bg-white'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>Bedside diagnosis </span>
              <span className='block text-blue-600 xl:inline'>
                just became easier.
              </span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Our App-Based Click-a-Diagnosis digital product is a user-friendly
              platform that makes medical diagnosis easier and faste
            </p>
            <div className='mt-10 flex  sm:flex sm:justify-center lg:justify-start   lg:align-center'>
              <input className=' box-border bg-gray-100 mr-4 py-4 px-4 w-full rounded-md ' />
              <button className='text-base rounded-md text-white bg-blue-600  hover:bg-blue-700  px-4 '>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='relative grid place-items-center w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full bg-gradient-to-t from-blue-200 '>
          <img
            className='object-fit absolute right-16 top-12 hidden lg:block '
            src='/assets/rec.png'
            alt=''
          />
          <img className='object-fit' src='/assets/doc.png' alt='' />
        </div>
      </main>
    </>
  );
}
