var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Cat = /** @class */ (function () {
    function Cat() {
        this.name = 'Whiskers';
    }
    Cat.prototype.eat = function (food) {
        console.info("Ate some", food, '. Mmm!');
    };
    Cat.prototype.sleep = function (hours) {
        console.info('Slept for', hours, 'hours');
    };
    Cat.prototype.meow = function () {
        console.info('Meow');
    };
    return Cat;
}());
// -------------------------------------------------------------
var Zebra = /** @class */ (function () {
    function Zebra() {
    }
    Zebra.prototype.trot = function () {
    };
    return Zebra;
}());
var Poodle = /** @class */ (function () {
    function Poodle() {
    }
    Poodle.prototype.trot = function () {
    };
    return Poodle;
}());
function ambleAround(animal) {
    animal.trot();
}
var zebra = new Zebra;
var poodle = new Poodle;
ambleAround(zebra);
ambleAround(poodle);
//-----------------------------------------------------------
var A = /** @class */ (function () {
    function A() {
        this.x = 1;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
function f(a) { }
f(new A);
f(new B);
var StringDatabase = /** @class */ (function () {
    function StringDatabase() {
        this.state = {};
    }
    StringDatabase.prototype.get = function (key) {
        return key in this.state ? this.state[key] : null;
    };
    StringDatabase.prototype.set = function (key, value) {
        this.state[key] = value;
    };
    StringDatabase.from = function (state) {
        var db = new StringDatabase;
        for (var key in state) {
            db.set(key, state[key]);
        }
        return db;
    };
    return StringDatabase;
}());
function withEZDebug(Class) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.debug = function () {
            var Name = this.constructor.name;
            var value = this.getDebugValue();
            return Name + '(' + JSON.stringify(value) + ')';
        };
        return class_1;
    }(Class));
}
var HardToDebugUser = /** @class */ (function () {
    function HardToDebugUser(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HardToDebugUser.prototype.getDebugValue = function () {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        };
    };
    return HardToDebugUser;
}());
var User = withEZDebug(HardToDebugUser);
var user = new User(3, 'Emma', 'Gluzman');
user.debug(); // 'HardToDebugUser({'id': 3, 'name': 'Emma Gluzman'})
// ------------------------------------------
var APIPayload = /** @class */ (function () {
    function APIPayload() {
    }
    APIPayload.prototype.getValue = function () {
        console.log(11111);
    };
    APIPayload = __decorate([
        serializable
    ], APIPayload);
    return APIPayload;
}());
function serializable(Constructor) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.serialize = function () {
            return this.getValue();
        };
        return class_2;
    }(Constructor));
}
var DecoratedAPIPayload = serializable(APIPayload);
var payload = new DecoratedAPIPayload;
console.log(payload.serialize());
