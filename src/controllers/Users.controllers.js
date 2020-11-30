
const User = require('../application/User.service');
const user = new User("User");
const getUsers = async function (req, res) {

    var usuarios = await user.getAll();
    res.json({ payload: usuarios });
    //     include:[User.Task]
}
const postUser = async function (req, res) {
    try {
        let nombre = req.body.nombre;
        let apellidos = req.body.apellidos;
        let email = req.body.email;
        // let email = req.body.email;
        let body = {
            nombre,
            apellidos,
            email
        }

        let usuario;
        // usuario = await User.findOne({ where: { email } })

        // if (usuario != null) {
        //     return res.status(412).json({ mesagge: "El email se encuentra activo, intente uno nuevo." })
        // }

        usuario = await user.add(body);
        res.json({ payload: usuario })

    } catch (error) {
        res.status(412).json({ mesagge: "Error" + error })
    }
}
const deleteUser = async function (req, res) {
    id = req.params.id;
    try {
        let usuario = await user.delete(id)

        if (usuario == 0) {
            return res.status(412).json({ mesagge: "No hay ningun registro con esa información " })
        }
        res.json({ mesagge: "Se elimino exitosamente" })
    } catch (error) {
        res.status(412).json({ mesagge: "Error mientras se eliminaba " + error.message })
    }
}
const updateUser = async function (req, res) {
    let { nombre, apellidos } = req.body;

    let id = +req.params.id;

    console.log({ nombre, apellidos }, "id " + id);

    try {
        let usuario = await user.update({ nombre, apellidos }, id)
        if (usuario[0] != 0) {
            return res.json({ mesagge: "Se actualizo exitosamente" })
        }
        return res.status(412).json({ mesagge: (typeof usuario == "object") ? "No hay dato" : usuario })
    } catch (error) {
        res.status(412).json({ mesagge: "Error mientras se eliminaba " + error })
    }
}
module.exports = {
    getUsers,
    postUser,
    deleteUser,
    updateUser
};