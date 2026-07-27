import express from 'express';
import AutorController from '../controllers/AutorController.js';

const router = express.Router();

let ctrl = new AutorController();

router.get("/", (req, res) => {
    /*  #swagger.tags = ['Autores']
        #swagger.summary = 'Lista todos os Autores'
        #swagger.description = 'Retorna todos os Autores cadastrados.'
    */
    ctrl.listar(req, res);
});

router.post("/", (req, res) => {
    /*  #swagger.tags = ['Autores']
        #swagger.summary = 'Cadastra Autor'
        #swagger.description = 'Cadastra um novo autor.'
    */
    ctrl.gravar(req, res);
});

router.put("/:id", (req, res) => {
    /*  #swagger.tags = ['Autores']
        #swagger.summary = 'Atualiza um autor'
        #swagger.description = 'Atualiza o autor desejado'
    */
    ctrl.atualizar(req, res);
});

router.get("/:id", (req, res) => {
    /*  #swagger.tags = ['Autores']
        #swagger.summary = 'Busca um autor pelo id'
        #swagger.description = 'Retorna todos os Autores cadastrados de acordo com o parametro.'
    */
    ctrl.obter(req, res);
});

router.delete("/:id", (req, res) => {
    /*  #swagger.tags = ['Autores']
        #swagger.summary = 'Deleta um autor'
        #swagger.description = 'Deleta o autor desejado'
    */
    ctrl.deletar(req, res);
});

export default router;