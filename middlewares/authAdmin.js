import "dotenv/config";

const ADMIN_USER = process.env.ADMIN_USER; // Ahora lee correctamente del backend

const authAdmin = (req, res, next) => {
    const { user } = req.body; 

    console.log(req, "REQ");
    
    if (user !== ADMIN_USER) {
        return res.status(403).json({ error: "No tienes permisos para realizar esta acción." });
    }

    next(); // Si es admin, permite la ejecución
};

export default authAdmin;
