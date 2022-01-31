'use strict';

const { fullName } = require("./challenges-11");



const oddFiltration = (arr) => {
    return arr.filter(num => num%2==1);
}



const cvsFiltration = (arr) => {
    let newArr = 
    arr.filter(cv =>  ((cv.yearsOfExperience > 4)&&(cv.firstName != null)&&(cv.LastName != null)) );
    return newArr.map(cv => {return {fullName: `${cv.firstName} ${cv.LastName}`, tech: cv.tech}} );
}



const vowelsFiltration = (arr) => {
    return arr.filter(word =>
 (word.indexOf("a")==-1)&&(word.indexOf("e")==-1)&&(word.indexOf("i")==-1)&&(word.indexOf("o")==-1)&&(word.indexOf("u")==-1) );
    
} 



const skillComparison = (arr1, arr2) => {
    let newArr1 = arr1.filter(i => !arr2.includes(i) );
    let newArr2 = arr2.filter(i => !arr1.includes(i) );
    return newArr1.concat(newArr2);
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

