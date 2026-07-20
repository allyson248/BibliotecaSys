import mysql from "mysql2/promise";

export default class Database {

    constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    async ExecutaComando(sql, valores = []) {
        const [rows] = await this.pool.execute(sql, valores);
        return rows;
    }

    async ExecutaComandoNonQuery(sql, valores = []) {
        const [result] = await this.pool.execute(sql, valores);
        return result.affectedRows > 0;
    }

    async ExecutaComandoLastInserted(sql, valores = []) {
        const [result] = await this.pool.execute(sql, valores);
        return result.insertId;
    }

    
}