const pizza = {
  type: 'object', required: ['name', 'price'],
  properties: {
    id: { type: 'integer', readOnly: true },
    name: { type: 'string', minLength: 1, maxLength: 100, example: 'Margherita' },
    description: { type: 'string', example: 'Tomate et mozzarella' },
    price: { type: 'number', minimum: 0, example: 14.5 },
    imageUrl: { type: 'string', nullable: true, example: 'https://example.com/pizza.jpg' }
  }
};
const body = { required: true, content: { 'application/json': { schema: pizza } } };
const response = (description, schema) => ({ description,
  ...(schema ? { content: { 'application/json': { schema } } } : {}) });
const errors = {
  400: response('Requête invalide'), 404: response('Ressource introuvable'),
  409: response('Conflit'), 500: response('Erreur interne'), 503: response('Service indisponible')
};

export default {
  openapi: '3.0.3', info: { title: 'Foodtruck API', version: '1.0.0' },
  paths: {
    '/api/pizzas': {
      get: { summary: 'Lister les pizzas', responses: { 200: response('Liste', { type: 'array', items: pizza }) } },
      post: { summary: 'Créer une pizza', requestBody: body, responses: { 201: response('Pizza créée', pizza), ...errors } }
    },
    '/api/pizzas/{id}': {
      parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer', minimum: 1 } }],
      get: { summary: 'Consulter une pizza', responses: { 200: response('Pizza', pizza), ...errors } },
      put: { summary: 'Remplacer une pizza', requestBody: body, responses: { 200: response('Pizza modifiée', pizza), ...errors } },
      delete: { summary: 'Supprimer une pizza', responses: { 204: response('Pizza supprimée'), ...errors } }
    }
  }
};
