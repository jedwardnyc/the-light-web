const router = require('express').Router();
const { LineItem } = require('../db').models;

router.get('/', (req, res, next) => {
  LineItem.findAll()
  .then(lineItems => res.send(lineItems))
  .catch(next);
});

router.post('/cart', (req, res, next) => {
  LineItem.addToLineItems(req.body)
  .then(lineItems => res.send(lineItems))
  .catch(next);
});

router.post('/', (req, res, next) => {
  LineItem.create(req.body)
  .then(lineItem => res.send(lineItem))
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  LineItem.findById(req.params.id)
  .then(lineItem => {
    lineItem.update(req.body);
    res.send(lineItem);
  })
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  LineItem.findById(req.params.id)
  .then(lineItem => lineItem.destroy())
  .then(res.sendStatus(204))
  .catch(next);
});

module.exports = router;
