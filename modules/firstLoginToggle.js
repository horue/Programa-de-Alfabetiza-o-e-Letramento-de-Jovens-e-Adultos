import { ref, update } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export async function toggleFirstLogin(matricula) {
  const updates = {};
  updates[`/usuarios/${matricula}/primeiroLogin`] = false;
  await update(ref(db), updates);
}