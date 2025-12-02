import { ref, update } from "firebase/database";
import { db } from "../firebase/firebaseConfig";
import { sha256 } from 'js-sha256';

export async function changePassword(usuario, novaSenha) {
  try {
    const senhaHasheada = sha256(novaSenha)
      .update(novaSenha)
      .digest("hex");

    const userRef = ref(db, `usuarios/${usuario.matricula}`);

    await update(userRef, {
      senha: senhaHasheada,
      primeiroLogin: false,
    });

    return true;
  } catch (error) {
    console.error("Erro ao alterar senha:", error);
    return false;
  }
}
