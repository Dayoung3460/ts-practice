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
var Game = /** @class */ (function () {
    function Game() {
        this.pieces = Game.makePieces();
    }
    // static: 클래스 통해 인스턴스 생성할 필요없이, 클래스의 속성 또는 메서드를 사용할 때 사용. 정적 메소드
    Game.makePieces = function () {
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
        ];
    };
    return Game;
}());
var Position = /** @class */ (function () {
    function Position(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    Position.prototype.distanceFrom = function (position) {
        return {
            rank: Math.abs(position.rank = this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        };
    };
    return Position;
}());
// 추상클래스의 인스턴스는 생성할 수 x, 메서드를 추상 클래스에 추가는 가능
var Piece = /** @class */ (function () {
    function Piece(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    Piece.prototype.moveTo = function (position) {
        this.position = position;
    };
    return Piece;
}());
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    King.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
    return King;
}(Piece));
// class Queen extends Piece{}
// class Bishop extends Piece{}
// class Knight extends Piece{}
// class Rook extends Piece{}
// class Pawn extends Piece{}
