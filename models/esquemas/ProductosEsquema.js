import mongoose from "mongoose";

const ProductosEsquema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    precio: Number,
    stock: Number,
    marca: String,
    category: String,
    description: String,
    foto: String,
    envio: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default ProductosEsquema;
