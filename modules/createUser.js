// services/userService.js
import { ref, set } from "firebase/database";
import { db } from "../firebase/firebaseConfig";


export async function criarUsuario(nomeP, cpfP, cargoP, senhaP){
  const ano = new Date().getFullYear();
  const numerosAleatorios = Math.floor(10000000 + Math.random() * 90000000);
  const matricula = `${ano}${numerosAleatorios}`

  const novoUsuario = {
    nome: nomeP,
    cpf: cpfP,
    matricula: matricula,
    cargo: cargoP,
    senha: senhaP,
    primeiroLogin: true,
    turmas: [],
    campusId: null,
  };

  try {
    await set(ref(db, `usuarios/${matricula}`), novoUsuario);
    return true;
  } catch (error) {
    return false
  }
};