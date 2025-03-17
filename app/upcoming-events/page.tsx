"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, ExternalLink, Users, Award, Code, Laptop } from "lucide-react"

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-400">Check out our exciting upcoming events and mark your calendar!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Ariaro 3.0 Event Card */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl overflow-hidden shadow-xl mb-8">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-2 md:mb-0">Ariaro 3.0</h2>
                <span className="px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  Tech Symposium
                </span>
              </div>

              <p className="text-gray-300 text-lg mb-6">
                The Ultimate Tech Symposium! A 3-day tech extravaganza filled with competitions, workshops, and
                innovation! From coding battles & cybersecurity challenges to robotics, UI/UX design, and a grand
                cultural night, this is where tech meets creativity!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 mr-3 text-blue-400" />
                  <span>26th – 28th March 2025</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Karnavati University</span>
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-5 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">What's in Store?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-3 text-yellow-400 mt-1 flex-shrink-0" />
                    <span>Tech & Non-Tech Competitions</span>
                  </li>
                  <li className="flex items-start">
                    <Laptop className="w-5 h-5 mr-3 text-green-400 mt-1 flex-shrink-0" />
                    <span>Hands-on Workshops</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 mr-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Cultural Night (27th March)</span>
                  </li>
                  <li className="flex items-start">
                    <Code className="w-5 h-5 mr-3 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Project Exhibition & More!</span>
                  </li>
                </ul>
              </div>

              {/* Code-A-Thon Section */}
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/30 rounded-lg p-5 mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Developer Club is organizing Code-A-Thon!</h3>
                <p className="text-gray-300 mb-4">Join our competitive programming contest as part of Ariaro 3.0</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-5 h-5 mr-3 text-blue-400" />
                    <span>26th March 2025</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-5 h-5 mr-3 text-blue-400" />
                    <span>1:00 PM onwards</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-5 h-5 mr-3 text-blue-400" />
                    <span>Team Size: Solo</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Laptop className="w-5 h-5 mr-3 text-blue-400" />
                    <span>Platform: Codeforces</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Fees:</h4>
                  <ul className="text-gray-400 ml-8 list-disc">
                    <li>KU Student: FREE</li>
                    <li>Non-KU Student: ₹100 per participant</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Why Participate?</h4>
                  <ul className="text-gray-400 ml-8 list-disc">
                    <li>Solve real-world coding challenges</li>
                    <li>Compete with top programmers</li>
                    <li>Win exciting prizes & recognition</li>
                  </ul>
                </div>

                <div className="text-gray-300">
                  <p className="mb-2">
                    <strong>Allowed Languages:</strong> C, C++, Python, Java and Many More
                  </p>
                  <p className="mb-2">
                    <strong>Prize Pool:</strong> Exciting cash prizes & exclusive goodies for the winners!
                  </p>
                  <p className="mb-4">
                    <strong>Contact:</strong> Sarjak Patel (9429084258) | Yash Wadhvani (9904366478) | Mit Parikh
                    (7859963613) | Lithika S (8866653379)
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://ariaro.karnavatiuniversity.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="https://lu.ma/vhnta5e5?from=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

