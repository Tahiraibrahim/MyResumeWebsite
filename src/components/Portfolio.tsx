export default function Portfolio() {
    const projects = [
      {
        title: 'AI Writing Assistant',
        description: 'Developed an AI-powered writing assistant to help users improve their content.',
        tech: ['Python', 'html,css', 'React'],
        color: 'from-[#00DC82] to-[#36E4DA]'
      },
      {
        title: 'Code Analysis Tool',
        description: 'Created a tool for analyzing and improving code quality.',
        tech: ['TypeScript', 'Node.js', 'html'],
        color: 'from-[#36E4DA] to-[#0EA5E9]'
      }
    ]
  
    return (
      <section id="portfolio" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00DC82] to-[#36E4DA] text-transparent bg-clip-text">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 group-hover:opacity-10 transition-all rounded-xl`} />
              <div className="relative bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-8 rounded-xl border border-[#36E4DA]/20">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}>
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span key={tech} 
                      className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.color} text-[#0F172A] font-semibold`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }