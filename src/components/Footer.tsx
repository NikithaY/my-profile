import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-blue-500/20 bg-slate-900/50 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <Mail size={20} className="text-blue-400" />
            <a
              href="mailto:nikithayuvaraj4@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              nikithayuvaraj4@gmail.com
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nikitha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
