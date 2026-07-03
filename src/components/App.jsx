import React, { useState } from 'react'; // <--- Added 'useState' here
import Game from './Game.jsx';
import Evolution from './Evolution.jsx';
import '../styles/tailwind.css';

export default function App() {
  const [currentView, setCurrentView] = useState('evolution');

  return (
    <main>
      {currentView === 'evolution' && (
        <>
          <Evolution />
          <div className="flex justify-end w-full px-30">
            <button 
              onClick={() => setCurrentView('game')}
              className="flex items-center gap-2 mt-10 text-lg font-bold hover:text-blue-600 transition-colors"
            >
              Next: Terminal Game <span>&rarr;</span>
            </button>
          </div>
        </>
      )}
      {currentView === 'game' && <Game />}
    </main>
  );
}