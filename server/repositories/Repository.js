import Database from "../database/Database.js";

export default class Repository {

    constructor() {
        this.banco = new Database();
    }

}