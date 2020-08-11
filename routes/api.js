/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

require('dotenv').config();
var expect = require('chai').expect;
var MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectID;

const DB = process.env.DB; 
const CONNECTION_STRING = process.env.MONGO_URI; 
console.log(CONNECTION_STRING);
MongoClient.connect(DB||CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
});

module.exports = function (app) {

  app.route('/api/issues/:project')
  
    .get(function (req, res){
      var project = req.params.project;
      
    })
    
    .post(function (req, res){
      var project = req.params.project;
      
    })
    
    .put(function (req, res){
      var project = req.params.project;
      
    })
    
    .delete(function (req, res){
      var project = req.params.project;
      
    });
    
};
