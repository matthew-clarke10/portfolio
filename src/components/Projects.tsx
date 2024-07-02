import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function Projects() {
  return (
    <section id="projects" className="h-projects flex flex-col items-center">
      <h2 className="text-6xl text-primary text-center font-semibold mt-16 mb-8">My Projects</h2>
      <section className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-16">
        <div className="flex flex-col border-8 border-primary w-11/12 mx-auto">
          <img src="/images/weather-app-project.png" alt="Placeholder" className="w-full" />
          <div className="flex flex-col mx-auto text-center">
            <div className="text-4xl my-4">EasyWeather</div>
            <div className="mx-4">A weather application that uses the OpenWeatherMap API. Users can search weather for locations, view the weather for their current location, and view weather for popular cities. Both the weather today and the weather over the next two weeks are available.</div>
            <div className="flex flex-wrap gap-4 mx-8 my-4 justify-center">
              <FaHtml5 title="HTML" size={36} className="text-orange-600 hover:cursor-pointer" />
              <FaCss3Alt title="CSS" size={36} className="text-blue-600 hover:cursor-pointer" />
              <FaJsSquare title="JavaScript" size={36} className="text-yellow-500 hover:cursor-pointer" />
              <SiTypescript title="TypeScript" size={36} className="text-blue-600 hover:cursor-pointer" />
              <FaReact title="React" size={36} className="text-blue-400 hover:cursor-pointer" />
              <RiTailwindCssFill title="Tailwind CSS" size={36} className="text-cyan-400 hover:cursor-pointer" />
            </div>
            <div className="flex flex-row justify-center gap-8 mb-8 text-2xl">
              <a href="" className="px-3 py-2 text-primary hover:text-primary-hover border-4 border-primary hover:border-primary-hover rounded-lg">GitHub <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" /></a>
              <a href="" className="px-3 py-2 text-primary hover:text-primary-hover border-4 border-primary hover:border-primary-hover rounded-lg">View it Live <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-200 w-11/12 h-80 mx-auto">
          <img src="/images/placeholder.png" alt="Placeholder" className="w-320 h-320" />
          <div className="flex flex-col mx-auto text-center">
            <div>Project Title</div>
            <div>Technologies Used</div>
            <div>Project Description</div>
            <div className="flex flex-row">
              <a href="">GitHub</a>
              <a href="">View it Live</a>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-200 w-11/12 h-80 mx-auto mb-8">
          <img src="/images/placeholder.png" alt="Placeholder" className="w-320 h-320" />
          <div className="flex flex-col mx-auto text-center">
            <div>Project Title</div>
            <div>Technologies Used</div>
            <div>Project Description</div>
            <div className="flex flex-row">
              <a href="">GitHub</a>
              <a href="">View it Live</a>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-200 w-11/12 h-80 mx-auto mb-8">
          <img src="/images/placeholder.png" alt="Placeholder" className="w-320 h-320" />
          <div className="flex flex-col mx-auto text-center">
            <div>Project Title</div>
            <div>Technologies Used</div>
            <div>Project Description</div>
            <div className="flex flex-row">
              <a href="">GitHub</a>
              <a href="">View it Live</a>
            </div>
          </div>
        </div>
      </section>
    </section >
  )
}

export default Projects
