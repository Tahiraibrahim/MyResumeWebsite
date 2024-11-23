export default function Experience() {
    return (
      <section id="experience" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00DC82] to-[#36E4DA] text-transparent bg-clip-text">
          Experience
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00DC82] to-[#36E4DA] hidden md:block" />
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -left-3 top-0 w-7 h-7 bg-[#00DC82] rounded-full hidden md:block" />
              <div className="ml-0 md:ml-8">
                <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-8 rounded-xl border border-[#36E4DA]/20">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00DC82] to-[#36E4DA] text-transparent bg-clip-text">
                    AI Language Model
                  </h3>
                  <p className="text-[#00DC82] mt-2">Fontend Developer</p>
                  <p className="text-gray-400 mt-1">2024 - Present</p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li>• Assisted users with various tasks including coding, analysis, and writing</li>
                    <li>• Developed solutions for complex technical problems</li>
                    <li>• Provided detailed explanations and documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }