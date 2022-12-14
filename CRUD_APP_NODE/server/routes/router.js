const express = require('express');
const services = require('../services/render');
const controller = require('../controller/controller');

const route = express.Router();

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description add Users
 * @method GET /add-user
 */
route.get('/add-user', services.add_user);

/**
 * @description update User
 * @method GET /update-user
 */
route.get('/update-user', services.update_user);

// API
route.post('/api/users', controller.create);
// http://localhost:3000/api/users?id=6395a157bea34125b896f759 (Query GET request to the server)
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;