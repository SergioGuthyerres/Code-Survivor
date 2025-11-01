import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Code Survivor Backend is running!',
    timestamp: new Date().toISOString()
  });
});

// Socket.io - Conexão básica
io.on('connection', (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(` Cliente desconectado: ${socket.id}`);
  });

  // Evento de teste
  socket.on('test', (data) => {
    console.log('Recebido:', data);
    socket.emit('test-response', { message: 'Backend recebeu sua mensagem!' });
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`
   Servidor rodando!
   HTTP: http://localhost:${PORT}
   WebSocket: ws://localhost:${PORT}
  `);
});