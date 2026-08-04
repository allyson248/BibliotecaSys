import EmprestimoEntity from "../entities/EmprestimoEntity.js";
import Repository from "./Repository.js";

export default class EmprestimoRepository extends Repository {
    constructor() {
        super();
    }

    async listar() {
        let sql = `select e.*, l.id_livro, l.titulo as livro_titulo, r.id_leitor, r.nome as leitor_nome
        from tb_emprestimo e
        inner join tb_livro l on e.livro_id = l.id_livro
        inner join tb_leitor r on e.leitor_id = r.id_leitor`;

        let rows = await this.banco.ExecutaComando(sql);
        let entidades = [];

        for (let row of rows) {
            entidades.push(EmprestimoEntity.toMap(row));
        }

        return entidades;
    }

    async gravar(entidade) {
        let sql = "insert into tb_emprestimo (livro_id, leitor_id, data_emprestimo, data_prevista, data_devolucao, status) values (?, ?, ?, ?, ?, ?)";
        let valores = [entidade.livro.id, entidade.leitor.id, entidade.dataEmprestimo, entidade.dataPrevista, entidade.dataDevolucao, entidade.status];

        let result = await this.banco.ExecutaComandoLastInserted(sql, valores);

        //atribui o id que foi gerado para a entidade
        entidade.id = result;

        return true;
    }

    async excluir(id) {
        let sql = "delete from tb_emprestimo where id_emprestimo = ?";

        let valores = [id];

        let result = await this.banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async atualizar(entidadeAtualizada) {
        let sql = "update tb_emprestimo set livro_id = ?, leitor_id = ?, data_emprestimo = ?, data_prevista = ?, data_devolucao = ?, status = ? where id_emprestimo = ?";

        let valores = [
            entidadeAtualizada.livro.id,
            entidadeAtualizada.leitor.id,
            entidadeAtualizada.dataEmprestimo,
            entidadeAtualizada.dataPrevista,
            entidadeAtualizada.dataDevolucao,
            entidadeAtualizada.status,
            entidadeAtualizada.id
        ]

        let result = await this.banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async obter(id) {
        let sql = `select e.*, l.id_livro, l.titulo as livro_titulo, r.id_leitor, r.nome as leitor_nome
        from tb_emprestimo e
        inner join tb_livro l on e.livro_id = l.id_livro
        inner join tb_leitor r on e.leitor_id = r.id_leitor
        where e.id_emprestimo = ?`;

        let valores = [id];

        let rows = await this.banco.ExecutaComando(sql, valores);

        if (rows.length > 0) {
            return EmprestimoEntity.toMap(rows[0]);
        }

        return null;
    }

}