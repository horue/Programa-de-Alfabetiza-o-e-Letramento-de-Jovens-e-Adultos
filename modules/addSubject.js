import { ref, set } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export async function saveSubject(codigoTurma, data, conteudo) {
  await set(ref(db, `/conteudo/${codigoTurma}/${data}`), conteudo);
}