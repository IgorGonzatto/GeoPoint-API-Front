// Arquivo principal que define as rotas da aplicação
import { Routes, Route, Navigate } from 'react-router-dom';
import ListaPontos from './pages/ListaPontos';
import FormularioPonto from './pages/FormularioPonto';
import DetalhePonto from './pages/DetalhePonto';
import NaoEncontrada from './pages/NaoEncontrada';
import './App.css';

function App() {
  return (
    <Routes>
      {/* Redireciona a página inicial para /pontos */}
      <Route path="/" element={<Navigate to="/pontos" />} />
      
      {/* Rota para listar os pontos */}
      <Route path="/pontos" element={<ListaPontos />} />
      
      {/* Rota para criar novo ponto */}
      <Route path="/pontos/novo" element={<FormularioPonto />} />
      
      {/* Rota para ver detalhes de um ponto */}
      <Route path="/pontos/:id" element={<DetalhePonto />} />
      
      {/* Rota para editar um ponto */}
      <Route path="/pontos/:id/editar" element={<FormularioPonto />} />
      
      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>
  );
}

export default App;
