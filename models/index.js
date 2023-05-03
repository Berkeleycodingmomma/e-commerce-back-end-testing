// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//Below is the foreign key in the product model
Product.belongsTo(Category, {
  foreignKey: 'category_id', 
});

// Categories have many Products
//Below is the foreign key in the intermediate model
Product.belongsToMany(Tag, {
  through: ProductTag, 
  foreignKey: 'product_id', 
});

// Products belongToMany Tags (through ProductTag)
// Below is the foreign key in the Tag model
Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: 'tag_id', 
});
// Tags belongToMany Products (through ProductTag)
//Below is the foreign key in the Product model
Category.hasMany(Product, {
  foreignKey: 'category_id', 
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
