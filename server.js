import express from "express";
import cors from "cors";
import morgan from 'morgan';
import "dotenv/config";
import routerProductos from "./routers/productos.router.js";
import getConnection from "./utils/get-connection.js";
import routerCarritos from "./routers/carrito.router.js";


const app = express();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";
const uri_remota = process.env.URI_MONGO;

app.use(morgan())
app.use(express.json());
app.use(cors());

app.use("/api/v1/productos", routerProductos);
app.use("/api/v1/carritos", routerCarritos);


app.get("/", (req, res) => {
  res.redirect("/api/v1/productos");
});

app.all("*", (req, res) => {
  res.status(404).json({
    ruta: `${req.url}`,
    metodo: `${req.method}`,
    mensaje: "No se puede acceder al recurso que están queriendo acceder",
  });
});


app.listen(PORT, HOST, (err) => {
  if (err) throw new Error("No se pudo levantar el servidor", err);
  console.log(`Servidor funcionando en: http://${HOST}:${PORT}`);
  getConnection(uri_remota);
});
