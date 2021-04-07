const wordSearch = (letters, word) => { 

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    //search words vertically
    const transposedMatrix = transpose(letters);
    const verticalJoin = transposedMatrix.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    const backwardMatrix = transpose(letters);
    const backwardsJoin = backwardMatrix.map(ls => ls.join(''))
    for (l of backwardsJoin) {
        if (l.includes(word)) return true
    }

    const diagonalMatrix = diagonal(letters);
    const diagonalJoin = diagonalMatrix.map(ls => ls.join(''))
    for (l of diagonalJoin) {
        if (l.includes(word)) return true
    }

    return false;
}

const transpose = function(matrix) {
    let result = [];
    let temp =[];

    let newRow = matrix[0].length;
    let newCol = matrix.length;

    for(let i = 0 ; i < newRow; i++){
        for(let j = 0; j < newCol; j++){
        temp.push(matrix[j][i]);
        }
        result.push(temp)
        temp = [];
    }
    return result;
};

const backwards = function(matrix) {
    let result = [];
    let temp =[];

    for(let i = 0 ; i < matrix.length; i++){
        for(let j = matrix[0].length - 1 ; j > -1; j--){
            temp.push(matrix[i][j]);
        }
        result.push(temp)
        temp = [];
    }
    return result;
}

const diagonal = function(matrix) {
    let result = [];
    let temp =[];

    let row = matrix.length;
    let col = matrix[0].length;

    for(let i = 0 ; i < row + col - 1; i++){
        let repeat = 0;
        if(i < row){
            repeat = i+1;
        }
        else {
            repeat = row + col - 1 -i;
        }
        for(let j = 0 ; j < repeat; j++){
            if(i < row){
                if(matrix[i-j][j] !== undefined) temp.push(matrix[i-j][j]);
            }
            else {
                if(matrix[row - 1-j][col-repeat+j]!== undefined) temp.push(matrix[row - 1-j][col-repeat+j]);
            }
        }
        result.push(temp);
        temp = [];
    }

    const backwardsMatrix = backwards(matrix);

    row = backwardsMatrix.length;
    col = backwardsMatrix[0].length;

    for(let i = 0 ; i < row + col - 1; i++){
        let repeat = 0;
        if(i < row){
            repeat = i+1;
        }
        else {
            repeat = row + col - 1 -i;
        }
        for(let j = 0 ; j < repeat; j++){
            if(i < row){
                if(backwardsMatrix[i-j][j] !== undefined) temp.push(backwardsMatrix[i-j][j]);
            }
            else {
                if(backwardsMatrix[row - 1-j][col-repeat+j]!== undefined) temp.push(backwardsMatrix[row - 1-j][col-repeat+j]);
            }
        }
        result.push(temp);
        temp = [];
    }

    return result
}

module.exports = wordSearch;
