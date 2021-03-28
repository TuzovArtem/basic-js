const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {

  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
   console.log(options)
  function makeFinalAddition(obj){

     if( obj.addition !== false && !obj.addition && obj.addition !== null  ){
       return ''
     }else{
      let innerAddition=obj.addition;
      for( i = 1; i < obj.additionRepeatTimes; i++){
        
        innerAddition +=   obj.additionSeparator + obj.addition;
      }
      console.log( innerAddition);
      return innerAddition;
    }

  }

function makeStrWithoutSeparator(string){

  let strWithoutSeparator = string + makeFinalAddition(options);

  return strWithoutSeparator
}

   let result=makeStrWithoutSeparator(str);

   for(let i = 1; i < options.repeatTimes; i++){
    
   
     result =result + options.separator +makeStrWithoutSeparator(str) ;  
   }

  return result;

   
};

  