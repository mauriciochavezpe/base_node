const Joi = require('@hapi/joi');
module.exports = async (req, res, next) => {

    const schema = Joi.object({
        nombre: Joi.string().required(),
        apellidos: Joi.string().max(50).required(),
        email: Joi.string().email()
    })

    // return schema;
    const user = await schema.validate(req.body);

    if (user.error) {
        return res.status(412).json({ message: user.error.details[0].message })
    }
    next();
}
