import Entity from "./Entity.js";
import LeitorEntity from "./LeitorEntity.js";
import LivroEntity from "./LivroEntity.js";

export default class EmprestimoEntity extends Entity{
    #id;
    #livro;
    #leitor;
    #dataEmprestimo;
    #dataPrevista;
    #dataDevolucao;
    #status;

    get id() {
    return this.#id;
}

set id(value) {
    this.#id = value;
}

get livro() {
    return this.#livro;
}

set livro(value) {
    this.#livro = value;
}

get leitor() {
    return this.#leitor;
}

set leitor(value) {
    this.#leitor = value;
}

get dataEmprestimo() {
    return this.#dataEmprestimo;
}

set dataEmprestimo(value) {
    this.#dataEmprestimo = value;
}

get dataPrevista() {
    return this.#dataPrevista;
}

set dataPrevista(value) {
    this.#dataPrevista = value;
}

get dataDevolucao() {
    return this.#dataDevolucao;
}

set dataDevolucao(value) {
    this.#dataDevolucao = value;
}

get status() {
    return this.#status;
}

set status(value) {
    this.#status = value;
}

constructor(id, livro, leitor, dataEmprestimo, dataPrevista, dataDevolucao, status) {
    super();
    this.#id = id;
    this.#livro = livro;
    this.#leitor = leitor;
    this.#dataEmprestimo = dataEmprestimo;
    this.#dataPrevista = dataPrevista;
    this.#dataDevolucao = dataDevolucao;
    this.#status = status;
}

validar() {
    return (
        this.#livro &&
        this.#livro.id > 0 &&
        this.#leitor &&
        this.#leitor.id > 0 &&
        this.#dataEmprestimo &&
        this.#dataPrevista &&
        this.#status
    );
}

static toMap(row) {

    let emprestimo = new EmprestimoEntity(
        row["id_emprestimo"],
        new LivroEntity(row["id_livro"]),
        new LeitorEntity(row["id_leitor"]),
        row["data_emprestimo"],
        row["data_prevista"],
        row["data_devolucao"],
        row["status"]
    );

    if (row["livro_titulo"] != null) {
        emprestimo.livro.titulo = row["livro_titulo"];
    }

    if (row["leitor_nome"] != null) {
        emprestimo.leitor.nome = row["leitor_nome"];
    }

    return emprestimo;
}

}