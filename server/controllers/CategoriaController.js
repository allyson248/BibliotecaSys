import CategoriaEntity from "../entities/CategoriaEntity.js";
import CategoriaRepository from "../repositories/CategoriaRepository.js";

export default class CategoriaController{
#repo;
constructor(){
    this.#repo = new CategoriaRepository();
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

            let categoria = await this.#repo.obter(id);
            if(categoria == null)
                return res.status(404).json({msg: "Categoria não encontrada!"});

            return res.status(200).json(categoria);
        }
        catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Erro interno do servidor"});
        }
    }

      async gravar(req, res) {
        try{
            let {descricao} = req.body;

            let entidade = new CategoriaEntity(0,descricao);
            if(entidade.validar()) {
                let result = await this.#repo.gravar(entidade);
                
                return res.status(201).json(entidade);
            }
            else {
                return res.status(400).json({msg: "Parâmetros incorretos. Por favor confira as informações da categoria"});
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
            let categoria = await this.#repo.obter(id);
            if(categoria == null)
                return res.status(404).json({msg: "Categoria não encontrada!"})
        
            let result = await this.#repo.excluir(id);

            if(result == true){
                return res.status(200).json({msg: "Categoria excluída!"});
            }
            else {
                throw new Error("Erro ao excluir a categoria do banco de dados");
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
            let {descricao} = req.body;
            let categoria = new CategoriaEntity(id,descricao);
            if(categoria.validar() && id) {
                let categoriaEncontrada = await this.#repo.obter(id);
                if(categoriaEncontrada) {
                    let result = await this.#repo.atualizar(categoria);
                    if(result) {
                        return res.status(200).json({msg: "Categoria atualizada com sucesso!"});
                    }

                    throw new Error("Erro ao atualizar categoria no banco de dados");
                }
                else {
                    return res.status(404).json({msg: "Categoria não encontrada!"});
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