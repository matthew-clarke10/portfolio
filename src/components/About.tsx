import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaAws } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

function About() {
  return (
    <section id="about" className="h-about flex flex-col items-center justify-center">
      <div className="text-6xl sm:text-8xl text-primary font-semibold mb-4">Hi, I'm Matthew.</div>
      <div className="text-2xl sm:text-4xl font-semibold mb-16">Software Engineer & Web Developer.</div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-16">
        <div className="sm:text-xl md:max-w-64 mx-8 leading-8 text-center">I'm currently in the final year of my Software Engineering degree and am passionate about full-stack web development.</div>
        <div>
          <div className="sm:text-xl mb-4 text-center">I have experiencing with the following:</div>
          <div className="flex flex-wrap gap-4 mx-8 md:max-w-72 justify-center">
            <FaHtml5 title="HTML" size={48} className="text-orange-600 hover:cursor-pointer" />
            <FaCss3Alt title="CSS" size={48} className="text-blue-600 hover:cursor-pointer" />
            <FaJsSquare title="JavaScript" size={48} className="text-yellow-500 hover:cursor-pointer" />
            <FaReact title="React" size={48} className="text-blue-400 hover:cursor-pointer" />
            <FaNode title="Node.js" size={48} className="text-green-500 hover:cursor-pointer" />
            <RiTailwindCssFill title="Tailwind CSS" size={48} className="text-cyan-400 hover:cursor-pointer" />
            <RiNextjsFill title="Next.js" size={48} className="text-gray-700 hover:cursor-pointer" />
            <FaAws title="Amazon Web Services" size={48} className="text-orange-400 hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
