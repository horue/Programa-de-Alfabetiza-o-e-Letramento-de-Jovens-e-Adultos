// services/userService.js
import { ref, set } from "firebase/database";
import { db } from "../firebase/firebaseConfig";


export async function criarTurma(campusP, professorP, abrev){
  const ano = new Date().getFullYear();
  const numerosAleatorios = Math.floor(10+ Math.random() * 99);
  const codigo = `${abrev}${ano}${numerosAleatorios}`

  const novaTurma = {
    codigo: codigo,
    nome: numerosAleatorios,
    campus: campusP,
    professor: professorP,
    ativo: true,
    alunos: {

    },
  };

  try {
    await set(ref(db, `turmas/${codigo}`), novaTurma);
    return true;
  } catch (error) {
    console.log(error)
    return false
  }
};