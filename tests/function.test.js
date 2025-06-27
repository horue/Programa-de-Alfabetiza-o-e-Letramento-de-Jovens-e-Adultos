import { render } from '@testing-library/react-native';
import { OptionsScreen } from '../screens/options';

jest.mock('../contexts/appcontext', () => ({
  useAppContext: () => ({
    usuario: { cargo: 'aluno' },
  }),
}));

describe('OptionsScreen', () => {
  it('não deve renderizar a opção "Cadastrar Usuário" para alunos', () => {
    const { queryByText } = render(<OptionsScreen navigation={{ navigate: jest.fn() }} />);

    expect(queryByText('Cadastrar Usuário')).toBeNull();
  });
});
