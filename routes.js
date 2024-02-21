const { Router } = require('express')

const router=require('express').Router
const routes=Router();
const contact=require('./controller');
routes.get('/',contact.get)
routes.get('/contact',contact.get)
routes.post('/contact',contact.post)

module.exports=routes;