// Componente de filtro para buscar pontos por nome
function FiltroPontos({ filtro, setFiltro }) {
  return (
    <div className="filtro-container">
      <label htmlFor="filtro">Filtrar por nome:</label>
      <input
        type="text"
        id="filtro"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Digite o nome do ponto..."
      />
    </div>
  );
}

export default FiltroPontos;
