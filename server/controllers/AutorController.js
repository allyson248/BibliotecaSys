import AutorEntity from "../entities/AutorEntity.js";
import AutorRepository from "../repositories/AutorRepository.js";

export default class AutorController {
    #repo;
    constructor(){
        this.#repo = new AutorRepository();
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

            let autor = await this.#repo.obter(id);
            if(autor == null)
                return res.status(404).json({msg: "Autor não encontrado!"});

            return res.status(200).json(autor);
        }
        catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Erro interno do servidor"});
        }
    }

     async gravar(req, res) {
            try{
                let {nome,nacionalidade} = req.body;
    
                let entidade = new AutorEntity(0,nome,nacionalidade);
                if(entidade.validar()) {
                    let result = await this.#repo.gravar(entidade);
                    
                    return res.status(201).json(entidade);
                }
                else {
                    return res.status(400).json({msg: "Parâmetros incorretos. Por favor confira as informações do autor"});
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
            let autor = await this.#repo.obter(id);
            if(autor == null)
                return res.status(404).json({msg: "Autor não encontrado!"})
        
            let result = await this.#repo.excluir(id);

            if(result == true){
                return res.status(200).json({msg: "Autor excluído!"});
            }
            else {
                throw new Error("Erro ao excluir o autor do banco de dados");
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
                let {nome,nacionalidade} = req.body;
                let autor = new AutorEntity(id,nome,nacionalidade);
                if(autor.validar() && id) {
                    let autorEncontrado = await this.#repo.obter(id);
                    if(autorEncontrado) {
                        let result = await this.#repo.atualizar(autor);
                        if(result) {
                            return res.status(200).json({msg: "Autor atualizado com sucesso!"});
                        }
    
                        throw new Error("Erro ao atualizar autor no banco de dados");
                    }
                    else {
                        return res.status(404).json({msg: "Autor não encontrado!"});
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