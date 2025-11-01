import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swords, Users } from 'lucide-react';

function Home() {
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState('');

  const handleCreateRoom = () => {
    if (!playerName.trim()) {
      alert('Digite seu nome!');
      return;
    }
    // TODO: Criar sala no backend
    console.log('Criar sala para:', playerName);
  };

  const handleJoinRoom = () => {
    if (!playerName.trim()) {
      alert('Digite seu nome!');
      return;
    }
    const roomId = prompt('Digite o código da sala:');
    if (roomId) {
      navigate(`/lobby/${roomId}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Swords className="w-16 h-16 text-red-500" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">
            Code Survivor
          </h1>
          <p className="text-slate-400">
            Battle Royale de Programação
          </p>
        </div>

        {/* Form */}
        <div className="bg-slate-800 rounded-lg p-6 shadow-xl">
          <input
            type="text"
            placeholder="Seu nome"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleCreateRoom}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mb-3 transition"
          >
            Criar Sala
          </button>

          <button
            onClick={handleJoinRoom}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            <Users size={20} />
            Entrar em Sala
          </button>
        </div>

        {/* Stats (mockado) */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-slate-800 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-500">0</div>
            <div className="text-xs text-slate-400">Vitórias</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-3">
            <div className="text-2xl font-bold text-blue-500">0</div>
            <div className="text-xs text-slate-400">Partidas</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-500">-</div>
            <div className="text-xs text-slate-400">Rank</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;