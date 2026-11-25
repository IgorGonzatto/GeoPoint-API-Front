// Página para quando a rota não existir
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function NaoEncontrada() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Página não encontrada</h1>
        <p>A página que você procura não existe.</p>
        <Link to="/pontos" className="btn-voltar">Voltar para a lista</Link>
      </main>
    </>
  );
}

export default NaoEncontrada;
