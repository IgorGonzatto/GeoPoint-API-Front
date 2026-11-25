// Componente para mostrar mensagens ao usuário
function Mensagem({ tipo, texto }) {
  if (!texto) return null;

  return (
    <div className={`mensagem mensagem-${tipo}`}>
      {texto}
    </div>
  );
}

export default Mensagem;
