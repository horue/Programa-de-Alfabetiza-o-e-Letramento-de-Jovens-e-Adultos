import { ref, remove } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export async function removeFromClass(codigoTurma, matriculaAluno) {
  const alunoRef = ref(db, `turmas/${codigoTurma}/alunos/${matriculaAluno}`);

  try {
    await remove(alunoRef);
  } catch (error) {
  }
}