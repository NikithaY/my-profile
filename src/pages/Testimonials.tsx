import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { slideInLeft, slideInRight, slideInUp } from '../utils/animations';
import Card from '../components/Card';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const header = useScrollAnimation();
  const testimonial1 = useScrollAnimation();
  const testimonial2 = useScrollAnimation();
  const testimonial3 = useScrollAnimation();

  const testimonials = [
    {
      quote:
        "Nikitha's curiosity and creativity set her apart. She doesn't just accept information—she questions, explores, and finds innovative ways to apply what she learns. Her enthusiasm for both technical and creative subjects is truly inspiring.",
      name: 'Ms. Priya Sharma',
      role: 'Teacher',
      animation: slideInLeft,
      ref: testimonial1,
    },
    {
      quote:
        "Working with Nikitha on group projects has been amazing. She brings fresh perspectives to problem-solving and always encourages the team to think outside the box. Her leadership and collaborative spirit make every project better.",
      name: 'Arjun Mehta',
      role: 'Peer',
      animation: slideInRight,
      ref: testimonial2,
    },
    {
      quote:
        "What impresses me most about Nikitha is her dedication to learning. She balances her studies with her passion for music and technology effortlessly. Her commitment to growth and her willingness to take on new challenges show true promise.",
      name: 'Dr. Rajesh Kumar',
      role: 'Mentor',
      animation: slideInLeft,
      ref: testimonial3,
    },
  ];

  return (
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div ref={header.ref} className="text-center mb-20">
          <div style={slideInUp(header.isVisible)}>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
          </div>
          <div style={slideInUp(header.isVisible, 0.2)}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kind words from teachers, peers, and mentors who've been part of my journey
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} ref={testimonial.ref.ref}>
              <div style={testimonial.animation(testimonial.ref.isVisible, 0.2)}>
                <Card>
                  <div className="relative">
                    <Quote
                      className="absolute -top-2 -left-2 text-blue-500/20"
                      size={48}
                    />
                    <div className="relative z-10 pl-8">
                      <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="border-t border-blue-500/20 pt-4">
                        <p className="text-white font-semibold text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-blue-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div style={slideInUp(header.isVisible, 0.4)}>
            <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg px-6 py-4">
              <p className="text-gray-300 text-sm">
                <span className="text-blue-400 font-semibold">Note:</span> These testimonials
                reflect the perspectives of those who have worked with me in various capacities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
