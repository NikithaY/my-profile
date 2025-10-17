import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { slideInLeft, slideInRight, slideInUp } from '../utils/animations';
import Card from '../components/Card';
import {
  GraduationCap,
  Award,
  Target,
  Code2,
  Music,
  Brain,
  Sparkles,
} from 'lucide-react';

export default function About() {
  const intro = useScrollAnimation();
  const journey = useScrollAnimation();
  const skills = useScrollAnimation();
  const interests = useScrollAnimation();

  const technicalSkills = [
    { name: 'JavaScript', icon: Code2, color: 'from-yellow-500 to-yellow-600' },
    { name: 'HTML', icon: Code2, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { name: 'C++', icon: Code2, color: 'from-blue-600 to-purple-600' },
    { name: 'Python', icon: Code2, color: 'from-green-500 to-blue-500' },
  ];

  return (
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div ref={intro.ref} className="text-center mb-20">
          <div style={slideInUp(intro.isVisible)}>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
          </div>
          <div style={slideInUp(intro.isVisible, 0.2)}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A commerce graduate turned aspiring data scientist, currently pursuing excellence
              at IIT Madras
            </p>
          </div>
        </div>

        <div ref={journey.ref} className="space-y-8 mb-20">
          <div style={slideInRight(journey.isVisible)}>
            <Card>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Commerce Graduate</h2>
                  <p className="text-gray-300 leading-relaxed">
                    My journey began with a strong foundation in commerce, where I developed
                    analytical thinking and problem-solving skills that now fuel my passion for
                    data science and technology.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div style={slideInLeft(journey.isVisible, 0.2)}>
            <Card>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg flex-shrink-0">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">IIT Madras BS Degree</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Selected for the prestigious IIT Madras BS degree program, I'm combining
                    rigorous academic training with practical skills to build a solid foundation
                    in data science and technology.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div style={slideInRight(journey.isVisible, 0.4)}>
            <Card>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-lg flex-shrink-0">
                  <Target className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Aspiring Data Scientist</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Currently in Grade 12, I'm on a mission to become a data scientist. I'm
                    constantly learning, experimenting, and building projects that bridge the gap
                    between theory and real-world applications.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div ref={skills.ref} className="mb-20">
          <div style={slideInUp(skills.isVisible)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
              <Brain className="text-cyan-400" size={32} />
              <span>Technical Skills</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Building a strong foundation in programming and development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={skill.name} style={slideInUp(skills.isVisible, 0.1 * index)}>
                <Card hover={true}>
                  <div className="flex flex-col items-center space-y-3 py-2">
                    <div
                      className={`bg-gradient-to-br ${skill.color} p-3 rounded-lg`}
                    >
                      <skill.icon className="text-white" size={28} />
                    </div>
                    <span className="text-white font-semibold">{skill.name}</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div ref={interests.ref}>
          <div style={slideInUp(interests.isVisible)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
              <Sparkles className="text-cyan-400" size={32} />
              <span>Interests & Passions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div style={slideInLeft(interests.isVisible, 0.2)}>
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg flex-shrink-0">
                    <Code2 className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Technology & Innovation</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Fascinated by how technology shapes our world. I love exploring new
                      programming languages, frameworks, and tools that push the boundaries of
                      what's possible.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div style={slideInRight(interests.isVisible, 0.2)}>
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg flex-shrink-0">
                    <Music className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Music & Sound Engineering
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Passionate about music composition and sound engineering. I find joy in
                      creating and manipulating audio, understanding the science behind perfect
                      sound.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
