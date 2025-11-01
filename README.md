# Code Survivor

Battle royale de programação em tempo real onde desenvolvedores competem resolvendo desafios de código.

#Notion:
[https://www.notion.so/Code-Survivor-29ec9f411a7e809ba98bcd0ca20292d8?source=copy_link
](
https://www.notion.so/Code-Survivor-29ec9f411a7e809ba98bcd0ca20292d8?source=copy_link)
## Status

🏗️ **Em desenvolvimento** - Sprint 1

##  Equipe

- **[Sérgio Guthyerres]** - 
- **[Nome]** - 
- **[Nome]** - 
- **[Nome]** - 
- **[Nome]** - 
- **[Nome]** -   
- **[Nome]** - 
- **[Nome]** - 
- **[Nome]** - 
- **[Nome]** - 
## 🛠️ Tecnologias

### Backend
- Node.js 18+
- Express
- Socket.io
- SQLite (better-sqlite3)
- Piston API (execução de código)

### Frontend
- React 18
- Vite
- React Router
- Socket.io Client
- Monaco Editor
- Tailwind CSS

## 📦 Estrutura do Projeto
```
code-survivor/
├── backend/        # API Node.js + Socket.io
├── frontend/       # Interface React
├── docs/           # Documentação
└── .github/        # Templates e workflows
```

## 🏃‍♂️ Como Rodar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Backend
```bash
cd backend
npm install
npm run dev
```
Servidor rodando em: http://localhost:3001

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Interface rodando em: http://localhost:5173

## 📋 Funcionalidades Planejadas

### Sprint 1 ✅
- [x] Setup do projeto
- [ ] Sistema de salas
- [ ] Lobby multiplayer
- [ ] Conexão Socket.io

### Sprint 2
- [ ] Editor de código (Monaco)
- [ ] Execução de código
- [ ] Sistema de desafios
- [ ] Timer de rodada

### Sprint 3
- [ ] Sistema de eliminação
- [ ] Placar ao vivo
- [ ] Modo espectador
- [ ] Estatísticas

## 📚 Documentação

Veja a pasta `/docs` para:
- Arquitetura do sistema
- API endpoints
- Guia de contribuição
- Padrões de código

## 🤝 Como Contribuir

1. Clone o repositório
2. Crie uma branch: `git checkout -b feature/nome-da-feature`
3. Commit suas mudanças: `git commit -m 'feat: adiciona nova feature'`
4. Push para a branch: `git push origin feature/nome-da-feature`
5. Abra um Pull Request


# Dependencies
node_modules/
*/node_modules/

# Environment variables
.env
.env.local
.env.*.local
*.env

# Build output
dist/
build/
*/dist/
*/build/

# Database
* a definir

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE
.vscode/
*~


