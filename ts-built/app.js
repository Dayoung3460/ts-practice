"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Cat {
    constructor() {
        this.name = 'Whiskers';
    }
    eat(food) {
        console.info("Ate some", food, '. Mmm!');
    }
    sleep(hours) {
        console.info('Slept for', hours, 'hours');
    }
    meow() {
        console.info('Meow');
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
function ambleAround(animal) {
    animal.trot();
}
let zebra = new Zebra;
let poodle = new Poodle;
ambleAround(zebra);
ambleAround(poodle);
//-----------------------------------------------------------
class A {
    constructor() {
        this.x = 1;
    }
}
class B extends A {
}
function f(a) { }
f(new A);
f(new B);
class StringDatabase {
    constructor() {
        this.state = {};
    }
    get(key) {
        return key in this.state ? this.state[key] : null;
    }
    set(key, value) {
        this.state[key] = value;
    }
    static from(state) {
        let db = new StringDatabase;
        for (let key in state) {
            db.set(key, state[key]);
        }
        return db;
    }
}
function withEZDebug(Class) {
    return class extends Class {
        debug() {
            let Name = this.constructor.name;
            let value = this.getDebugValue();
            return Name + '(' + JSON.stringify(value) + ')';
        }
    };
}
class HardToDebugUser {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        };
    }
}
let User = withEZDebug(HardToDebugUser);
let user = new User(3, 'Emma', 'Gluzman');
user.debug(); // 'HardToDebugUser({'id': 3, 'name': 'Emma Gluzman'})
// ------------------------------------------
let APIPayload = class APIPayload {
    getValue() {
    }
};
APIPayload = __decorate([
    serializable
], APIPayload);
function serializable(Constructor) {
    return class extends Constructor {
        serialize() {
            return this.getValue();
        }
    };
}
let DecoratedAPIPayload = serializable(APIPayload);
let payload = new DecoratedAPIPayload;
payload.serialize();
//-------------------------------------------------
class MessageQueue {
    // if constructor is declared as private, instance can not be created by 'new' and the class can not be extended as well
    constructor(message) {
        this.message = message;
    }
    static create(messages) {
        return new MessageQueue(messages);
    }
}
MessageQueue.create([]);
class BalletFlat {
    constructor() {
        this.purpose = 'dancing';
    }
}
class Boot {
    constructor() {
        this.purpose = 'woodcutting';
    }
}
class Sneaker {
    constructor() {
        this.purpose = 'walking';
    }
}
let Shoe = {
    // union type: like js 'or' operator(||)
    create(type) {
        switch (type) {
            case 'balletFlat': return new BalletFlat;
            case 'boot': return new Boot;
            case 'sneaker': return new Sneaker;
        }
    }
};
Shoe.create('boot');
//--------------------------------------------
//builder pattern
class RequestBuilder {
    constructor() {
        this.data = null;
        this.method = null;
        this.url = null;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    // this: instance of RequestBuilder
    setURL(url) {
        this.url = url;
        return this;
    }
    send() {
        //
    }
}
new RequestBuilder()
    .setURL('/users')
    .setMethod('get')
    .setData({ firstName: 'Anna' })
    .send();
//# sourceMappingURL=app.js.map