import LivroEntity from "../entities/LivroEntity.js";
import Repository from "./Repository.js";

export default class LivroRepository extends Repository{
    constructor() {
        super();
    }

  async listar() {
    let sql = `select l.*, a.id_autor, a.nome as autor_nome, c.id_categoria, c.descricao as categoria_descricao
    from tb_livro l
    inner join tb_autor a on l.autor_id = a.id_autor
    inner join tb_categoria c on l.categoria_id = c.id_categoria`;

    let rows = await this.banco.ExecutaComando(sql);
    let entidades = [];

    for (let row of rows) {
        entidades.push(LivroEntity.toMap(row));
    }

    return entidades;
}
    async gravar(entidade) {
        let sql = "insert into tb_livro (titulo,isbn, ano, editora, quantidade,capa,autor_id,categoria_id) values (?, ?, ?, ?, ?,?,?,?)";
        let valores = [entidade.titulo, entidade.isbn, entidade.ano, entidade.editora, entidade.quantidade,entidade.capa,entidade.autor.id,entidade.categoria.id];

        let result = await this.banco.ExecutaComandoLastInserted(sql, valores);

        //atribui o id que foi gerado para a entidade
        entidade.id = result;

        return true;
    }

    async excluir(id) {
        let sql = "delete from tb_livro where id_livro = ?";

        let valores = [id];

        let result = await this.banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async atualizar(entidadeAtualizada) {
        let sql = "update tb_livro set titulo = ?, isbn = ?, ano = ?, editora = ?, quantidade = ?,capa = ?,autor_id = ?,categoria_id = ?    where id_livro = ?";

        let valores = [entidadeAtualizada.titulo, entidadeAtualizada.isbn, entidadeAtualizada.ano, entidadeAtualizada.editora,entidadeAtualizada.quantidade,entidadeAtualizada.capa, entidadeAtualizada.autor.id,
        entidadeAtualizada.categoria.id,entidadeAtualizada.id
        ]

        let result = await this.banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async obter(id) {
    let sql = `select l.*, a.id_autor, a.nome as autor_nome, c.id_categoria, c.descricao as categoria_descricao
    from tb_livro l
    inner join tb_autor a on l.autor_id = a.id_autor
    inner join tb_categoria c on l.categoria_id = c.id_categoria
    where l.id_livro = ?`;

    let valores = [id];

    let rows = await this.banco.ExecutaComando(sql, valores);

    if (rows.length > 0) {
        return LivroEntity.toMap(rows[0]);
    }

    return null;
}

}