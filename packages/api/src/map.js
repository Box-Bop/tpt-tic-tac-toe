module.exports = class TicTacToe{
    constructor() {
        this.fields = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
    makeTurn(x, y, type) {
        if (x < 0 || x > 2 || y < 0 || y > 2) {
            throw Error('not a valid coordinate');
        }
    
        if (this.fields[x][y] !== null) {
          throw Error('spot already used');
        }
    
        this.fields[x][y] = type;
      }
    
      getFields() {
        return this.fields;
      }
    };
const playingCoords = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9"
};
