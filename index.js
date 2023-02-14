const helper = require('./helper.js');

/**
 * encoder function takes a string and returns a base64 encoded string
 * @param {String} str
 * @returns {String} base64 encoded string 
 */
const encoder = (str) =>  {

    //* convert string to binary then returning value divided to 6 bits and filled with 0 if needed
    const divided = helper.divideAndFill(helper.stringToBinary(str));

    //* convert 6 bits to 8 bits and returning value converted to decimal
    const decimal = helper.toDecimal(helper.sixBitToEigthBit(divided));

    //* convert decimal to base64 character
    return toBase64Character = helper.toBase64Character(decimal);
}

const decoder = (str) => {

    let decimal = helper.base64CharactersToDecimal(str);

    let binary = helper.decimalToBinary(decimal);

    let realBinary = helper.removePrefixAndJoin(binary);

    let dividedBits = helper.divideIntoEightBits(realBinary);

    let decoded = helper.binaryToString(dividedBits);
    return decoded;
}


console.log(encoder("ABCD"));
console.log(decoder("QUJDRA"));