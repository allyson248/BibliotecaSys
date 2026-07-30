import Entity from "./Entity.js";

export default class LeitorEntity extends Entity{

    #id
    #nome
    #cpf
    #telefone
    #email
    #ativo

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

    get cpf() {
    return this.#cpf;
    }

    set cpf(value) {
        this.#cpf = value;
    }

    get telefone() {
        return this.#telefone;
    }

    set telefone(value) {
        this.#telefone = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get ativo() {
        return this.#ativo;
    }

    set ativo(value) {
        this.#ativo = value;
    }

     constructor(id,nome,cpf,telefone,email,ativo){
        super();
        this.#id = id;
        this.#nome = nome;
        this.#cpf = cpf;
        this.#telefone = telefone;
        this.#email = email;
        this.#ativo = ativo;
    }

    static toMap(row) {
        let leitor = new LeitorEntity(row["id_leitor"], row["nome"],row["cpf"],row["telefone"],row["email"],row["ativo"]);
     
        return leitor;
    }

    validar() {
    return this.#nome &&
           this.#cpf &&
           this.#email;
}

}