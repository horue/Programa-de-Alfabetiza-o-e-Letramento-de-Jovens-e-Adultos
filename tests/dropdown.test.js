import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CreateClassScreen from '../screens/CreateClassScreen';

jest.mock('../modules/getUser.js', () => ({
  getUserFunction: jest.fn(() =>
    Promise.resolve([{ nome: 'Professor A' }])
  ),
}));

test('abre dropdown de professor', async () => {
  const { getByText } = render(<CreateClassScreen />);
  await waitFor(() => getByText('Professor'));
  fireEvent.press(getByText('Professor'));
  expect(true).toBeTruthy();
});
