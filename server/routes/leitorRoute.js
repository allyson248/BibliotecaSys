import express from 'express';
import LeitorController from '../controllers/LeitorController.js';


const router = express.Router();

let ctrl = new LeitorController();

router.get("/", (req, res) => {
    /*  #swagger.tags = ['Leitores']
        #swagger.summary = 'Lista todos os Leitores'
        #swagger.description = 'Retorna todos os Leitores cadastrados.'
    */
    ctrl.listar(req, res);
});

router.post("/", (req, res) => {
    /*  #swagger.tags = ['Leitores']
        #swagger.summary = 'Cadastra Leitor'
        #swagger.description = 'Cadastra um novo leitor.'
    */
    ctrl.gravar(req, res);
});

router.put("/:id", (req, res) => {
    /*  #swagger.tags = ['Leitores']
        #swagger.summary = 'Atualiza um leitor'
        #swagger.description = 'Atualiza o leitor desejado'
    */
    ctrl.atualizar(req, res);
});

router.get("/:id", (req, res) => {
    /*  #swagger.tags = ['Leitores']
        #swagger.summary = 'Busca um leitor pelo id'
        #swagger.description = 'Retorna todos os Leitores cadastrados de acordo com o parametro.'
    */
    ctrl.obter(req, res);
});

router.delete("/:id", (req, res) => {
    /*  #swagger.tags = ['Leitores']
        #swagger.summary = 'Deleta um leitor'
        #swagger.description = 'Deleta o leitor desejado'
    */
    ctrl.deletar(req, res);
});

export default router;