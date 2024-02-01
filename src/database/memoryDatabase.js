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

    get getInfo(){
        return Database.infos
    }

    get getValues(){
        return Array.from(Database.infos.values())
    }

    verify(nameOrEmail, password){
        const values = this.getValues

        for(let i of values){
            if(i.name === nameOrEmail || i.email === nameOrEmail){
                if(i.password === password)
                    return { message: 'logged' }

                return { message: 'invalid password'}
            }
        }

        return { message: 'user not found' }
    }
}

module.exports = Database;

