// Página que mostra o formulário para criar ou editar
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FormPonto from '../components/FormPonto';
import { buscarPontoPorId, cadastrarPonto, atualizarPonto } from '../data/api';
import '../styles/FormularioPonto.css';

function FormularioPonto() {
  const { id } = useParams(); // Pega o id da URL
  const navigate = useNavigate(); // Para voltar para a lista depois
  const [salvando, setSalvando] = useState(false);
  const [pontoParaEditar, setPontoParaEditar] = useState(null);
  const [carregando, setCarregando] = useState(false);

  // Se tem id, estamos editando. Busca o ponto da API
  useEffect(() => {
    if (id) {
      carregarPonto();
    }
  }, [id]);

  async function carregarPonto() {
    try {
      setCarregando(true);
      const dados = await buscarPontoPorId(id);
      setPontoParaEditar(dados);
    } catch (error) {
      alert('Erro ao carregar o ponto.');
      console.error(error);
      navigate('/pontos');
    } finally {
      setCarregando(false);
    }
  }

  // Função chamada quando clicar em Salvar
  async function handleSalvar(dadosPonto) {
    setSalvando(true);
    
    try {
      if (id) {
        // Atualizar ponto existente
        await atualizarPonto(id, dadosPonto);
      } else {
        // Criar novo ponto
        await cadastrarPonto(dadosPonto);
      }
      navigate('/pontos');
    } catch (error) {
      alert('Erro ao salvar o ponto. Tente novamente.');
      console.error(error);
    } finally {
      setSalvando(false);
    }
  }

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

  return (
    <>
      <Navbar />
      <main className="container">
        <h1>{id ? 'Editar Ponto' : 'Novo Ponto'}</h1>
        <FormPonto 
          pontoInicial={pontoParaEditar} 
          onSalvar={handleSalvar}
          salvando={salvando}
        />
      </main>
    </>
  );
}

export default FormularioPonto;
