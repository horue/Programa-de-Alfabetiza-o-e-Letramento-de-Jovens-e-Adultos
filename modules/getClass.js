import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';

const db = getDatabase();
const turmasRef = ref(db, 'turmas');

export const getClass = async (cargo = '', nome = '') => {
  const filtro = cargo === 'professor' ? 
    query(turmasRef, orderByChild('professor'), equalTo(nome))
    : query(turmasRef);

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
    console.error('Erro ao buscar turmas:', error);
    return [];
  }
};
