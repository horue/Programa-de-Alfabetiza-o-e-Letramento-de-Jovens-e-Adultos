import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [usuario, setUsuario] = useState({
    cargo: '',
    matricula: '',
    cpf: '',
    nome: '',
    primeiroLogin: '',
  });

  return (
    <AppContext.Provider value={{ dataSelecionada, setDataSelecionada, usuario, setUsuario }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
