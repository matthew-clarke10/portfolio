import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="bg-background-nav h-16 fixed w-full">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex-1 flex justify-center sm:justify-start">
            <div className="text-2xl font-medium text-primary mx-auto sm:mx-0">Matthew Clarke</div>
          </div>
          <div className="items-center pr-2 sm:ml-6 sm:pr-0">
            <div className="flex space-x-4 relative">
              <a className="hidden sm:inline rounded-md px-3 py-2 text-xl font-medium text-primary hover:bg-gray-800 hover:text-primary-hover hover:cursor-pointer" onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>About</a>
              <a className="hidden sm:inline rounded-md px-3 py-2 text-xl font-medium text-primary hover:bg-gray-800 hover:text-primary-hover hover:cursor-pointer" onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  const viewProjectsButton = document.getElementById('viewProjects');
                  if (viewProjectsButton) {
                    viewProjectsButton.style.display = 'none';
                  }
                  projectsSection.style.display = 'flex';
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>Projects</a>
              <a href="./resume.pdf" target="_blank" className="absolute -top-6 right-0 sm:static rounded-md px-3 py-2 text-xl font-medium text-primary hover:bg-gray-800 hover:text-primary-hover border-2 border-primary hover:border-primary-hover">
                Resume <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
