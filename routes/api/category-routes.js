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

//Create  a new catagory
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    //This takes care if the 400 ststus w/ msg
    res.status(400).json({
      message: 'creation failed'
    });
  }
});

//Below this function updates the catagory by Id w/ matching Id
router.put('/:id', async (req, res) => {
  try {
    const updated = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    //if catagory not found, send 404 status w/ msg
    !updated[0] ? res.status(404).json({
      message: 'id not found'
    }) : res.status(200).json(updated);
  }
  //this handles the error with a 500 status w/ msg
  catch (err) {
    res.status(500).json({
      message: 'update failed'
    });
  }
});

//Here we are deleting catagory by Id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    //if catagory not found, send 404 status w/ msg
    !deleted ? res.status(404).json({
      message: 'id not found'
    }) : res.status(200).json(deleted);
  }
  //this handles the error with a 500 status w/ msg
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;