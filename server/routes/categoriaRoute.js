import express from 'express';
import CategoriaController from '../controllers/CategoriaController.js';

const router = express.Router();

let ctrl = new CategoriaController();

router.get("/", (req, res) => {
    /*  #swagger.tags = ['Categorias']
        #swagger.summary = 'Lista todas as categorias'
        #swagger.description = 'Retorna todas as categorias cadastradas.'
    */
    ctrl.listar(req, res);
});

router.post("/", (req, res) => {
    /*  #swagger.tags = ['Categorias']
        #swagger.summary = 'Cadastra categorias'
        #swagger.description = 'Cadastra uma nova categoria.'
    */
    ctrl.gravar(req, res);
});

router.put("/:id", (req, res) => {
    /*  #swagger.tags = ['Categorias']
        #swagger.summary = 'Atualiza uma categoria'
        #swagger.description = 'Atualiza a categoria desejada'
    */
    ctrl.atualizar(req, res);
});

router.get("/:id", (req, res) => {
    /*  #swagger.tags = ['Categorias']
        #swagger.summary = 'Busca uma categoria pelo id'
        #swagger.description = 'Retorna todas as categorias cadastradas de acordo com o parametro.'
    */
    ctrl.obter(req, res);
});

router.delete("/:id", (req, res) => {
    /*  #swagger.tags = ['Categorias']
        #swagger.summary = 'Deleta uma categoria'
        #swagger.description = 'Deleta a categoria desejada'
    */
    ctrl.deletar(req, res);
});

export default router;