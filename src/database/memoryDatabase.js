class Database{
    static infos = new Map()

    constructor(){
        this.id = 0;
    }

    updateId(){
        this.id += 1;
    }
}

module.exports = Database;

