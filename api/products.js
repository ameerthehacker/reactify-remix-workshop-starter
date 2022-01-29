class Products {
  constructor() {
    this.nextId = 1;
    this.products = [];
  }

  add(title, description) {
    this.products.push({
      id: this.nextId++,
      title,
      description,
      comments: []
    });
  }

  getAll() {
    return this.products;
  }

  get(id) {
    return this.products.find(product => product.id == id);
  }

  delete(id) {
    this.products = this.products.filter(product => product.id != id);
  }
}

const products = new Products();

products.add('Absara Pencil', 'Extra marks for good handwriting');
products.add('Bose headphone', 'No money no sound!');

module.exports = products;
