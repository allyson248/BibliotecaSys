import express from 'express';
import LivroController from '../controllers/LivroController.js';



const router = express.Router();

let ctrl = new LivroController();

router.get("/", (req, res) => {
    /*  #swagger.tags = ['Livros']
        #swagger.summary = 'Lista todos os Livros'
        #swagger.description = 'Retorna todos os Livros cadastrados.'
    */
    ctrl.listar(req, res);
});

router.post("/", (req, res) => {
    /*  #swagger.tags = ['Livros']
        #swagger.summary = 'Cadastra Livro'
        #swagger.description = 'Cadastra um novo Livro.'
    */
    ctrl.gravar(req, res);
});

router.put("/:id", (req, res) => {
    /*  #swagger.tags = ['Livros']
        #swagger.summary = 'Atualiza um Livro'
        #swagger.description = 'Atualiza o Livro desejado'
    */
    ctrl.atualizar(req, res);
});

router.get("/:id", (req, res) => {
    /*  #swagger.tags = ['Livros']
        #swagger.summary = 'Busca um Livro pelo id'
        #swagger.description = 'Retorna todos os Livro cadastrados de acordo com o parametro.'
    */
    ctrl.obter(req, res);
});

router.delete("/:id", (req, res) => {
    /*  #swagger.tags = ['Livros']
        #swagger.summary = 'Deleta um Livro'
        #swagger.description = 'Deleta o Livro desejado'
    */
    ctrl.deletar(req, res);
});

export default router;