import express from 'express';
import CategoriaController from '../controllers/CategoriaController.js';

const router = express.Router();

let ctrl = new CategoriaController();
/*  #swagger.tags = ['Categorias']
    #swagger.summary = 'Lista todas as categorias'
    #swagger.description = 'Retorna todas as categorias cadastradas.'
*/
router.get("/", (req, res) => {
    ctrl.listar(req, res);
});

export default router;