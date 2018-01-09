const bodyParser = require('body-parser');
const reports = require('./data.json');

const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());

    server.get('/reports', (req, res) => (
      res.status(200).json(reports.elements)
    ));

    server.put('/report/:id', (req, res) => (
      res.status(200).json({
        id: req.params.id,
        ticketState: req.body.ticketState,
        message: `Update report successful with id - ${req.params.id} to status ${req.body.ticketState}`
      })
    ));

    server.get('*', (req, res) => (
      handle(req, res)
    ));

    server.listen(port, (err) => {
      if (err) throw err;
    });
  });
