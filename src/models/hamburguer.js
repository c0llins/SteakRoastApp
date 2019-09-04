const moongose = require("mongoose");

const HamburguerSchema = new moongose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    require: true
  },
  ingredients: [
    {
      type: String
    }
  ],
  img: {
    data: Buffer,
    contentType: String
  }
});

const Hamburguer = moongose.model("Hamburguer", HamburguerSchema);

module.exports = Hamburguer;
