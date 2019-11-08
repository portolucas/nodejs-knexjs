const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const comment = require('../store/Comment');


/* GET home page. */
router.get('/', function(_, res) {
  Products.get()
    .then(function(products) {      
      res.render('index', { products });
    })
});

router.get('/product/:id', function(req, res) {
  Products.getById(req.params.id)
  .then(function(product) {  
      comment.find({
          product_id : req.params.id
      })
      .then(comments => res.render('product', {product:product[0], comments}))
  })
})

router.post('/:id', function(req, res) {
  comment.create(req.body)
  .then(() => console.log('Deu'))
  .catch(console.log('Errou'))
  
  Products.getById(req.body.product_id)
  .then(function(products) {
    res.render('product', {products} )
  })
})

module.exports = router;
