function NavBar() {
  return (
    <>
      <nav className="bg-background-nav">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex-1 flex justify-center sm:justify-start">
              <div className="text-2xl font-medium text-primary mx-auto sm:mx-0">Matthew Clarke</div>
            </div>
            <div className="hidden sm:flex items-center pr-2 sm:ml-6 sm:pr-0">
              <div className="flex space-x-4">
                <a href="#" className="rounded-md bg-gray-950 px-3 py-2 text-xl font-medium text-primary hover:bg-gray-800 hover:text-primary-hover" aria-current="page">About</a>
                <a href="#" className="rounded-md px-3 py-2 text-xl font-medium text-primary hover:bg-gray-800 hover:text-primary-hover">Projects</a>
                <a href="#" className="rounded-md px-3 py-2 text-xl font-medium text-primary hover:bg-gray-800 hover:text-primary-hover">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar
