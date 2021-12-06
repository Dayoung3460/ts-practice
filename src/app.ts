type Color = 'Black' | 'White'
type File_ = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8


class Game{
    private pieces = Game.makePieces()
    // static: 클래스 통해 인스턴스 생성할 필요없이, 클래스의 속성 또는 메서드를 사용할 때 사용. 정적 메소드
    private static makePieces() {
        return [
            //Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            // Queens
            // new Queen('White', 'D', 1),
            // new Queen('Black', 'D', 8),
            // Bishop
            // new Bishop('White', 'C', 1),
            // new Bishop('White', 'F', 1),
            // new Bishop('Black', 'C', 8),
            // new Bishop('Black', 'F', 8),
            // ...

        ]
    }
}

class Position  {
    constructor(
        private file: File_,
        private rank: Rank
    ) {
    }

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank = this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}
 // 추상클래스의 인스턴스는 생성할 수 x, 메서드를 추상 클래스에 추가는 가능
abstract class Piece {
    protected position: Position
    constructor(
        private readonly color: Color,
        file: File_,
        rank: Rank
    ) {
        this.position = new Position(file, rank)
    }

    moveTo(position: Position) {
        this.position = position
    }
    abstract canMoveTo(position: Position): boolean
}

class King extends Piece{
    canMoveTo(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
// class Queen extends Piece{}
// class Bishop extends Piece{}
// class Knight extends Piece{}
// class Rook extends Piece{}
// class Pawn extends Piece{}



