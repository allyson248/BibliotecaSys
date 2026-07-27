import Entity from "./Entity.js";

export default class AutorEntity extends Entity{
    #id;
    #nome;
    #nacionalidade;

     get id() {
        return this.#id;
    }
    
    set id(value) {
        this.#id = value;
    }

     get nome() {
        return this.#nome;
    }
    
    set nome(value) {
        this.#nome = value;
    }
     get nacionalidade() {
        return this.#nacionalidade;
    }
    
    set nacionalidade(value) {
        this.#nacionalidade = value;
    }

    constructor(id,nome,nacionalidade){
        super();
        this.#id = id;
        this.#nome = nome;
        this.#nacionalidade = nacionalidade;
    }
     static toMap(row) {
        let autor = new AutorEntity(row["id_autor"], row["nome"],row["nacionalidade"])
     
        return autor;
    }

   validar() {
    return this.#nome != null && this.#nome.trim() != "";
}

}