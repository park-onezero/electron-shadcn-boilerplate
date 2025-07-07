import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from './components/ui/button';

function Hello() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hello! 👋
          </h1>
          <p className="text-gray-600 mb-6">
            Welcome to your Electron React app with Tailwind CSS and shadcn/ui
          </p>
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform"
          >
            Get Started ✨
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
