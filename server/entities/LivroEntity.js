import AutorEntity from "./AutorEntity.js";
import CategoriaEntity from "./CategoriaEntity.js";
import Entity from "./Entity.js";

export default class LivroEntity extends Entity{
#id;
#titulo;
#isbn;
#ano;
#editora;
#quantidade;
#capa;
#autor;
#categoria;

    get id() {
        return this.#id;
    }
    
    set id(value) {
        this.#id = value;
    }

    get titulo() {
    return this.#titulo;
}

set titulo(value) {
    this.#titulo = value;
}

get isbn() {
    return this.#isbn;
}

set isbn(value) {
    this.#isbn = value;
}

get ano() {
    return this.#ano;
}

set ano(value) {
    this.#ano = value;
}

get editora() {
    return this.#editora;
}

set editora(value) {
    this.#editora = value;
}

get quantidade() {
    return this.#quantidade;
}

set quantidade(value) {
    this.#quantidade = value;
}

get capa() {
    return this.#capa;
}

set capa(value) {
    this.#capa = value;
}

get autor() {
    return this.#autor;
}

set autor(value) {
    this.#autor = value;
}

get categoria() {
    return this.#categoria;
}

set categoria(value) {
    this.#categoria = value;
}

constructor( id,titulo,isbn,ano, editora, quantidade,capa,autor,categoria){
    super();
    this.#id = id;
    this.#titulo = titulo;
    this.#isbn = isbn;
    this.#ano = ano;
    this.#editora = editora;
    this.#quantidade = quantidade;
    this.#capa = capa;
    this.#autor = autor;
    this.#categoria = categoria;
}

    static toMap(row) {

    let livro = new LivroEntity(
        row["id_livro"],
        row["titulo"],
        row["isbn"],
        row["ano"],
        row["editora"],
        row["quantidade"],
        row["capa"],
        new AutorEntity(row["id_autor"]),
        new CategoriaEntity(row["id_categoria"])
    );

    if (row["autor_nome"] != null) {
        livro.autor.nome = row["autor_nome"];
    }

    if (row["categoria_descricao"] != null) {
        livro.categoria.descricao = row["categoria_descricao"];
    }

    return livro;
}

    validar() {
    return (
        this.#titulo?.trim() &&
        this.#isbn?.trim() &&
        this.#ano &&
        this.#editora?.trim() &&
        this.#quantidade >= 0 &&
        this.#autor &&
        this.#autor.id > 0 &&
        this.#categoria &&
        this.#categoria.id > 0
    );
}

}