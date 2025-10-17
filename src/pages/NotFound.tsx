import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold text-white">Page Not Found</h2>
          <p className="text-gray-400 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Button onClick={() => navigate('/')} variant="primary">
          <span className="flex items-center space-x-2">
            <Home size={20} />
            <span>Back to Home</span>
          </span>
        </Button>
      </div>
    </div>
  );
}
