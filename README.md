# Portfólio - Bruna Nallis

Portfólio profissional desenvolvido com React, TypeScript e Material UI v5.

🌐 **Acesse o portfólio online:** [https://bruna-nallis-portfolio.surge.sh](https://bruna-nallis-portfolio.surge.sh)

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Material UI v5** - Biblioteca de componentes React
- **ESLint** - Linter para garantir qualidade de código

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (opcional):
```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse `http://localhost:5173` no navegador

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 🚀 Deploy no Surge

O portfólio está hospedado no Surge e pode ser acessado em:
**https://bruna-nallis-portfolio.surge.sh**

Para atualizar o deploy:

1. Faça o build: `npm run build`
2. Faça o deploy: `surge dist/ bruna-nallis-portfolio.surge.sh`

Para mais detalhes, consulte [DEPLOY.md](./DEPLOY.md)

## 🏗️ Arquitetura

O projeto segue os princípios **SOLID** e boas práticas de desenvolvimento:

- **Separação de responsabilidades**: UI, lógica, dados e serviços em camadas distintas
- **Componentes com responsabilidade única**: Cada componente tem uma função específica
- **Hooks customizados**: Lógica reutilizável encapsulada em hooks
- **Serviços abstraídos**: Comunicação com APIs através de serviços

Para mais detalhes sobre a arquitetura, consulte [ARCHITECTURE.md](./ARCHITECTURE.md)

## 📁 Estrutura do Projeto

```
src/
 ├── components/     # Componentes React
 │    ├── common/    # Componentes reutilizáveis
 │    ├── layout/    # Componentes de layout
 │    └── sections/  # Seções da aplicação
 ├── pages/          # Páginas da aplicação
 ├── hooks/          # Hooks customizados
 ├── services/       # Serviços (API, etc.)
 ├── data/           # Dados mockados
 ├── types/          # Tipos TypeScript
 ├── theme/          # Configuração de tema Material UI
 └── utils/          # Funções utilitárias
```

## 🎨 Tema

O projeto suporta modo **light** e **dark**. O tema pode ser alternado através do botão no header.

## 📝 Desenvolvido por

Bruna Nallis
Link de acesso: https://bruna-nallis-portfolio.surge.sh
