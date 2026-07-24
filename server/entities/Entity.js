export default class Entity {


    constructor() {

    }

    //to json generico que pode ser herdado por todas as entidades
   toJSON() {
    const props = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

    let json = {};

    for (let prop of props) {

        if (
            prop !== "constructor" &&
            prop !== "validar" &&
            prop !== "toJSON"
        ) {
            json[prop] = this[prop];
        }

    }

    return json;
}
}