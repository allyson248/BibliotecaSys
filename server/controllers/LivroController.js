import AutorEntity from "../entities/AutorEntity.js";
import CategoriaEntity from "../entities/CategoriaEntity.js";
import LivroEntity from "../entities/LivroEntity.js";
import LivroRepository from "../repositories/LivroRepository.js";

export default class LivroController{
    #repo;
    constructor(){
        this.#repo = new LivroRepository();
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
            let {titulo, isbn, ano, editora, quantidade,capa,autor,categoria} = req.body;
            if (!autor || !categoria) {
            return res.status(400).json({
        msg: "Autor e categoria são obrigatórios."
             });
        }
            let entidade = new LivroEntity(0, titulo, isbn, ano, editora,quantidade,capa, new AutorEntity(autor.id),new CategoriaEntity(categoria.id));
            if(entidade.validar()) {
                let result = await this.#repo.gravar(entidade);
                
                return res.status(201).json(entidade);
            }
            else {
                return res.status(400).json({msg: "Parâmetros incorretos. Por favor confira as informações do livro!"});
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
            let livro = await this.#repo.obter(id);
            if(livro == null)
                return res.status(404).json({msg: "Livro não encontrado!"})
        
            let result = await this.#repo.excluir(id);

            if(result == true){
                return res.status(200).json({msg: "Livro excluído!"});
            }
            else {
                throw new Error("Erro ao excluir a livro do banco de dados");
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

            let livro = await this.#repo.obter(id);
            if(livro == null)
                return res.status(404).json({msg: "Livro não encontrado!"});

            return res.status(200).json(livro);
        }
        catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Erro interno do servidor"});
        }
    }

      async atualizar(req, res) {
        try{
            let {id} = req.params;
             
            let {titulo, isbn, ano, editora, quantidade,capa,autor,categoria} = req.body;
            if (!autor || !categoria) {
    return res.status(400).json({
        msg: "Autor e categoria são obrigatórios."
    });
}
            let livro = new LivroEntity(id, titulo, isbn, ano, editora,quantidade,capa, new AutorEntity(autor.id),new CategoriaEntity(categoria.id));
            if(livro.validar() && id) {
                let livroEncontrado = await this.#repo.obter(id);
                if(livroEncontrado) {
                    let result = await this.#repo.atualizar(livro);
                    if(result) {
                        return res.status(200).json({msg: "Livro atualizado com sucesso!"});
                    }

                    throw new Error("Erro ao atualizar livro no banco de dados");
                }
                else {
                    return res.status(404).json({msg: "Livro não encontrado!"});
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