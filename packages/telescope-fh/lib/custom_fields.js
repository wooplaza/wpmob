var sku = {
  propertyName: 'sku',
  propertySchema: {
    type: String,
    label: 'SKU',
    optional: true,
    autoform: {
      editable: true,
      omit: false
    }
  }
}

var prodCategory = {
  propertyName: 'prodCategory',
  propertySchema: {
    type: String,
    label: 'Product Category',
    optional: true,
    autoform: {
      editable: true,
      omit: false
    }
  }
}

var price = {
  propertyName: 'price',
  propertySchema: {
    type: Number,
    label: 'Price',
    optional: true,
    autoform: {
      editable: true,
      omit: false
    }
  }
}


addToPostSchema.push(sku);
addToPostSchema.push(prodCategory);
addToPostSchema.push(price);