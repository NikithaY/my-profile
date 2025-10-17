import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { slideInLeft, slideInUp, fadeIn } from '../utils/animations';
import Button from '../components/Button';
import Card from '../components/Card';
import { Code, Music, Sparkles, ChevronRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const hero = useScrollAnimation();
  const learning = useScrollAnimation();

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div ref={hero.ref} className="text-center space-y-8">
            <div style={fadeIn(hero.isVisible)}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Who's Nikitha?
                </span>
              </h1>
            </div>

            <div style={slideInUp(hero.isVisible, 0.2)}>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A curious mind exploring the intersection of{' '}
                <span className="text-blue-400 font-semibold">data science</span>,{' '}
                <span className="text-cyan-400 font-semibold">technology</span>, and{' '}
                <span className="text-blue-300 font-semibold">creativity</span>
              </p>
            </div>

            <div style={slideInUp(hero.isVisible, 0.4)}>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Click below to discover my journey from commerce graduate to IIT Madras student,
                and everything in between
              </p>
            </div>

            <div style={slideInUp(hero.isVisible, 0.6)} className="pt-6">
              <Button onClick={() => navigate('/about')} variant="primary">
                <span className="flex items-center space-x-2">
                  <span>Discover My Story</span>
                  <ChevronRight size={20} />
                </span>
              </Button>
            </div>
          </div>

          <div ref={learning.ref} className="mt-32">
            <div style={slideInLeft(learning.isVisible)} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                <Sparkles className="text-cyan-400" size={32} />
                <span>What I'm Learning Now</span>
                <Sparkles className="text-blue-400" size={32} />
              </h2>
              <p className="text-gray-400 text-lg">
                Currently expanding my skills in these exciting areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div style={slideInLeft(learning.isVisible, 0.2)}>
                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
                      <Music className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Sound Engineering</h3>
                      <p className="text-gray-400">
                        Diving deep into audio production, mixing, and the technical art of
                        creating perfect soundscapes
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div style={slideInLeft(learning.isVisible, 0.4)}>
                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg">
                      <Code className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Advanced Python</h3>
                      <p className="text-gray-400">
                        Mastering complex algorithms, data structures, and building powerful
                        applications with Python
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
