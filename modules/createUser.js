// services/userService.js
import { ref, set } from "firebase/database";
import { db } from "../firebase/firebaseConfig";


export async function criarUsuario(nomeP, cpfP, cargoP, senhaP, matriculaP){
  const ano = new Date().getFullYear();
  const numerosAleatorios = Math.floor(10000000 + Math.random() * 90000000);
  if (matriculaP == '') {
    matriculaP = `${ano}${numerosAleatorios}`
  }

  const novoUsuario = {
    nome: nomeP,
    cpf: cpfP,
    matricula: matriculaP,
    cargo: cargoP,
    senha: senhaP,
    primeiroLogin: true,
    turmas: [],
    campusId: null,
  };

  try {
    await set(ref(db, `usuarios/${matriculaP}`), novoUsuario);
    return true;
  } catch (error) {
    return false
  }
};