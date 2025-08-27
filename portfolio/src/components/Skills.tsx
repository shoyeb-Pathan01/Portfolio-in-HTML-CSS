'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Palette,
  Zap
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-8 h-8" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'PWA'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps',
      icon: <GitBranch className="w-8 h-8" />,
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Git', 'Linux'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8" />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase', 'Supabase'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Design',
      icon: <Palette className="w-8 h-8" />,
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'Photoshop', 'Illustrator', 'Sketch'],
      color: 'from-pink-500 to-rose-500'
    },
  ]

  const floatingIcons = [
    { icon: <Globe />, delay: 0 },
    { icon: <Zap />, delay: 1 },
    { icon: <Code />, delay: 2 },
    { icon: <Database />, delay: 3 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-primary-200 dark:text-primary-800 opacity-10"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
            style={{
              left: `${20 + index * 20}%`,
              top: `${20 + index * 15}%`,
              fontSize: '4rem',
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group relative"
            >
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Floating Icon */}
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4 shadow-lg`}
                >
                  {category.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-10 blur-xl`} />
                </div>

                {/* 3D Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-700 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Proficiency Levels
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: 'JavaScript/TypeScript', level: 95 },
              { skill: 'React/Next.js', level: 90 },
              { skill: 'Node.js/Express', level: 85 },
              { skill: 'Database Design', level: 80 },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.skill}
                  </span>
                  <span className="text-primary-600 dark:text-primary-400 font-bold">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills