import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaAws, FaJava } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiPython, SiCplusplus } from "react-icons/si";

function About() {
  return (
    <section id="about" className="h-about flex flex-col items-center justify-center">
      <div className="text-6xl sm:text-8xl text-primary font-semibold mb-4 text-center">Hi, I'm Matthew.</div>
      <div className="text-2xl sm:text-4xl font-semibold mb-16">Software Engineer & Web Developer.</div>
      <div className="sm:text-xl mx-12 leading-8 text-center">I graduated from the University of Newcastle with a Bachelor of Software Engineering in 2024, and I am passionate about developing full-stack web applications. I also enjoy developing games and mobile apps in my free time. I have experience with the following technologies:</div>
      <div className="flex flex-wrap gap-x-4 gap-y-8 mx-8 mt-8 justify-center">
        <div className='flex flex-col items-center gap-2'>
          <FaHtml5 title="HTML" size={48} className="text-orange-600 hover:cursor-pointer" />
          <div>HTML</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <FaCss3Alt title="CSS" size={48} className="text-blue-600 hover:cursor-pointer" />
          <div>CSS</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <FaJsSquare title="JavaScript" size={48} className="text-yellow-500 hover:cursor-pointer" />
          <div>JavaScript</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <SiTypescript title="TypeScript" size={48} className="text-blue-600 hover:cursor-pointer" />
          <div>TypeScript</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <FaReact title="React" size={48} className="text-blue-400 hover:cursor-pointer" />
          <div>React</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <FaNode title="Node.js" size={48} className="text-green-500 hover:cursor-pointer" />
          <div>Node</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <RiNextjsFill title="Next.js" size={48} className="text-gray-700 hover:cursor-pointer" />
          <div>NextJS</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <FaAws title="Amazon Web Services" size={48} className="text-orange-400 hover:cursor-pointer" />
          <div>AWS</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <SiPython title="Python" size={48} className="text-yellow-400 hover:cursor-pointer" />
          <div>Python</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <FaJava title="Java" size={48} className="text-red-600 hover:cursor-pointer" />
          <div>Java</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <SiCplusplus title="C++" size={48} className="text-blue-500 hover:cursor-pointer" />
          <div>C++</div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <RiTailwindCssFill title="Tailwind CSS" size={48} className="text-cyan-400 hover:cursor-pointer" />
          <div>Tailwind CSS</div>
        </div>
      </div>
    </section>
  )
}

export default About
