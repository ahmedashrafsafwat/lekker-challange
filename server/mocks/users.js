'use strict';

module.exports = function (app) {
  const express = require('express');
  let usersRouter = express.Router();

  /*
    catches the Update request on a user
    PATCH "localhost:4200/api/users/1"
  */
  usersRouter.patch('/:id', function (req, res) {
    // Update data from the UI
    const id = req.params.id

    // find the user index
    const userIndex = usersJson.data.findIndex(user => user.id === id);

    // update the user
    usersJson.data[userIndex].attributes.archived = !usersJson.data[userIndex].attributes.archived;

    res.send(usersJson);
  });

  /*
    catches the GET request on a user
    GET "localhost:4200/api/users/1"
  */
  usersRouter.get('/:id', function (request, res) {
    const user = usersJson.data.find((user) => {
      return user.id === request.params.id;
    });

    res.send({
      data: user
    });
  });

  /*
    catches the index request on users
    GET "localhost:4200/api/users"
  */
  usersRouter.get('/', function (req, res) {
    const getAll = req.query.getAll;
    if (getAll == 'true') {
      // get all
      res.send(usersJson);
    } else {
      // get unarchived only
      const unarchivedUsers = usersJson.data.filter(x => !x.attributes.archived);
      res.send({
        data: unarchivedUsers
      });
    }
  });

  app.use('/api/users', require('body-parser').json({
    type: 'application/*+json'
  }), usersRouter);
};

// USER MOCK DATA
const usersJson = {
  "data": [{
      "id": "1",
      "type": "user",
      "attributes": {
        "name": "Albert Einstein",
        "image": "/images/Einstein.jpg",
        "value": "false",
        "archived": false
      }
    },
    {
      "id": "2",
      "type": "user",
      "attributes": {
        "name": "Walt Disney",
        "image": "/images/Walt.jpg",
        "value": "false",
        "archived": true
      }
    },
    {
      "id": "3",
      "type": "user",
      "attributes": {
        "name": "Bruce Lee",
        "image": "/images/Bruce.jpg",
        "value": "false",
        "archived": false
      }
    },
    {
      "id": "4",
      "type": "user",
      "attributes": {
        "name": "Neil Armstrong",
        "image": "/images/Neil.jpg",
        "value": "false",
        "archived": true
      }
    }
  ]
};
