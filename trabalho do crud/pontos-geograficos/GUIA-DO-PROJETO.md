# Guia do Projeto - Pontos Geográficos

## O que foi criado

Este projeto é um CRUD (Criar, Ler, Atualizar, Deletar) de pontos geográficos feito com React.

### Estrutura de Pastas

```
pontos-geograficos/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Navbar.jsx           -> Menu de navegação
│   │   ├── FiltroPontos.jsx     -> Campo de busca
│   │   ├── TabelaPontos.jsx     -> Tabela que lista os pontos
│   │   ├── FormPonto.jsx        -> Formulário de criar/editar
│   │   └── Mensagem.jsx         -> Avisos para o usuário
│   │
│   ├── pages/             # Páginas da aplicação
│   │   ├── ListaPontos.jsx      -> Página principal com a lista
│   │   ├── FormularioPonto.jsx  -> Página de criar/editar
│   │   ├── DetalhePonto.jsx     -> Página de detalhes
│   │   └── NaoEncontrada.jsx    -> Página de erro 404
│   │
│   ├── data/              # Dados temporários
│   │   └── pontosExemplo.js     -> 3 pontos de exemplo
│   │
│   ├── styles/            # Arquivos CSS
│   │   ├── Navbar.css
│   │   ├── ListaPontos.css
│   │   ├── FormularioPonto.css
│   │   └── DetalhePonto.css
│   │
│   ├── App.jsx            # Configuração das rotas
│   ├── main.jsx           # Arquivo que inicia a aplicação
│   └── index.css          # Estilos globais
│
├── README.md              # Documentação do projeto
└── package.json           # Dependências do projeto
```

## Como o projeto funciona

### 1. Rotas (URLs)

- `/pontos` - Lista todos os pontos
- `/pontos/novo` - Formulário para criar novo ponto
- `/pontos/:id` - Detalhes de um ponto específico
- `/pontos/:id/editar` - Formulário para editar um ponto

### 2. Componentes

#### Navbar
- Menu que aparece em todas as páginas
- Tem links para "Pontos" e "Novo Ponto"

#### FiltroPontos
- Campo de busca para filtrar pontos pelo nome
- Não diferencia maiúsculas de minúsculas

#### TabelaPontos
- Mostra os pontos em uma tabela
- Cada linha tem botões: Ver, Editar e Excluir

#### FormPonto
- Formulário usado para criar e editar
- Valida os campos antes de salvar:
  - Nome: obrigatório, máximo 100 caracteres
  - Descrição: máximo 255 caracteres
  - Latitude: entre -90 e 90
  - Longitude: entre -180 e 180

#### Mensagem
- Mostra avisos como "Nenhum ponto encontrado"

### 3. Páginas

#### ListaPontos
- Mostra a tabela com todos os pontos
- Tem o filtro de busca
- Permite excluir pontos (com confirmação)

#### FormularioPonto
- Usado para criar novos pontos e editar existentes
- Se tem ID na URL, é edição; se não tem, é cadastro

#### DetalhePonto
- Mostra todas as informações de um ponto
- Tem botões para Editar, Excluir e Voltar

#### NaoEncontrada
- Aparece quando a URL não existe
- Tem um link para voltar à lista

## Dados Temporários

Os dados estão no arquivo `src/data/pontosExemplo.js` com 3 pontos de exemplo.
Quando você aprender a API nas próximas aulas, vai substituir esses dados por chamadas reais ao servidor.

## Validações do Formulário

O formulário valida os campos antes de salvar:

- **Nome**: não pode ser vazio e deve ter no máximo 100 caracteres
- **Descrição**: pode ser vazia, mas se preenchida deve ter no máximo 255 caracteres
- **Latitude**: obrigatória, deve ser um número entre -90 e 90
- **Longitude**: obrigatória, deve ser um número entre -180 e 180

## Estilos CSS

Os estilos usam variáveis CSS (no `index.css`) para cores e medidas:

```css
--cor-primaria: #2563eb       (azul para botões principais)
--cor-secundaria: #64748b     (cinza para botões secundários)
--cor-sucesso: #10b981        (verde para editar)
--cor-perigo: #ef4444         (vermelho para excluir)
```

## Responsividade

O site funciona bem em celular:
- A tabela tem scroll horizontal quando necessário
- Os botões ficam em coluna no celular
- O menu se ajusta para telas pequenas

## O que falta (API)

Por enquanto o projeto não salva dados de verdade. Quando você fechar e abrir de novo, os dados voltam aos 3 exemplos iniciais.

Nas próximas aulas você vai:
1. Criar o arquivo `src/services/api.js`
2. Fazer chamadas com `fetch` para a API
3. Conectar os botões de Salvar e Excluir à API real

## Como testar

1. Abra o terminal na pasta do projeto
2. Execute: `npm run dev`
3. Abra o navegador no endereço mostrado
4. Teste:
   - Filtrar pontos por nome
   - Clicar em "Novo Ponto" e criar um
   - Clicar em um nome para ver detalhes
   - Clicar em "Editar" e modificar
   - Clicar em "Excluir" (vai pedir confirmação)

## Dicas

- Os comentários no código explicam o que cada parte faz
- Se tiver erro, leia a mensagem no terminal ou no navegador
- Use o React DevTools para ver os estados dos componentes
- Todos os arquivos estão bem organizados e simples de entender
