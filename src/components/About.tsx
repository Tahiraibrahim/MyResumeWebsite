export default function About() {
    return (
      <section id="about" className="pt-32 pb-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00DC82]/10 to-[#36E4DA]/10 rounded-3xl" />
          <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm rounded-3xl" />
          
          <div className="relative p-8 text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#00DC82] via-[#36E4DA] to-[#0EA5E9] text-transparent bg-clip-text">
            Tahira Ibrahim
            </h1>
            <h2 className="text-2xl text-[#00DC82] mb-6">Frontend & Backend Developer Generative AI Expert</h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate Frontend & Backend Developer with a keen interest in Generative AI. Dedicated to creating innovative and efficient solutions for the digital world. Excited about combining creativity and technology to build user-centric applications
            </p>
          </div>
        </div>
      </section>
    )
  }