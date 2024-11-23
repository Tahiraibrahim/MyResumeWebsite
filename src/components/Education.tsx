export default function Education() {
    return (
      <section id="education" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00DC82] to-[#36E4DA] text-transparent bg-clip-text">
          Education
        </h2>
        <div className="space-y-8">
          {[
            {
              degree: 'Frontend developer Advanced AI Training',
              school: 'From Governor House',
              year: '2024',
              color: 'from-[#00DC82] to-[#36E4DA]'
            },
            {
              degree: 'Digital Marketing',
              school: 'Bano Qabil',
              year: '2023',
              color: 'from-[#36E4DA] to-[#0EA5E9]'
            }
          ].map((edu) => (
            <div key={edu.degree} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00DC82]/10 to-[#36E4DA]/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-8 rounded-xl border border-[#36E4DA]/20">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${edu.color} text-transparent bg-clip-text`}>
                  {edu.degree}
                </h3>
                <p className="text-[#00DC82] text-lg mt-2">{edu.school}</p>
                <p className="text-gray-400 mt-1">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }