import React, { useState } from 'react';
import { SpeedHero } from './models/heroes/SpeedHero';
import { ElementalHero } from './models/heroes/ElementalHero';
import { Zap, Flame } from 'lucide-react';

function App() {
  const [speedHero] = useState(() => new SpeedHero('Barry Allen', 'The Flash'));
  const [elementalHero] = useState(() => new ElementalHero('Caitlin Snow', 'Frost'));
  const [messages, setMessages] = useState<string[]>([]);
  
  const useHeroPower = (hero: SpeedHero | ElementalHero) => {
    const message = hero.usePower();
    setMessages(prev => [...prev, message]);
  };

  const rechargeHero = (hero: SpeedHero | ElementalHero) => {
    hero.recharge(50);
    setMessages(prev => [...prev, `${hero.getStatus()}`]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Superhero Academy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Speed Hero Card */}
          <div className="bg-blue-900/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold">Speed Hero</h2>
            </div>
            <p className="mb-4">{speedHero.getStatus()}</p>
            <div className="space-x-4">
              <button
                onClick={() => useHeroPower(speedHero)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
              >
                Use Power
              </button>
              <button
                onClick={() => rechargeHero(speedHero)}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition"
              >
                Recharge
              </button>
            </div>
          </div>

          {/* Elemental Hero Card */}
          <div className="bg-red-900/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-8 h-8 text-red-400" />
              <h2 className="text-2xl font-bold">Elemental Hero</h2>
            </div>
            <p className="mb-4">{elementalHero.getStatus()}</p>
            <div className="space-x-4">
              <button
                onClick={() => useHeroPower(elementalHero)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
              >
                Use Power
              </button>
              <button
                onClick={() => rechargeHero(elementalHero)}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition"
              >
                Recharge
              </button>
            </div>
          </div>
        </div>

        {/* Action Log */}
        <div className="mt-8 bg-gray-900/50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Action Log</h3>
          <div className="space-y-2">
            {messages.map((message, index) => (
              <p key={index} className="text-gray-300">
                {message}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;