import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';

const db = getDatabase();
const usuariosRef = ref(db, 'usuarios');

export const getUserFunction = async (cargoAlvo) => {
  const filtro = query(usuariosRef, orderByChild('cargo'), equalTo(cargoAlvo));
  
  try {
    const snapshot = await get(filtro);
    if (snapshot.exists()) {
      const dados = snapshot.val();
      const lista = Object.entries(dados).map(([id, user]) => ({
        id,
        ...user
      }));
      return lista;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};