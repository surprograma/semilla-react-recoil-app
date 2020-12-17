import { selector } from 'recoil';

export const todosLosUsuarios = selector({
  key: 'usuarios',
  get: () => [
    {
      nombre: 'Andrea',
      apellido: 'Sierra',
      fechaNacimiento: '1985-08-30',
      id: 1,
    },
    {
      nombre: 'Federico',
      apellido: 'Aloi',
      fechaNacimiento: '1991-10-30',
      id: 2,
    },
  ],
});
