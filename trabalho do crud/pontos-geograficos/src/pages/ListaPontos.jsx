// Página que lista todos os pontos
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FiltroPontos from '../components/FiltroPontos';
import TabelaPontos from '../components/TabelaPontos';
import Mensagem from '../components/Mensagem';
import { buscarPontos, excluirPonto } from '../data/api';
import '../styles/ListaPontos.css';

function ListaPontos() {
  // Estado para guardar os pontos
  const [pontos, setPontos] = useState([]);
  // Estado para o texto do filtro
  const [filtro, setFiltro] = useState('');
  // Estado para carregamento
  const [carregando, setCarregando] = useState(true);
  // Estado para erros
  const [erro, setErro] = useState(null);

  // Buscar pontos da API ao carregar o componente
  useEffect(() => {
    carregarPontos();
  }, []);

  async function carregarPontos() {
    try {
      setCarregando(true);
      setErro(null);
      const dados = await buscarPontos();
      setPontos(dados);
    } catch (error) {
      setErro('Erro ao carregar os pontos. Tente novamente.');
      console.error(error);
    } finally {
      setCarregando(false);
    }
  }

  // Filtra os pontos pelo nome
  const pontosFiltrados = pontos.filter((ponto) =>
    ponto.name.toLowerCase().includes(filtro.toLowerCase())
  );

  // Função para excluir um ponto
  async function handleExcluir(id) {
    if (window.confirm('Deseja excluir este ponto?')) {
      try {
        await excluirPonto(id);
        setPontos(pontos.filter(ponto => ponto.id !== id));
      } catch (error) {
        alert('Erro ao excluir o ponto. Tente novamente.');
        console.error(error);
      }
    }
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="cabecalho">
          <h1>Pontos Geográficos</h1>
          <Link to="/pontos/novo" className="btn-novo">Novo Ponto</Link>
        </div>

        <FiltroPontos filtro={filtro} setFiltro={setFiltro} />

        {carregando ? (
          <Mensagem tipo="info" texto="Carregando pontos..." />
        ) : erro ? (
          <Mensagem tipo="erro" texto={erro} />
        ) : pontosFiltrados.length === 0 ? (
          <Mensagem tipo="info" texto="Nenhum ponto encontrado" />
        ) : (
          <TabelaPontos pontos={pontosFiltrados} onExcluir={handleExcluir} />
        )}
      </main>
    </>
  );
}

export default ListaPontos;
