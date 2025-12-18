import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Formulário de Contato</h1>

      <form>
        <div>
          <label>Nome:</label><br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button style={{ marginTop: "15px" }}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default App;
