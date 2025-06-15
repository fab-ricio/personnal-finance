import AuthSection from './components/AuthSection';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full max-w-md p-8 bg-white rounded shadow flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold">Finance Personnelle</h1>
        <AuthSection />
      </header>
      <MainContent />
    </div>
  );
}

export default App;
