const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
  
  getLength() {
    return chain.length;
  },
  addLink(value) {
    if ( value === undefined ){
      this.chain.push(`()`);
    }else{
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
      if( !Number.isInteger(position) ||  this.chain[position] == undefined || !position){
      this.chain=[];
      throw  new Error( 'Error' );
      }else{
        this.chain.splice(position-1,1);
        return this;
      }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {

    let result = this.chain.join('~~');
    this.chain = []
   return result;
  }
};

module.exports = chainMaker;
