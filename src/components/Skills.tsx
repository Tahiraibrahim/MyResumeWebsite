'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    { name: 'Natural Language Processing', color: 'from-[#00DC82] to-[#36E4DA]' },
    { name: 'Learning Html ,Css', color: 'from-[#36E4DA] to-[#0EA5E9]' },
    { name: 'Python', color: 'from-[#0EA5E9] to-[#00DC82]' },
    { name: 'JavaScript/TypeScript', color: 'from-[#00DC82] to-[#0EA5E9]' },
    { name: 'React & Next.js', color: 'from-[#36E4DA] to-[#00DC82]' },
    { name: 'Problem Solving', color: 'from-[#0EA5E9] to-[#36E4DA]' },
    { name: 'Technical Writing', color: 'from-[#00DC82] to-[#0EA5E9]' },
    { name: 'Data Analysis', color: 'from-[#36E4DA] to-[#00DC82]' },
    { name: 'Research', color: 'from-[#0EA5E9] to-[#36E4DA]' }
  ]

  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00DC82] to-[#36E4DA] text-transparent bg-clip-text">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative p-6 rounded-xl overflow-hidden bg-gradient-to-r from-[#0F172A] to-[#1E293B] border border-[#36E4DA]/20">
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                <div className="w-full h-2 bg-[#0F172A] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}