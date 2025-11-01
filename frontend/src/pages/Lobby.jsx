import { useParams } from 'react-router-dom';
import { Crown, Copy } from 'lucide-react';

function Lobby() {
  const { roomId } = useParams();

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    alert('Código copiado!');
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Lobby</h1>
          <div className="flex items-center justify-center gap-2">
            <span className="text-slate-400">Código da sala:</span>
            <code className="bg-slate-800 px-3 py-1 rounded text-blue-400">
              {roomId}
            </code>
            <button
              onClick={copyRoomId}
              className="text-slate-400 hover:text-white transition"
            >
              <Copy size={18} />
            </button>
          </div>
        </div>

        {/* Players */}
        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            Jogadores (2/8)
          </h2>
          <div className="space-y-2">
            <div className="bg-slate-700 rounded p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crown className="text-yellow-500" size={20} />
                <span>Jogador 1</span>
              </div>
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                Pronto
              </span>
            </div>
            <div className="bg-slate-700 rounded p-3 flex items-center justify-between">
              <span>Jogador 2</span>
              <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                Aguardando
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
            Pronto
          </button>
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition">
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lobby;