let pieceName;
pieceName = 'Cavalo';
let lowerPieceName = pieceName.toLowerCase();

switch (lowerPieceName) {
    case "king":
        console.log(pieceName + ' moves one square in any direction');
        break;
    case "queen":
        console.log(pieceName + ' moves diagonally, horizontally, or vertically any number of squares');
        break;
    case "rook":
        console.log(pieceName + ' moves horizontally or vertically any number of squares');
        break;
    case "bishop":
        console.log(pieceName + ' moves diagonally any number of squares');
        break;
    case "knight":
        console.log(pieceName + ' moves in an L shape');
        break;
    case "pawn":
        console.log(pieceName + ' moves vertically forward one square');
        break;
    default:
        console.log("ERROR: There's no chess piece called " + pieceName + ". Please, check the given name for any typos and try again.");
}