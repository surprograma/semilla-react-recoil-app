import { selector } from 'recoil';

export const todosLosUsuarios = selector({
  key: 'usuarios',
  get: async () => {
    const response = await fetch('http://localhost:3001/api/usuarios');
    const json = await response.json();
    return json.data;
  },
});
