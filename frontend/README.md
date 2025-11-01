# Frontend - Code Survivor

## Como rodar
```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Estrutura
```
src/
├── assets/         # Imagens, ícones
├── components/     # Componentes reutilizáveis
├── context/        # Context API (Socket, Auth)
├── pages/          # Páginas principais
├── services/       # APIs e serviços
├── utils/          # Funções auxiliares
├── App.jsx         # Componente raiz
└── main.jsx        # Ponto de entrada
```

## Páginas

- `/` - Home (criar/entrar sala)
- `/lobby/:roomId` - Lobby (aguardar jogadores)
- `/arena/:roomId` - Arena (batalha)