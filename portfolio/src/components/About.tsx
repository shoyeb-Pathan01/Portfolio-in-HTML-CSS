'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ 
                  rotateY: 15,
                  rotateX: 5,
                  scale: 1.05
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="John Doe - Full Stack Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-purple-600/20"></div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Building the Future, One Line at a Time
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating 
              scalable web applications using modern technologies like React, Next.js, and Node.js. 
              My passion lies in transforming complex problems into elegant, user-friendly solutions.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in continuous learning 
              and staying ahead of the curve in this ever-evolving field.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </motion.div>
            </div>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About