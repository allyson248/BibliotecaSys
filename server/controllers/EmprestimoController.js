import LivroEntity from "../entities/LivroEntity.js";
import LeitorEntity from "../entities/LeitorEntity.js";
import EmprestimoEntity from "../entities/EmprestimoEntity.js";
import EmprestimoRepository from "../repositories/EmprestimoRepository.js";

export default class EmprestimoController{
    #repo;
    constructor(){
        this.#repo = new EmprestimoRepository();
    }

       async listar(req,res){
    try {
        let entidades = await this.#repo.listar();
            return res.status(200).json(entidades);
        
    } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Erro interno do servidor"});
    }
}
    async gravar(req, res) {
        try{
            let {livro, leitor, dataEmprestimo, dataPrevista, dataDevolucao, status} = req.body;
            if (!livro || !leitor) {
            return res.status(400).json({
        msg: "Livro e leitor são obrigatórios."
             });
        }
            let entidade = new EmprestimoEntity(0, new LivroEntity(livro.id), new LeitorEntity(leitor.id), dataEmprestimo, dataPrevista, dataDevolucao, status);
            if(entidade.validar()) {
                let result = await this.#repo.gravar(entidade);
                
                return res.status(201).json(entidade);
            }
            else {
                return res.status(400).json({msg: "Parâmetros incorretos. Por favor confira as informações do empréstimo!"});
            }

        }
        catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Erro ao processar requisição"});
        }
    }

      async deletar(req, res) {
        try{
            let {id} = req.params;
            let emprestimo = await this.#repo.obter(id);
            if(emprestimo == null)
                return res.status(404).json({msg: "Empréstimo não encontrado!"})
        
            let result = await this.#repo.excluir(id);

            if(result == true){
                return res.status(200).json({msg: "Empréstimo excluído!"});
            }
            else {
                throw new Error("Erro ao excluir o empréstimo do banco de dados");
            }

         }
        catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Erro interno do servidor"});
        }
    }

    async obter(req, res) {
        try{
            let {id} = req.params;

            let emprestimo = await this.#repo.obter(id);
            if(emprestimo == null)
                return res.status(404).json({msg: "Empréstimo não encontrado!"});

            return res.status(200).json(emprestimo);
        }
        catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Erro interno do servidor"});
        }
    }

      async atualizar(req, res) {
        try{
            let {id} = req.params;
             
            let {livro, leitor, dataEmprestimo, dataPrevista, dataDevolucao, status} = req.body;
            if (!livro || !leitor) {
    return res.status(400).json({
        msg: "Livro e leitor são obrigatórios."
    });
}
            let emprestimo = new EmprestimoEntity(id, new LivroEntity(livro.id), new LeitorEntity(leitor.id), dataEmprestimo, dataPrevista, dataDevolucao, status);
            if(emprestimo.validar() && id) {
                let emprestimoEncontrado = await this.#repo.obter(id);
                if(emprestimoEncontrado) {
                    let result = await this.#repo.atualizar(emprestimo);
                    if(result) {
                        return res.status(200).json({msg: "Empréstimo atualizado com sucesso!"});
                    }

                    throw new Error("Erro ao atualizar empréstimo no banco de dados");
                }
                else {
                    return res.status(404).json({msg: "Empréstimo não encontrado!"});
                }
                
            }
            else {
                return res.status(400).json({msg: "Faltam informações para concluir a atualização!"});
            }

        }
        catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Erro ao processar requisição"});
        }
    }
}