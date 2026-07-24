import Entity from "./Entity.js"

export default class CategoriaEntity extends Entity{

    #id;
    #descricao;

     get id() {
        return this.#id;
    }
    
    set id(value) {
        this.#id = value;
    }

     get descricao() {
        return this.#descricao;
    }
    
    set descricao(value) {
        this.#descricao = value;
    }

    constructor(id,descricao){
        super();
        this.#id = id;
        this.#descricao = descricao;
    }

    static toMap(row) {
        let categoria = new CategoriaEntity(row["id_categoria"], row["descricao"])
     
        return categoria;
    }
     validar() {
        if(this.#id != null && this.#descricao != null && this.#descricao != "") {
            return true;
        }

        return false;
    }
}