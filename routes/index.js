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

router.get('/product/:id', function(req, res) { // GET -> PARAMS, POST -> body
  Products.getById(req.params.id)
  .then(function(product) {  
      comment.find({
          product_id : req.params.id
      })
      .then(comments => res.render('product', {product:product[0], comments}))
  })
})

router.post('/product', function(req, res) {
  /* salvar comentário */
  comment.create({
    product_id: req.body.product_id,
    author: req.body.author,
    comment: req.body.comment
  }).then(() => res.send("Comentário adicionado com sucesso!"));
});

module.exports = router;
