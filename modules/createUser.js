
export const handleRegister = async () => {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, senha); // Use o CPF como senha só se quiser

    await setDoc(doc(db, 'usuarios', userCred.user.uid), {
      nome,
      email,
      cpf,
      nascimento,
      tipo: 'comum'
    });

    console.log('Usuário criado com sucesso!');
  } catch (err) {
    console.error('Erro ao registrar:', err.message);
  }
};
