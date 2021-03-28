const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  
   
  if( (typeof sampleActivity ==='string') && parseInt(sampleActivity)>0 && parseInt(sampleActivity) < 15  ) {
  
    let result = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/ (0.693/HALF_LIFE_PERIOD)

   return Math.ceil(result)

 }else{
   return false;
 }

};