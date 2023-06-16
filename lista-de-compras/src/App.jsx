import { Container } from "./theme";
import { useState } from "react";
import { useEffect } from "react"; 
import { createContext } from "react";
import Lista from "./components/Lista";
import Login from "./components/Login";

export const LoginContext = createContext(null);

const App = () => {

  const [estaLogado, setEstaLogado] = useState(false);
  const [alerta, setAlerta] = useState({});

  const checkLogin = () => {
    setEstaLogado(JSON.parse(sessionStorage.getItem('estaLogado')) || false);
  }

  useEffect(() => {
    checkLogin();
  }, [])

  return (
    <>
      <LoginContext.Provider value={{estaLogado, setEstaLogado, alerta, setAlerta}}>
        <Container>
          {
            estaLogado ? (
              <Lista />
            ) : (
              <Login />
            )
          }
        </Container>
      </LoginContext.Provider>
    </>
  )
}

export default App
