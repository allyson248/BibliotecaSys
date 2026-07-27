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
/*  #swagger.tags = ['Categorias']
    #swagger.summary = 'Cadastra categorias'
    #swagger.description = 'Cadastra uma nova categoria.'
*/
router.post("/", (req, res) => {
    ctrl.gravar(req, res);
});
/*  #swagger.tags = ['Categorias']
    #swagger.summary = 'Atualiza uma categoria'
    #swagger.description = 'Atualiza a categoria desejada'
*/
router.put("/:id", (req, res) => {
    ctrl.atualizar(req, res);
});
/*  #swagger.tags = ['Categorias']
    #swagger.summary = 'Lista certas categorias'
    #swagger.description = 'Retorna todas as categorias cadastradas de acordo com o parametro.'
*/
router.get("/:id", (req, res) => {
    ctrl.obter(req, res);
});
/*  #swagger.tags = ['Categorias']
    #swagger.summary = 'Deleta uma categoria'
    #swagger.description = 'Deleta a categoria desejada'
*/
router.delete("/:id", (req, res) => {
    ctrl.deletar(req, res);
});

export default router;