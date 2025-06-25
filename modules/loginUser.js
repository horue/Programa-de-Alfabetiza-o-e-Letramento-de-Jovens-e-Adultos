import { ref, get } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export async function loginUser(matricula, senha) {
  try {
    const snapshot = await get(ref(db, `usuarios/${matricula}`));

    if (!snapshot.exists()) {
      return { success: false, error: "Usuário não encontrado." };
    }

    const dadosUsuario = snapshot.val();

    if (dadosUsuario.senha !== senha) {
      return { success: false, error: "Senha incorreta." };
    }

    return { success: true, usuario: dadosUsuario };
  } catch (error) {
    console.error("Erro no login:", error);
    return { success: false, error: "Erro ao acessar o banco." };
  }
}