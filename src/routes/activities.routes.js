'use strict'

var express = require('express');
var api = express.Router();
const controller = require('../controllers/activities.controller');

api.get('/api/activities', controller.geActivities);

module.exports = api;