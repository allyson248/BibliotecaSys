import LeitorEntity from "../entities/LeitorEntity.js";
import Repository from "./Repository.js";

export default class LeitorRepository extends Repository{

    constructor() {
        super();
    }

     async listar(){
            let sql = "select * from tb_leitor";
            let rows = await this.banco.ExecutaComando(sql);
            let entidades = [];
            for(let row of rows){
                entidades.push(LeitorEntity.toMap(row));
            }
            return entidades;
           }

              async gravar(entidade){
                let sql = "insert into tb_leitor (nome,cpf,telefone,email,ativo) values (?,?,?,?,?)";
                let valores = [entidade.nome,entidade.cpf,entidade.telefone,entidade.email,entidade.ativo];
                let result = await this.banco.ExecutaComandoLastInserted(sql,valores);
                entidade.id = result;
                return true;
            }

    async obter(id) {
              let sql = "select * from tb_leitor where id_leitor = ?";
      
              let valores = [id];
      
              let rows = await this.banco.ExecutaComando(sql, valores);
      
              if(rows.length > 0) {
                  return LeitorEntity.toMap(rows[0]);
              }
      
              return null;
          }

           async excluir(id) {
        let sql = "delete from tb_leitor where id_leitor = ?";

        let valores = [id];

        let result = await this.banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async atualizar(entidadeAtualizada){
        let sql = "update tb_leitor set nome = ?,cpf = ?,telefone = ?,email = ?,ativo =? where id_leitor = ?";
        let valores =[entidadeAtualizada.nome,entidadeAtualizada.cpf,entidadeAtualizada.telefone,entidadeAtualizada.email,entidadeAtualizada.ativo,entidadeAtualizada.id]
        let result = await this.banco.ExecutaComandoNonQuery(sql,valores);

        return result;
    }

}