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

