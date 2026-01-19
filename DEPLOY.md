# Guia de Deploy no Surge

## Pré-requisitos

1. **Node.js 18+** instalado
   - Se estiver usando nvm: `nvm install 18 && nvm use 18`
   - Ou baixe em: https://nodejs.org/

2. **Surge CLI** instalado globalmente:
   ```bash
   npm install -g surge
   ```

## Passos para Deploy

1. **Instalar dependências** (se ainda não instalou):
   ```bash
   npm install
   ```

2. **Fazer build do projeto**:
   ```bash
   npm run build
   ```
   Isso criará a pasta `dist/` com os arquivos prontos para produção.

3. **Fazer deploy no Surge**:
   ```bash
   surge dist/
   ```

4. **Seguir as instruções do Surge**:
   - Se for a primeira vez, você precisará criar uma conta
   - Escolha um domínio (ex: `bruna-nallis-portfolio.surge.sh`)
   - O Surge gerará um link como: `https://bruna-nallis-portfolio.surge.sh`

## Comandos Úteis

- **Verificar se está logado**: `surge whoami`
- **Fazer login**: `surge login`
- **Fazer deploy em domínio específico**: `surge dist/ seu-dominio.surge.sh`
- **Atualizar deploy**: Execute `npm run build` e depois `surge dist/` novamente

## Nota

O projeto precisa de Node.js 18+ para funcionar corretamente. Se você estiver usando Node.js v12, atualize para uma versão mais recente usando nvm ou baixando diretamente do site oficial.

