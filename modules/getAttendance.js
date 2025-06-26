// modules/getAttendance.js
import { ref, get } from 'firebase/database';
import { db } from '../firebase/firebaseConfig';

export async function getAttendance(classCode, date) {
  try {
    const snapshot = await get(ref(db, `presencas/${classCode}/${date}`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    console.error('Erro ao buscar presenças:', error);
    return null;
  }
}
