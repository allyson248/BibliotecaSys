import AutorEntity from "../entities/AutorEntity.js";
import Repository from "./Repository.js";

export default class AutorRepository extends Repository{
    
    constructor() {
        super();
    }

     async listar(){
        let sql = "select * from tb_autor";
        let rows = await this.banco.ExecutaComando(sql);
        let entidades = [];
        for(let row of rows){
            entidades.push(AutorEntity.toMap(row));
        }
        return entidades;
       }

       async gravar(entidade){
    let sql = "insert into tb_autor (nome,nacionalidade) values (?,?)";
    let valores = [entidade.nome,entidade.nacionalidade];
    let result = await this.banco.ExecutaComandoLastInserted(sql,valores);
    entidade.id = result;
    return true;
   }

    async obter(id) {
           let sql = "select * from tb_autor where id_autor = ?";
   
           let valores = [id];
   
           let rows = await this.banco.ExecutaComando(sql, valores);
   
           if(rows.length > 0) {
               return AutorEntity.toMap(rows[0]);
           }
   
           return null;
       }

        async excluir(id) {
        let sql = "delete from tb_autor where id_autor = ?";

        let valores = [id];

        let result = await this.banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    
    async atualizar(entidadeAtualizada){
        let sql = "update tb_autor set nome = ?,nacionalidade = ? where id_autor = ?";
        let valores =[entidadeAtualizada.nome,entidadeAtualizada.nacionalidade,entidadeAtualizada.id]
        let result = await this.banco.ExecutaComandoNonQuery(sql,valores);

        return result;
    }

} 