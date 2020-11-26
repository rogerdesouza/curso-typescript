// para que a classe seja abstrata é só por o abstract antes
class UserAccount {
    // existem os modificadores private, protected, public e readonly (o padrão é public)
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }

    get getName() {
        return this.name
    }

    set setName(name: string) {
        this.name = name
    }

    get getAge() {
        return this.age
    }

    set setAge(age: number) {
        this.age = age
    }
}

class CharAccount extends UserAccount {
    nickname: string
    level: number

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)
        this.nickname = nickname
        this.level = level
    }
}

const roger = new UserAccount("Roger", 36)
console.log(roger)
console.log(roger.getAge)
roger.logDetails()

const john = new CharAccount("John", 30, "johnmaster", 100)
console.log(john)
console.log(john.getAge)
john.setAge = 31
john.logDetails()