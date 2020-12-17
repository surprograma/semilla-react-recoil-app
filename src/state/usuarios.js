import { selector, selectorFamily } from 'recoil';

async function getJsonFromApi(path) {
  const response = await fetch(`http://localhost:3001/api/${path}`);
  return response.json();
}

export const todosLosUsuarios = selector({
  key: 'todosLosUsuarios',
  get: async () => (await getJsonFromApi('usuarios')).data,
});

export const usuarioPorId = selectorFamily({
  key: 'usuarioPorId',
  get: (id) => async () => await getJsonFromApi(`usuarios/${id}`),
});
