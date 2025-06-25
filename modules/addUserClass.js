// services/userService.js
import { ref, update } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export async function addStudentToClass(turma, aluno) {
  try {
    const updates = {};
    updates[`/turmas/${turma}/alunos/${aluno}`] = true;
    await update(ref(db), updates);
  } catch (error) {
    console.error("Erro ao adicionar aluno à turma:", error);
    throw error;
  }
}
