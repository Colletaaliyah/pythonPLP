import React, { useState } from 'react';
import { Bird } from './models/animals/Bird';
import { Fish } from './models/animals/Fish';
import { Cheetah } from './models/animals/Cheetah';
import { Bird as BirdIcon, Fish as FishIcon, Cat } from 'lucide-react';

function App() {
  const [movements, setMovements] = useState<string[]>([]);
  const [animals] = useState(() => [
    new Bird('Swift', 'Eagle', 120),
    new Fish('Finn', 'Dolphin', 37),
    new Cheetah('Dash', 'Cheetah', 110)
  ]);

  const handleMove = (animal: Bird | Fish | Cheetah) => {
    const movement = animal.move();
    setMovements(prev => [movement, ...prev]);
  };

  const getIcon = (animal: Bird | Fish | Cheetah) => {
    if (animal instanceof Bird) return <BirdIcon className="w-6 h-6" />;
    if (animal instanceof Fish) return <FishIcon className="w-6 h-6" />;
    return <Cat className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Animal Kingdom</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {animals.map((animal, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                {getIcon(animal)}
                <div>
                  <h2 className="text-xl font-bold">{animal.getName()}</h2>
                  <p className="text-sm text-gray-300">{animal.getSpecies()}</p>
                </div>
              </div>
              <button
                onClick={() => handleMove(animal)}
                className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
              >
                Move
              </button>
            </div>
          ))}
        </div>

        <div className="bg-black/30 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Movement Log</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {movements.map((movement, index) => (
              <p key={index} className="text-gray-300 animate-fade-in">
                {movement}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;