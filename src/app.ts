// 클래스의 스태틱과 인스턴스의 차이점 (Difference between the static and instance sides of classes)
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

///////////////////////////////////////////////////////////////

interface ClockConstructor {
    new (hour: number, minute: number)
}

interface ClockInterface {
    tick()
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) {
    }
    tick() {
        console.log('beep beep')
    }
}

// 인터페이스 확장하기 (Extending Interfaces)

interface Shape {
    color: string
}

interface Square extends Shape {
    sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10

//////////////////////////////////////////

interface PenStroke {
    penWidth: number
}

interface Square extends Shape, PenStroke {
    sideLength: number
}

let square2 = {} as Square
square2.color = 'blue'
square2.penWidth = 5.0
square2.sideLength = 10

// 하이브리드 타입 (Hybrid Types)

interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = (function (start: number) { }) as Counter
    counter.interval = 123
    counter.reset = function () {

    }
    return counter
}

let c = getCounter()

c(10)
c.reset()
c.interval = 5.0

console.log('getCounter(): ', c.interval)

// 클래스를 확장한 인터페이스 (Interfaces Extending Classes)

class Control {
    private state: any
}

interface SelectableControl extends Control {
    select(): void
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 클래스를 확장한 인터페이스는 그 클래스의 하위클래스에서만 사용가능

// class Image implements SelectableControl {
//     private state: any = true
//     select() { }
// }

// 함수 (Function)

function add(x, y) {
    return x + y
}

let myAdd = function(x, y) {
    return x + y
}

let z = 100
function addToz(x, y) {
    return x + y + z
}

console.log(addToz(1, 2))

// 함수의 타이핑 (Typing the function)

function add2(x: number, y: number): number {
    return x + y
}
let myAdd2 = function(x: number, y: number): number {
    return x + y
}

let myAdd3: (x: number, y: number) => number =
    function(x: number, y: number) { return x + y }

// 타입의 추론 (Inferring the types)

let myAdd4 = function(x: number, y: number): number { return x + y }
// "contextual typing"
let myAdd5: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y }

// 선택적 매개변수와 기본 매개변수 (Optional and Default Parameter)

function buildName(firstName: string, lastName: string) {
    return firstName + ' ' + lastName
}

let result1 = buildName('Bob', 'adams')

function buildName2(firstName: string, lastName?: string) {
    if(lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}

function buildName3(firstName: string, lastName = 'smith') {
    return firstName + ' ' + lastName
}

let result2 = buildName3('Bob')
let result3 = buildName3('Bob', undefined)
let result4 = buildName3('Bob', 'Adams')

function buildName4(firstName = 'will', lastName: string) {
    return firstName + ' ' + lastName
}

let result5 = buildName4(undefined, 'Adams')







