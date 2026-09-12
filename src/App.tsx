import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TechnologiesSection from './components/TechnologiesSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 py-16 text-center text-slate-400 sm:px-6 lg:px-8">
            Loading technologies...
          </div>
        }
      >
        <TechnologiesSection />
      </Suspense>
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
