import { get, child, ref } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export async function getStudentsFromClass(codigoTurma) {
  try {
    const turmaRef = ref(db, `turmas/${codigoTurma}/alunos`);
    const snapshot = await get(turmaRef);

    if (!snapshot.exists()) {
      return [];
    }

    const matriculas = Object.keys(snapshot.val());

    const promises = matriculas.map(async (matricula) => {
      const alunoSnap = await get(ref(db, `usuarios/${matricula}`));
      if (alunoSnap.exists()) {
        return alunoSnap.val();
      }
      return null;
    });

    const alunos = await Promise.all(promises);
    return alunos.filter((a) => a !== null);
  } catch (error) {
    return [];
  }
}
