
class Set_ {
    has(value: number): boolean {
        //
    }

    // this = Set_의 인스턴스 / Set_을 안쓰고 this 사용하는 이유: 자식클래스에서 add 메소드의 리턴 타입 때문에 오버라이딩할 필요 없기 때문
    add(value: number): this {
        //
    }
}

class MutableSet extends Set_ {
    delete(value: number): boolean {
        //
    }

    // this = MutableSet의 인스턴스
    // add(value: number): this {
        //
    // }
}

let set = new Set_
set.add(1).add(2).add(3)
set.has(2)
set.has(4)

