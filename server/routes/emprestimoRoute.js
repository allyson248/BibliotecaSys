import express from 'express';
import EmprestimoController from '../controllers/EmprestimoController.js';



const router = express.Router();

let ctrl = new EmprestimoController();

router.get("/", (req, res) => {
    /*  #swagger.tags = ['Emprestimos']
        #swagger.summary = 'Lista todos os Empréstimos'
        #swagger.description = 'Retorna todos os Empréstimos cadastrados.'
    */
    ctrl.listar(req, res);
});

router.post("/", (req, res) => {
    /*  #swagger.tags = ['Emprestimos']
        #swagger.summary = 'Cadastra Empréstimo'
        #swagger.description = 'Cadastra um novo Empréstimo.'
    */
    ctrl.gravar(req, res);
});

router.put("/:id", (req, res) => {
    /*  #swagger.tags = ['Emprestimos']
        #swagger.summary = 'Atualiza um Empréstimo'
        #swagger.description = 'Atualiza o Empréstimo desejado'
    */
    ctrl.atualizar(req, res);
});

router.get("/:id", (req, res) => {
    /*  #swagger.tags = ['Emprestimos']
        #swagger.summary = 'Busca um Empréstimo pelo id'
        #swagger.description = 'Retorna todos os Empréstimo cadastrados de acordo com o parametro.'
    */
    ctrl.obter(req, res);
});

router.delete("/:id", (req, res) => {
    /*  #swagger.tags = ['Emprestimos']
        #swagger.summary = 'Deleta um Empréstimo'
        #swagger.description = 'Deleta o Empréstimo desejado'
    */
    ctrl.deletar(req, res);
});

export default router;