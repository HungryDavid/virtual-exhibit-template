import { useState } from 'react'; 
import Game from './Game.jsx';
import Foundation from './Foundations.jsx';
import Structure from './Structures.jsx';
import Birth from './Birth.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import '../styles/tailwind.css';

export default function App() {
  const [currentView, setCurrentView] = useState('start');

  return (
    <main className="min-h-screen bg-black grid-bg">  
      {currentView === 'start' && (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="px-20 py-4 text-white rounded-lg text-5xl font-bold max-w-[450px] text-center">THE INTERNET'S JOURNEY</p>
          <button 
            onClick={() => setCurrentView('foundation')}
            className="px-8 py-4 bg-black text-white border-white border-2 rounded-lg text-xl font-bold hover:bg-gray-700 transition-all"
          > Let's Start
          </button>
        </div>
      )}
      
      {currentView === 'foundation' && (
        <div className="flex flex-col">
          <Breadcrumb currentView={currentView} setCurrentView={setCurrentView} />
          <div className="flex-grow">
            <Foundation />
          </div>
          <div className="flex justify-between w-full px-16 pb-10 font-bold text-lg text-white">
            <button onClick={() => setCurrentView('start')}>&larr; Back</button>
            <button onClick={() => setCurrentView('structure')}>Next: Structure &rarr;</button>
          </div>
        </div>
      )}

      {currentView === 'structure' && (
        <div className="flex flex-col">
          <Breadcrumb currentView={currentView} setCurrentView={setCurrentView} />
          <div className="flex-grow">
            <Structure />
          </div>
          <div className="flex justify-between w-full px-16 pb-10 font-bold text-lg text-white">
            <button onClick={() => setCurrentView('foundation')}>&larr; Previous: Origins</button>
            <button onClick={() => setCurrentView('birth')}>Next: Birth &rarr;</button>
          </div>
        </div>
      )}

      {currentView === 'birth' && (
        <div className="flex flex-col">
          <Breadcrumb currentView={currentView} setCurrentView={setCurrentView} />
          <div className="flex-grow">
            <Birth />
          </div>
          <div className="flex justify-between w-full px-16 pb-10 font-bold text-lg text-white">
            <button onClick={() => setCurrentView('structure')}>&larr; Previous: Structure</button>
            <button onClick={() => setCurrentView('game')}>Next: Game &rarr;</button>
          </div>
        </div>
      )}
      
      {currentView === 'game' && (
        <div className="flex flex-col">
          <Breadcrumb currentView={currentView} setCurrentView={setCurrentView} />
          <div className="flex-grow">
            <Game />
          </div>
          <div className="flex justify-start w-full px-16 pb-10 font-bold text-lg text-white">
            <button onClick={() => setCurrentView('birth')}>&larr; Previous: Birth</button>
          </div>
        </div>
      )}
    </main>
  );
}