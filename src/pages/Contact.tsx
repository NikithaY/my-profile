import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { slideInUp, slideInLeft } from '../utils/animations';
import Button from '../components/Button';
import Card from '../components/Card';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const header = useScrollAnimation();
  const form = useScrollAnimation();
  const email = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      );
    }
  };

  return (
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div ref={header.ref} className="text-center mb-20">
          <div style={slideInUp(header.isVisible)}>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
          </div>
          <div style={slideInUp(header.isVisible, 0.2)}>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? I'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div ref={form.ref} style={slideInLeft(form.isVisible)}>
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center space-x-3 animate-slide-down">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <p className="text-green-400 text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center space-x-3 animate-slide-down">
                    <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'loading'}
                  className="w-full"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </Card>
          </div>

          <div ref={email.ref} style={slideInLeft(email.isVisible, 0.2)}>
            <Card>
              <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-8">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-full">
                  <Mail className="text-white" size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Email Me Directly</h3>
                  <p className="text-gray-400 mb-4">
                    Prefer to send an email? Reach out directly at:
                  </p>
                  <a
                    href="mailto:nikithayuvaraj4@gmail.com"
                    className="text-blue-400 hover:text-cyan-400 text-lg font-medium transition-colors break-all"
                  >
                    nikithayuvaraj4@gmail.com
                  </a>
                </div>
                <p className="text-gray-500 text-sm">
                  I typically respond within 24-48 hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
