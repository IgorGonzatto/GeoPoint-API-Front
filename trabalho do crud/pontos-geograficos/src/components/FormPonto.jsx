// Formulário reutilizável para criar e editar pontos
import { useState } from 'react';

function FormPonto({ pontoInicial, onSalvar, salvando }) {
  // Estados para guardar os valores dos campos
  const [name, setName] = useState(pontoInicial?.name || '');
  const [description, setDescription] = useState(pontoInicial?.description || '');
  const [latitude, setLatitude] = useState(pontoInicial?.latitude || '');
  const [longitude, setLongitude] = useState(pontoInicial?.longitude || '');
  const [erros, setErros] = useState({});

  // Função que valida os campos antes de salvar
  const validarCampos = () => {
    const novosErros = {};

    if (!name.trim()) {
      novosErros.name = 'Nome é obrigatório';
    } else if (name.length > 100) {
      novosErros.name = 'Nome deve ter no máximo 100 caracteres';
    }

    if (description.length > 255) {
      novosErros.description = 'Descrição deve ter no máximo 255 caracteres';
    }

    const lat = Number(latitude);
    if (!latitude || isNaN(lat) || lat < -90 || lat > 90) {
      novosErros.latitude = 'Latitude deve estar entre -90 e 90';
    }

    const lng = Number(longitude);
    if (!longitude || isNaN(lng) || lng < -180 || lng > 180) {
      novosErros.longitude = 'Longitude deve estar entre -180 e 180';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  // Função executada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarCampos()) {
      onSalvar({
        name,
        description,
        latitude: Number(latitude),
        longitude: Number(longitude)
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-ponto">
      <div className="campo">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do ponto"
        />
        {erros.name && <span className="erro">{erros.name}</span>}
      </div>

      <div className="campo">
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição do ponto"
          rows="4"
        />
        {erros.description && <span className="erro">{erros.description}</span>}
      </div>

      <div className="campo">
        <label htmlFor="latitude">Latitude:</label>
        <input
          type="number"
          id="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="-90 a 90"
          step="any"
        />
        {erros.latitude && <span className="erro">{erros.latitude}</span>}
      </div>

      <div className="campo">
        <label htmlFor="longitude">Longitude:</label>
        <input
          type="number"
          id="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="-180 a 180"
          step="any"
        />
        {erros.longitude && <span className="erro">{erros.longitude}</span>}
      </div>

      <button 
        type="submit" 
        className="btn-salvar"
        disabled={salvando}
      >
        {salvando ? 'Salvando...' : 'Salvar'}
      </button>
    </form>
  );
}

export default FormPonto;
