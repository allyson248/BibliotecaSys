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
}