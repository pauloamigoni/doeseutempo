const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const AboutController = require('./controllers/AboutController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(1).max(13),
    description: Joi.string(),
    enderecos: Joi.array(),
  })
}), OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}),IncidentController.index);
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required
  })
}), IncidentController.delete);

routes.get('/profile',celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProfileController.index);


routes.get('/about', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), AboutController.index);






module.exports = routes;