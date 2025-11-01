# Backend - Code Survivor

##  Como rodar
```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Rodar em produção
npm start
```

##  Endpoints

### Health Check
```
GET /api/health
```

## WebSocket Events

### Cliente → Servidor
- `test`: Evento de teste

### Servidor → Cliente
- `test-response`: Resposta de teste

##  Estrutura
```
src/
├── config/         # Configurações (DB, etc)
├── controllers/    # Lógica de negócio
├── models/         # Schemas do banco
├── routes/         # Rotas da API
├── services/       # Serviços externos
├── utils/          # Funções auxiliares
├── challenges/     # Banco de desafios
└── server.js       # Ponto de entrada
```