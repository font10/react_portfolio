
export const Navbar = () => {
  return (
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-0 py-4">
        <a href="https://flowbite.com/" className="flex items-center">
            <span className="text-4xl font-extrabold text-white font-lato">david</span>
            <span className="text-3xl font-medium text-white font-lato ml-2">font</span>
            <span className="text-5xl font-medium text-red-400 font-lato mb-3">.</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
    </nav>
  )
}
