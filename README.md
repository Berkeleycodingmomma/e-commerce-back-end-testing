# e-commerce-back-end-testing
#
# Object-Relational Mapping (ORM), E-commerce Back End
#
## Description 
Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.
#
I have built the back end for an e-commerce site using working Express.js API and configured it to use Sequelize to interact with a MySQL database. I then took the application's API routes and tested them in Insomnia Core.
#
## Built with/Installs
#
- JSON:[ JSON](https://www.npmjs.com/package/json)
- Dotenv: [8.6.0](https://www.npmjs.com/package/dotenv)
- Express: [4.17.1](https://www.npmjs.com/package/express)
- Node.js: [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Express.js:[Express.js](https://expressjs.com/en/starter/installing.html)
- Node MySql2: [2.3.3](https://www.npmjs.com/package/mysql2)
- Sequelize: [6.29.3](https://www.npmjs.com/package/sequelize)
- Insomnia: [by Kong](https://insomnia.rest/)
- Nodemon: [2.0.12](https://www.npmjs.com/package/nodemon/v/2.0.12)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

#
## Visual image of the application's API route being tested in Insomnia Core.

<img width="1440" alt="Screen Shot 2023-05-04 at 11 44 34 PM" src="https://user-images.githubusercontent.com/127444682/236385536-39e4df25-3f1a-426b-9416-98f0f607b497.png">

#
## Technology Used   
express cheatsheet: https://quickref.me/express
express help info: https://expressjs.com/en/guide/routing.html
mysql cheat sheet: https://quickref.me/mysql
sequelize docs: https://sequelize.org/docs/v6/core-concepts/model-basics/

#

## Youtube link to a walk-through demonstrating how to test E-commerce Back End
#

* [Youtube-demo-link](https://youtu.be/e76CAdNI7Sw)

#

## Code examples of the project

#
--------------------------------------------------------------------------------------------------------------------------------------------------------

 ```sh

/Below we are asking fot a new tag to be create
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json({ message: "Tag creation failed" });
  }
});

// Here we are asking to update a tag by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    !updated[0]
      ? res.status(404).json({ message: "No tag found with this id!" })
      : res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Tag update failed" });
  }
});

//Now we are aking to delete a tag by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });
    !deleted
      ? res.status(404).json({ message: "No tag found with this id!" })
      : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: "Tag deletion failed" });
  }
});

module.exports = router;


```

**(ABOVE)-These are the create, update, and delete by Id functions for tag-routes. 

--------------------------------------------------------------------------------------------------------------------------------------------------------

```sh

router.post("/", (req, res) => {
  Product.create(req.body)
    .then((product) => {
      if (req.body.tagIds.length) {
        const productTagIds = req.body.tagIds.map((tag_id) => {
          return {

            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIds);
      }
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      res.status(400).json({
        message: "Creation failed",
        error: err
      });
    });
});
 
```

**(ABOVE)- Below we can create a new product w/ this function

--------------------------------------------------------------------------------------------------------------------------------------------------------

```sh

router.put("/:id", async (req, res) => {
  try {
    const updated = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    !updated[0]
      ? res.status(404).json({ message: "No tag found with this id!" })
      : res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Tag update failed" });
  }
});

    
```

**(ABOVE)- Here we are asking to update a tag by ID

--------------------------------------------------------------------------------------------------------------------------------------------------------

```sh
  
  
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;


```
**(ABOVE)- Setting the data type to string

--------------------------------------------------------------------------------------------------------------------------------------------------------

## Author Info

### Amanda Gray

* [Linkedin](https://www.linkedin.com/in/amanda-gray-831a65254/)
* [Github](https://github.com/Berkeleycodingmomma)

## Credits

Shout out to all the TA's and Google Search!

GOOGLE!  Seriously, thank you google search!





© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


