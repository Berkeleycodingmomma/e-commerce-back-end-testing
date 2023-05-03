const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');

// Below we are getting all categories and their associated products and sending a 500 status if error occurs
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{
        model: Product
      }]
    });
    res.status(200).json(categories);

  } catch (err) {
    res.status(500).json({
      message: 'not found!'
    });
  }
});

//Below we are getting a categoryby Id, find matching Id. 
router.get('/:id', async (req, res) => {
  try {

    const category = await Category.findByPk(req.params.id, {
      include: [{
        model: Product
      }]
    });
//If not found, user will recieve a 404 ststus w/msg
    if (!category) {
      res.status(404).json({
        message: 'id not found'
      });
      return;
    }
    res.status(200).json(category);
    //This will handle the errro and send a 500 status w/ msg
  } catch (err) {
    res.status(500).json({
      message: 'not found!'
    });
  }
});




router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});




router.post('/', (req, res) => {
  // create a new category
});




router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;