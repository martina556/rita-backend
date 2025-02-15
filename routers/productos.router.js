import express from "express";
const routerProductos = express.Router();
import controladores from "../controllers/productos.controllers.js";
import authAdmin from "../middlewares/authAdmin.js";

// Obtener productos (todos pueden ver)
routerProductos.get("/", controladores.getAll);
routerProductos.get("/:id", controladores.getOne);

// Solo el admin puede agregar, modificar o eliminar
routerProductos.post("/", authAdmin, controladores.create);
routerProductos.put("/:id", authAdmin, controladores.update);
routerProductos.delete("/:id", authAdmin, controladores.remove);

export default routerProductos;
