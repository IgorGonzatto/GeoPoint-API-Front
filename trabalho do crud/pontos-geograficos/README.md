# CRUD de Pontos Geográficos

## Informações do Projeto

**Aluno(s):** [Seu nome aqui]  
**Disciplina:** Desenvolvimento Frontend  
**Tecnologia:** React com Vite e React Router  

## Sobre o Projeto

Este é um sistema de cadastro de pontos geográficos que permite criar, listar, visualizar, editar e excluir pontos com nome, descrição, latitude e longitude.

## Como Rodar o Projeto

1. Certifique-se de ter o Node.js instalado
2. Entre na pasta do projeto:
   ```bash
   cd pontos-geograficos
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   ```bash
   npm run dev
   ```
5. Abra o navegador no endereço mostrado (geralmente http://localhost:5173)

## URL da API

**Nota:** A parte da API ainda será implementada nas próximas aulas.  
Por enquanto, o projeto usa dados de exemplo para testar a interface.

A API será configurada no arquivo `src/services/api.js` e utilizará a GeoPoint API.

## Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── Navbar.jsx
│   ├── FiltroPontos.jsx
│   ├── TabelaPontos.jsx
│   ├── FormPonto.jsx
│   └── Mensagem.jsx
├── pages/             # Páginas da aplicação
│   ├── ListaPontos.jsx
│   ├── FormularioPonto.jsx
│   ├── DetalhePonto.jsx
│   └── NaoEncontrada.jsx
├── data/              # Dados temporários
│   └── pontosExemplo.js
├── styles/            # Arquivos CSS
└── App.jsx           # Configuração de rotas
```

## Funcionalidades Implementadas

- ✅ Listagem de pontos em tabela
- ✅ Filtro por nome
- ✅ Cadastro de novos pontos
- ✅ Visualização de detalhes
- ✅ Edição de pontos
- ✅ Exclusão com confirmação
- ✅ Navegação entre páginas
- ✅ Validação de formulário
- ✅ Interface responsiva

## Prints das Telas

### Listagem
[Inserir print da tela de listagem aqui]

### Filtro
[Inserir print do filtro funcionando aqui]

### Cadastro
[Inserir print da tela de cadastro aqui]

### Detalhes
[Inserir print da tela de detalhes aqui]

### Edição
[Inserir print da tela de edição aqui]
