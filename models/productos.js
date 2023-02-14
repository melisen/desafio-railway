const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  title: { type: String, required: true, max: 100 },
  price: { type: String, required: true, max: 100 },
  thumbnail: { type: String, required: true, max: 10000 }
});

const ProdModel = mongoose.model("productos", ProductoSchema);
module.exports = ProdModel;