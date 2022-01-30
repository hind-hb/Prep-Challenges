'use strict';


function square(arr) {
for (const i of arr) {
    Math.pow(arr[i],2);}
}

function fullName(arr) {
  let  output =  arr.map(arr => `${students.firstName} ${students.lastName}`);
    return output;
}

// 3) ---------------------
// 
// Given an array of objects use map to calculate the average of the grades 
// and return an array of the objects with a new property called avg (that represent the average of the grades).
//  

// EX:
// var students = [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20, 50, 13, 11, 2, 45, 60, 29]
// },
// {
// 			firstName: 'Ben',
//      lastNAme: 'Zeller',
// 			gradsList: [20, 10, 11, 11, 2, 5, 3, 2]
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62, 50, 80, 90, 39, 45, 60, 50]
// },
// {
// 			firstName: 'Fred',
//      lastNAme: 'Sagar',
// 			gradsList: [20, 10, 18, 11, 2, 20, 3, 10]
// }
// ]
// results =>
//[
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75
// },
// {
// 			firstName: 'Ben',
//      lastNAme: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5
// },
// {
// 			firstName: 'Fred',
//      lastNAme: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75
// 	}
//]
// -------------

function gradesAvg(arr) {

      var total =0
    for ( let i = 0; i < students.length; i++ ) {
        total = students.gradList[i]+students.gradList[i+1];

      }
      var avg = total / gradList.length;

      arr.push(avg);
    


// 4) ---------------------
//
// Using the previous function result, determine if the student pass or failed,
// and return the array of the object with a new property called result (with Passed or Failed)//  
//
//	note : if his/her avg equal or above 50 the result will be Passed, and Failed if it's less than that
// EX:
// var students = [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75
// },
// {
// 			firstName: 'Ben',
//      lastNAme: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5
// },
// {
// 			firstName: 'Fred',
//      lastNAme: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75
// 	}
//]
// results =>
//[
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75,
//      result: 'Failed'
// },
// {
// 			firstName: 'Ben',
//      lastNAme: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8,
//      result: 'Failed'
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5,
//      result: 'Passed'
// },
// {
// 			firstName: 'Fred',
//      lastNAme: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75,
//      result: 'Failed'
// 	}
//]
// -------------

function studentsResult(arr) {
    let result ;
    if (avg >50)
    {
        result='passed';
    }
    else 
    {result = 'failed'}}

module.exports = { square, fullName, gradesAvg, studentsResult };}