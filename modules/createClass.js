// services/userService.js
import { ref, set } from "firebase/database";
import { db } from "../firebase/firebaseConfig";


export async function criarTurma(campusP, professorP, abrevCampus, tipoP, abrevTipo){
  const ano = new Date().getFullYear();
  const numerosAleatorios = Math.floor(10+ Math.random() * 99);
  const codigo = `${abrevCampus}${ano}${abrevTipo}${numerosAleatorios}`

  const novaTurma = {
    codigo: codigo,
    nome: numerosAleatorios,
    campus: campusP,
    tipo: tipoP,
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