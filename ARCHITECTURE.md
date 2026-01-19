# Arquitetura do Projeto

Este documento descreve as decisões arquiteturais do projeto, baseadas nos princípios SOLID e boas práticas de desenvolvimento.

## Princípios SOLID Aplicados

### 1. Single Responsibility Principle (SRP)
Cada módulo, classe ou função tem uma única responsabilidade:

- **Components**: Responsáveis apenas pela renderização e composição de UI
- **Hooks**: Gerenciam lógica de estado e efeitos específicos
- **Services**: Lidam exclusivamente com comunicação externa (APIs)
- **Utils**: Contêm funções puras e reutilizáveis
- **Types**: Centralizam definições de tipos TypeScript

### 2. Open/Closed Principle (OCP)
Componentes são extensíveis sem modificação:

- Componentes comuns (`Button`, `Card`) estendem componentes do Material UI
- Permitem customização através de props sem alterar código interno
- Tema pode ser estendido sem modificar a configuração base

### 3. Liskov Substitution Principle (LSP)
Componentes podem ser substituídos por suas variantes:

- Componentes customizados mantêm a mesma interface dos componentes base do MUI
- Hooks retornam interfaces consistentes

### 4. Interface Segregation Principle (ISP)
Interfaces específicas e focadas:

- Tipos TypeScript são específicos para cada contexto
- Props de componentes são bem definidas e não forçam dependências desnecessárias

### 5. Dependency Inversion Principle (DIP)
Dependências de abstrações, não de implementações concretas:

- Componentes dependem de hooks (abstrações) ao invés de implementações diretas
- Serviços podem ser facilmente substituídos ou mockados
- Separação clara entre camadas de dados e serviços

## Estrutura de Pastas

```
src/
 ├── components/          # Componentes React organizados por responsabilidade
 │    ├── common/         # Componentes reutilizáveis (Button, Card, etc.)
 │    ├── layout/         # Componentes de layout (Header, Container, etc.)
 │    └── sections/       # Seções da aplicação (About, Projects, etc.)
 ├── pages/               # Páginas da aplicação
 ├── hooks/               # Hooks customizados (useThemeMode, etc.)
 ├── services/            # Serviços de comunicação externa (API, etc.)
 ├── data/                # Dados mockados e constantes
 ├── types/               # Definições de tipos TypeScript
 ├── theme/               # Configuração de tema Material UI
 └── utils/               # Funções utilitárias puras
```

## Decisões Arquiteturais

### Separação de Responsabilidades

1. **UI (Components)**: Apenas renderização e composição
2. **Lógica (Hooks)**: Gerenciamento de estado e efeitos colaterais
3. **Dados (Services/Data)**: Comunicação externa e dados estáticos
4. **Configuração (Theme)**: Configurações de tema e estilo

### Hooks Customizados

- `useThemeMode`: Gerencia o modo do tema (light/dark) com persistência
- Facilita reutilização e testabilidade
- Centraliza lógica de estado relacionada ao tema

### Serviços

- `ApiService`: Classe singleton para comunicação com APIs
- Abstrai detalhes de implementação de fetch
- Facilita substituição por outras bibliotecas (axios, etc.)

### Barrel Exports

- Uso de `index.ts` em cada pasta para facilitar imports
- Mantém imports limpos: `import { Button } from '@/components/common'`
- Facilita refatoração e reorganização

### Path Aliases

- Configuração de aliases no `tsconfig.json` e `vite.config.ts`
- Imports absolutos: `@/components`, `@/hooks`, etc.
- Melhora legibilidade e evita imports relativos complexos

### Tema Material UI

- Configuração centralizada em `src/theme/`
- Suporte a modo light e dark
- Customização fácil através de `ThemeOptions`
- Uso de `ThemeProvider` no nível raiz da aplicação

## Boas Práticas Implementadas

1. **TypeScript Strict Mode**: Tipagem forte e segura
2. **ESLint**: Linting configurado com regras recomendadas
3. **Componentes Funcionais**: Uso exclusivo de componentes funcionais e hooks
4. **Composição sobre Herança**: Preferência por composição de componentes
5. **Nomenclatura Clara**: Nomes descritivos e consistentes
6. **Comentários JSDoc**: Documentação inline onde necessário
7. **Separação de Concerns**: Cada arquivo tem uma responsabilidade clara

## Extensibilidade

A arquitetura foi projetada para facilitar:

- Adição de novos componentes sem modificar existentes
- Substituição de serviços (ex: trocar fetch por axios)
- Extensão do tema sem quebrar componentes existentes
- Adição de novas páginas e rotas
- Implementação de testes unitários e de integração

