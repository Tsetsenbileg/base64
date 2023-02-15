const helper = require('./helper.js');

/**
 * encoder function takes a string and returns a base64 encoded string
 * @param {String} str
 * @returns {String} base64 encoded string 
 */
const encoder = (str) =>  {

    //* convert string to binary then returning value divided to 6 bits and filled with 0 if needed
    const dividedArray = helper.divideAndFill(helper.stringToBinary(str));
    //* convert 6 bits to 8 bits and returning value converted to decimal
    const decimalArray = helper.toDecimal(helper.sixBitToEigthBit(dividedArray));
    //* convert decimal to base64 character
    return toBase64Character = helper.toBase64Character(decimalArray);
}

/**
 * decoder function takes a base64 encoded string and returns a decoded string
 * @param {String} str 
 * @returns {String} base64 decoded string
 */
const decoder = (str) => {

    //* convert base64 character to decimal array then returning array of 8 bits
    let binaryArray = helper.decimalToBinary(helper.base64ArrayToDecimal(str));

    //* convert 8 bits to 6 bits and retuning array of 8 bits
    let dividedBitsArray = helper.divideIntoEightBits(helper.removePrefixAndJoin(binaryArray));

    //* convert 8 bits to character and returning string
    return helper.binaryArrayToString(dividedBits);
   
}
