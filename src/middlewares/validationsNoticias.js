const { body } = require("express-validator");
const fs = require("fs");

module.exports = [
    body("titulo").notEmpty().withMessage("El titulo no puede estar vacio!").isLength({min:2, max:50}).withMessage("El titulo debe tener entre 2 y 50 caracteres"),
    body("descripcion").notEmpty().withMessage("La descripcion no puede estar vacio!").isLength({min:2, max:50}).withMessage("La descripción debe tener entre 2 y 50 caracteres"),
    body("autor").notEmpty().withMessage("El autor no puede estar vacio!").isLength({min:2, max:50}).withMessage("Ingrese un nombre valido"),
    body("cuerpo_noticia").notEmpty().withMessage("La noticia no puede estar vacio!").isLength({min:2, max:5000}).withMessage("La descripción debe tener entre 2 y 50 caracteres"),
    body("categoria_id").notEmpty().withMessage("La categoria no puede venir vacio!"),
    body("image").custom((value, {req}) => {
        let file = req.file
        let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"]

        
        if (file == undefined) {
            throw new Error("Adjunte una image con formato: " + acceptedExtensions + " y peso máximo 10mb.")
        }
        else if (file.size > (1024 * 1024 * 10)) {
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            throw new Error("Adjunte una image con formato: " + acceptedExtensions + " y peso máximo 10mb.")
        }
        return true
    })

]