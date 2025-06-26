import { ref, update, set } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export async function saveAttendance(codigoTurma, data, presencas) {
  await set(ref(db, `/presencas/${codigoTurma}/${data}`), presencas);
}