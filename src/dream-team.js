const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result=[]
 if( Array.isArray(members) ){
   members.forEach(name=>{
     if((typeof name) =='string'){
       name = name.trim().split('')
       name.forEach( (letter,item)=>{
         if(item == 0){
           result.push(letter.toUpperCase())
         }
       })
 
     }
 
   })
 }else{
   return false
 }

  return result.sort().join('');
 };