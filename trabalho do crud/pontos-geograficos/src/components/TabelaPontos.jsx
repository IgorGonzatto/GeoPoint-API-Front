// Componente da tabela que lista os pontos
import { Link } from 'react-router-dom';

function TabelaPontos({ pontos, onExcluir }) {
  return (
    <div className="tabela-wrapper">
      <table className="tabela-pontos">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pontos.map((ponto) => (
            <tr key={ponto.id}>
              <td>
                <Link to={`/pontos/${ponto.id}`} className="link-nome">
                  {ponto.name}
                </Link>
              </td>
              <td>{ponto.description}</td>
              <td>{ponto.latitude}</td>
              <td>{ponto.longitude}</td>
              <td>
                <div className="acoes">
                  <Link to={`/pontos/${ponto.id}`} className="btn-ver">Ver</Link>
                  <Link to={`/pontos/${ponto.id}/editar`} className="btn-editar">Editar</Link>
                  <button 
                    onClick={() => onExcluir(ponto.id)} 
                    className="btn-excluir"
                  >
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaPontos;
