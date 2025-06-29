import { render } from '@testing-library/react-native';
import { OptionsScreen } from '../screens/options';

jest.mock('../contexts/appcontext', () => ({
  useAppContext: () => ({
    usuario: { cargo: 'professor' },
  }),
}));

describe('OptionsScreen', () => {
  it('não deve renderizar a opção "Cadastrar Usuário" para não administradores', () => {
    const { queryByText } = render(<OptionsScreen navigation={{ navigate: jest.fn() }} />);

    expect(queryByText('Cadastrar Usuário')).toBeNull();
  });
});
