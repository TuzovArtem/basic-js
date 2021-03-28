const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let result=0;
  let catEar = '^^';
 
  matrix.forEach(arr=>{
    arr.forEach(item=>{
      if(item === catEar){
        result++;
      }
    })
  })
   return result;
 };