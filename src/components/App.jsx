import { useState } from 'react'; 
// interactive activity
import Game from './Game.jsx';
// galleries
import Foundation from './Foundations.jsx';
import Structure from './Structures.jsx';
import Birth from './Birth.jsx';
// timelines
import * as G1 from './Gallery1.jsx'
import '../styles/tailwind.css';

export default function App() {
  const [currentView, setCurrentView] = useState('start');

  return (
    <main className="min-h-screen bg-black">
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
          <div className="flex-grow">
            <Foundation setCurrentView={setCurrentView} />
          </div>
          
          <div className="flex justify-end w-full px-16 pb-10 font-bold text-lg text-white">
            <button onClick={() => setCurrentView('structure')}>
              Next: Structure &rarr;
            </button>
          </div>
        </div>
      )}

      {currentView === 'structure' && (
        <div className="flex flex-col">
          <div className="flex-grow">
            <Structure />
          </div>
          
          <div className="flex justify-end w-full px-16 pb-10 font-bold text-lg text-white">
            <button onClick={() => setCurrentView('birth')}>
              Next: Birth &rarr;
            </button>
          </div>
        </div>
      )}

      {currentView === 'birth' && (
        <div className="flex flex-col">
          <div className="flex-grow">
            <Birth />
          </div>
          
          <div className="flex justify-end w-full px-16 pb-10 font-bold text-lg text-white">
            <button onClick={() => setCurrentView('game')}>
              Next: Game &rarr;
            </button>
          </div>
        </div>
      )}
      
      {currentView === 'game' && (
        <div className="flex flex-col">
          <div className="flex-grow">
            <Game />
          </div>
        </div>
      )}

      {currentView === 'darpa' && (
        <div className="flex flex-col">
          <div className="flex-grow">
            <G1.Darpa />
          </div>
        </div>
      )}
    </main>
  );
}