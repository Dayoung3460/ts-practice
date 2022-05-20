interface Animal {
    readonly name: string
    eat(food: string): void
    sleep(hours: number): void
}

interface Feline {
    meow(): void
}

class Cat implements Animal, Feline {
    name = 'Whiskers'
    eat(food: string) {
        console.info("Ate some", food, '. Mmm!')
    }
    sleep(hours: number) {
        console.info('Slept for', hours, 'hours')
    }
    meow() {
        console.info('Meow')
    }
}
// -------------------------------------------------------------
class Zebra {
    trot() {

    }
}

class Poodle {
    trot() {

    }
}

function ambleAround(animal: Zebra) {
    animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)
ambleAround(poodle)
//-----------------------------------------------------------
class A {
    private x = 1
}
class B extends A {}
function f(a: A) {}
f(new A)
f(new B)
// f({x: 1})
//----------------------------------------------------

type State = {
    [key: string]: string
}

class StringDatabase {
    state: State = {}
    get(key: string): string | null {
        return key in this.state ? this.state[key]: null
    }
    set(key: string, value: string): void {
        this.state[key] = value
    }
    static from(state: State) {
        let db = new StringDatabase
        for (let key in state) {
            db.set(key, state[key])
        }
        return db
    }
}

interface StringDatabase {
    state: State
    get(key: string): string | null
    set(key: string, value: string): void
}

interface StringDatabaseConstructor {
    new(): StringDatabase
    from(state: State): StringDatabase
}

//----------------------------------------------------------

type ClassConstructor<T> = new (...args: any[]) => T

function withEZDebug<C extends ClassConstructor<
    { getDebugValue(): Object }
    >>(Class: C) {
    return class extends Class {
        debug() {
            let Name = this.constructor.name
            let value = this.getDebugValue()
            return Name + '(' + JSON.stringify(value) + ')'
        }
    }
}

class HardToDebugUser {
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string
    ) {}
    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        }
    }
}

let User = withEZDebug(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
user.debug() // 'HardToDebugUser({'id': 3, 'name': 'Emma Gluzman'})

// ------------------------------------------

@serializable
class APIPayload {
    getValue(): Payload {
        console.log(11111)
    }
}

type ClassConstructor2<T> = new (...args: any[]) => T
function serializable<
    T extends ClassConstructor2<{
    getValue(): Payload
    }>
>(Constructor: T) {
    return class extends Constructor {
        serialize() {
            return this.getValue()
        }
    }
}

let DecoratedAPIPayload = serializable(APIPayload)
let payload = new DecoratedAPIPayload
console.log(payload.serialize())

//-------------------------------------------------

class MessageQueue {
    // if constructor is declared as private, instance can not be created by 'new' and the class can not be extended as well
    private constructor(private message: string[]) {}
    static create(messages: string[]) {
        return new MessageQueue(messages)
    }
}

MessageQueue.create([])
//-------------------------------------------


