import { Routes, Route, Link } from 'react-router-dom';
import AuthSection from './components/AuthSection';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full max-w-md p-8 bg-white rounded shadow flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold">Finance Personnelle</h1>
        <nav className="flex gap-4 mt-4">
          <Link to="/" className="text-blue-600 hover:underline">Accueil</Link>
          <Link to="/auth" className="text-blue-600 hover:underline">Authentification</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/auth" element={<AuthSection />} />
        <Route path="/" element={<MainContent />} />
      </Routes>
    </div>
  );
}

export default App;
