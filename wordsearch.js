const transpose = function(matrix) {

    let smallArr = [];
    let bigArr = [];


    for (let row = 0; row < matrix[0].length; row++) {
        for (let el = 0; el < matrix.length; el++) { 
          smallArr.push(matrix[el][row])
        }
        bigArr.push(smallArr);
        smallArr = [];
    }
    return bigArr;
};


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))//what are ls? //join all alements and push into a new 'letters' array. 
    for (l of horizontalJoin) { //in the joined array [AWCFQUAL], [SEINFELD].. looping through each row. 
        if (l.includes(word)) return true //if a row contains the target word, then returns true. 
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    console.log(verticalJoin)

    for ( l of verticalJoin) {
        if (l.includes(word)) return true
    }

    return false;
}
module.exports = wordSearch


/*
Pair Programming - Word Search - Feb 16, 2022
Feb 7 Cohort - Alexandra, Moon, Shraddha
*/