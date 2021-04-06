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
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.tick = function () {
        console.log('beep beep');
    };
    return Clock;
}());
var square = {};
square.color = 'blue';
square.sideLength = 10;
var square2 = {};
square2.color = 'blue';
square2.penWidth = 5.0;
square2.sideLength = 10;
function getCounter() {
    var counter = (function (start) { });
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log('getCounter(): ', c.interval);
// 클래스를 확장한 인터페이스 (Interfaces Extending Classes)
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// 클래스를 확장한 인터페이스는 그 클래스의 하위클래스에서만 사용가능
// class Image implements SelectableControl {
//     private state: any = true
//     select() { }
// }
// 함수 (Function)
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var z = 100;
function addToz(x, y) {
    return x + y + z;
}
console.log(addToz(1, 2));
// 함수의 타이핑 (Typing the function)
function add2(x, y) {
    return x + y;
}
var myAdd2 = function (x, y) {
    return x + y;
};
var myAdd3 = function (x, y) { return x + y; };
// 타입의 추론 (Inferring the types)
var myAdd4 = function (x, y) { return x + y; };
// "contextual typing"
var myAdd5 = function (x, y) { return x + y; };
// 선택적 매개변수와 기본 매개변수 (Optional and Default Parameter)
function buildName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
var result1 = buildName('Bob', 'adams');
function buildName2(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = 'smith'; }
    return firstName + ' ' + lastName;
}
var result2 = buildName3('Bob');
var result3 = buildName3('Bob', undefined);
var result4 = buildName3('Bob', 'Adams');
function buildName4(firstName, lastName) {
    if (firstName === void 0) { firstName = 'will'; }
    return firstName + ' ' + lastName;
}
var result5 = buildName4(undefined, 'Adams');
