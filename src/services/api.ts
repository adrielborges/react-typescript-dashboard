import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

// Listar a estrutura de menu a partir dos elementos adquiridos pela api: https://desafioreact.s3.amazonaws.com/menu/menu.json

// Exibir as informações relativos ao elemento escolhido no componente 2, a informações estão disponíveisb em:
// https://desafioreact.s3.amazonaws.com/menu/itens.json
