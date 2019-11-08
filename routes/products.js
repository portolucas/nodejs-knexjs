const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Comment = require('../store/Comment')

router.get('/:id', function(req, res) {
  Products.getById(req.params.id)
  .then(function(product) {  
      Comment.find({
          product_id : req.params.id
      })
      .then(comments => res.render('product', {product:product[0], comments}))
  })
});

module.exports = router;
