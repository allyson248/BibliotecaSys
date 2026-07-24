import CategoriaEntity from "../entities/CategoriaEntity.js";
import Repository from "./Repository.js";

export default class CategoriaRepository extends Repository {

    constructor() {
        super();
    }

   async listar(){
    let sql = "select * from tb_categoria";
    let rows = await this.banco.ExecutaComando(sql);
    let entidades = [];
    for(let row of rows){
        entidades.push(CategoriaEntity.toMap(row));
    }
    return entidades;
   }

   async gravar(entidade){
    let sql = "insert into tb_categoria (descricao) values (?)";
    let valores = [entidade.descricao];
    let result = await this.banco.ExecutaComandoLastInserted(sql,valores);
    entidade.id = result;
    return true;
   }

    async obter(id) {
        let sql = "select * from tb_categoria where id_categoria = ?";

        let valores = [id];

        let rows = await this.banco.ExecutaComando(sql, valores);

        if(rows.length > 0) {
            return CategoriaEntity.toMap(rows[0]);
        }

        return null;
    }

     async excluir(id) {
        let sql = "delete from tb_categoria where id_categoria = ?";

        let valores = [id];

        let result = await this.banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async atualizar(entidadeAtualizada){
        let sql = "update tb_categoria set descricao = ? where id_categoria = ?";
        let valores =[entidadeAtualizada.descricao,entidadeAtualizada.id]
        let result = await this.banco.ExecutaComandoNonQuery(sql,valores);

        return result;
    }
    
}