const User = require('../model/User');
const getAllUsers = async function (req, res) {
    //retornaa todo los usuarios
    try {
        const result = await User.findAll({
            attributes: ['id', 'Nombres', 'Apellidos', 'descripcion', 'Fecha_Nacimiento']
        });
        res.json({
            data: result
        })

    } catch (error) {

        res.status(400).json({
            message: error
        })
    }
}
const getOneUser = async function (req, res) {
    var {
        id
    } = req.params;

    console.log("prueba", req.parms);
    try {
        const result = await User.findOne({
            where: {
                id
            }
        })
        res.json({
            status: 200,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
const updateUser = async function (req, res) {
    var {
        id
    } = req.params;

    var body = req.body;
    try {
        const result = await User.findAll({
            where: {
                id
            }
        })
        if (result.length > 0) {
            result.forEach(async (user) => {
                await user.update({
                    Nombres: body.Nombres,
                    Apellidos: body.Apellidos,
                    Fecha_Nacimiento: body.Fecha_Nacimiento,
                    descripcion: body.descripcion
                })
            });
        }
        res.json({
            status: 200,
            data: result
        })
    } catch (error) {
        console.log("error");
        res.status(400).json({
            message: error
        })
    }
}
const deleteUser = async function (req, res) {
    var {
        id
    } = req.params;
    try {
        var resultado = await User.destroy({
            where: {
                id
            }
        })
        console.log(resultado);
        res.json({
            status: 200,
            data: (resultado > 1) ? 'Exito en la eliminación' : 'Error al tratar eliminar dato'
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            data: error.message
        })
    }
}
module.exports = {
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
};