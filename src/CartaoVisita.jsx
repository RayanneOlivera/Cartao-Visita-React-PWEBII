function CartaoVisita({ nome, cargo, email, telefone }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Cargo: {cargo}</p>
      <p>Email: {email}</p>
      <p>Telefone: {telefone}</p>
    </div>
  );
}

export default CartaoVisita;
