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
    type: String,
    default:
      "https://yata.ostr.locaweb.com.br/9709eaea2a20f9ad958d6bb3d6c1ffeae7b02eaa1af5e7bfefc4df8de35d47f4"
  }
});

const Hamburguer = moongose.model("Hamburguer", HamburguerSchema);

module.exports = Hamburguer;
