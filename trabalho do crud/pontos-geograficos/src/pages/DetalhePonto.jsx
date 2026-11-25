// Página que mostra os detalhes de um ponto
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { buscarPontoPorId, excluirPonto } from '../data/api';
import '../styles/DetalhePonto.css';

function DetalhePonto() {
  const { id } = useParams(); // Pega o id da URL
  const navigate = useNavigate();
  
  const [ponto, setPonto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    carregarPonto();
  }, [id]);

  async function carregarPonto() {
    try {
      setCarregando(true);
      setErro(null);
      const dados = await buscarPontoPorId(id);
      setPonto(dados);
    } catch (error) {
      setErro('Erro ao carregar o ponto.');
      console.error(error);
    } finally {
      setCarregando(false);
    }
  }

  // Função para excluir o ponto
  async function handleExcluir() {
    if (window.confirm('Deseja excluir este ponto?')) {
      try {
        await excluirPonto(id);
        navigate('/pontos');
      } catch (error) {
        alert('Erro ao excluir o ponto. Tente novamente.');
        console.error(error);
      }
    }
  }

  // Se estiver carregando
  if (carregando) {
    return (
      <>
        <Navbar />
        <main className="container">
          <p>Carregando...</p>
        </main>
      </>
    );
  }

  // Se não encontrar o ponto ou houver erro
  if (erro || !ponto) {
    return (
      <>
        <Navbar />
        <main className="container">
          <p>{erro || 'Ponto não encontrado'}</p>
          <Link to="/pontos" className="btn-voltar">Voltar para a lista</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="detalhe-card">
          <h1>Detalhes do Ponto</h1>
          
          <div className="detalhe-info">
            <div className="info-item">
              <strong>Nome:</strong>
              <p>{ponto.name}</p>
            </div>

            <div className="info-item">
              <strong>Descrição:</strong>
              <p>{ponto.description}</p>
            </div>

            <div className="info-item">
              <strong>Latitude:</strong>
              <p>{ponto.latitude}</p>
            </div>

            <div className="info-item">
              <strong>Longitude:</strong>
              <p>{ponto.longitude}</p>
            </div>
          </div>

          <div className="detalhe-acoes">
            <Link to={`/pontos/${id}/editar`} className="btn-editar">Editar</Link>
            <button onClick={handleExcluir} className="btn-excluir">Excluir</button>
            <Link to="/pontos" className="btn-voltar">Voltar</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default DetalhePonto;
