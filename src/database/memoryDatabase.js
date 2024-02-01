class Database{
    static infos = new Map()

    constructor(){
        this.id = 0;
    }

    updateId(){
        this.id += 1;
    }

    set create(obj){
        Database.infos.set(this.id, obj)
        this.updateId()
    }

    get getDatabase(){
        return Database.infos
    }
}

module.exports = Database;

