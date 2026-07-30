import LeitorEntity from "../entities/LeitorEntity.js";
import LeitorRepository from "../repositories/LeitorRepository.js";

export default class LeitorController{
    #repo;
    constructor(){
        this.#repo = new LeitorRepository();
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

    async obter(req, res) {
        try{
            let {id} = req.params;

            let leitor = await this.#repo.obter(id);
            if(leitor == null)
                return res.status(404).json({msg: "Leitor não encontrado!"});

            return res.status(200).json(leitor);
        }
        catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Erro interno do servidor"});
        }
    }

    async gravar(req, res) {
            try{
                let {nome,cpf,telefone,email} = req.body;
    
                let entidade = new LeitorEntity(0,nome,cpf,telefone,email,true);
                if(entidade.validar()) {
                    let result = await this.#repo.gravar(entidade);
                    
                    return res.status(201).json(entidade);
                }
                else {
                    return res.status(400).json({msg: "Parâmetros incorretos. Por favor confira as informações do leitor"});
                }
    
            }
            catch(error) {
                console.error(error);
                return res.status(500).json({msg: "Erro interno do servidor"});
            }
        }

         async deletar(req, res) {
        try{
            let {id} = req.params;
            let leitor = await this.#repo.obter(id);
            if(leitor == null)
                return res.status(404).json({msg: "Leitor não encontrado!"})
        
            let result = await this.#repo.excluir(id);

            if(result == true){
                return res.status(200).json({msg: "Leitor excluído!"});
            }
            else {
                throw new Error("Erro ao excluir a leitor do banco de dados");
            }

         }
        catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Erro interno do servidor"});
        }
    }

    async atualizar(req, res) {
            try{
                let {id} = req.params;
                let {nome,cpf,telefone,email,ativo} = req.body;
                let leitor = new LeitorEntity(id,nome,cpf,telefone,email,ativo);
                if(leitor.validar() && id) {
                    let leitorEncontrado = await this.#repo.obter(id);
                    if(leitorEncontrado) {
                        let result = await this.#repo.atualizar(leitor);
                        if(result) {
                            return res.status(200).json({msg: "Leitor atualizado com sucesso!"});
                        }
    
                        throw new Error("Erro ao atualizar leitor no banco de dados");
                    }
                    else {
                        return res.status(404).json({msg: "Leitor não encontrado!"});
                    }
                    
                }
                else {
                    return res.status(400).json({msg: "Faltam informações para concluir a atualização!"});
                }
    
            }
            catch(error) {
                console.error(error);
                return res.status(500).json({msg: "Erro interno do servidor"});
            }
        }
    
}