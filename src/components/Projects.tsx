function Projects() {
  return (
    <section id="projects" className="h-projects flex flex-col items-center">
      <h2 className="text-6xl text-primary text-center font-semibold mt-16 mb-8">My Projects</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 w-full gap-y-16">
        <div className="flex flex-row bg-gray-200 w-11/12 h-80 mx-auto">
          <img src="./images/placeholder.png" alt="Placeholder" className="w-320 h-320" />
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
        <div className="flex flex-row bg-gray-200 w-11/12 h-80 mx-auto">
          <img src="./images/placeholder.png" alt="Placeholder" className="w-320 h-320" />
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
          <img src="./images/placeholder.png" alt="Placeholder" className="w-320 h-320" />
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
          <img src="./images/placeholder.png" alt="Placeholder" className="w-320 h-320" />
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
