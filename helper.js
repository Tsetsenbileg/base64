
const base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";


/**
 * toBinary function converts string to binary
 * @param {String} 
 * @example toBinary("Hello World") => "0100100001100101011011000110110001101111001000000101011101101111011100100110110001100100" 
 * @returns String that converted to binary
 */
const stringToBinary = (str) => {
    let binaries = "";
    for (let i = 0; i < str.length; i++) 
        binaries += charToBinary(str[i]);
    return binaries;
}

const charToBinary = (char) => {
    let binary = char.charCodeAt(0).toString(2);
    return Array(8-binary.length+1).join("0") + binary;
}

/**
 * divideAndFill function divides string to 6 bits if string lenght didn't reach 6 then fills the rest with 0
 * @param {String} str 
 * @returns [] -> array of 6 bits
 */
const divideAndFill = (str) => {
    let divided = [];
    let i = 0;
    while (i < str.length) {
        let temp = str.slice(i, i+6);
        if (temp.length < 6) {
            temp += Array(6-temp.length+1).join("0");
        }
        divided.push(temp);
        i += 6;
    }
    return divided;
}

/**
 * sixToEightBit function converts 6 bits to 8 bits that adding 2 zeros to the start of the string
 * @param {[]} bits 
 * @returns [] -> array of 8 bits
 */
const sixBitToEigthBit = (bits) => {
    let eightBits = [];
    for (let i = 0; i < bits.length; i++) {
        eightBits.push("00" + bits[i]);
    }
    return eightBits;
}

/**
 * toDecimal function converts 8 bits to decimal
 * @param {[]} bits 
 * @returns [] -> array of decimal numbers
 */
const toDecimal = (bits) => {
    let decimal = [];
    for (let i = 0; i < bits.length; i++) {
        decimal.push(binaryToDecimal(bits[i]));
    }
    return decimal;
}

const binaryToDecimal = (binary) =>{
    return parseInt(binary, 2);
}

/**
 * toBase64Character function converts decimal to base64 character
 * @param {[]} decimals 
 * @returns array of base64 characters
 */
const toBase64Character = (decimals) => {
    let base64Characters = "";
    for(let i = 0; i < decimals.length; i++) {
        base64Characters += decimalToBase64Character(decimals[i]);
    }

    return base64Characters;
}

const decimalToBase64Character = (decimal) => {
    return base64[decimal];
}
/**
 * base64CharactersToDecimal function converts base64 characters to decimal
 * @param {String} base64Characters 
 * @returns [] -> array of decimal numbers
 */
const base64ArrayToDecimal = (base64Characters) => {
    let decimal = [];
    for(let i = 0; i < base64Characters.length; i++) {
        decimal.push(base64ToDecimal(base64Characters[i]));
    }
    return decimal;
}   

const base64ToDecimal = (base64Char) => {
    return base64.indexOf(base64Char);
}

/**
 * decimalToBinary function converts decimal to binary array
 * @param {[]} decimal 
 * @returns [] binary array
 */
const decimalToBinary = (decimal) => {

    for(let i = 0; i < decimal.length; i++) {
        decimal[i] = decimalToBinaryHelper(decimal[i]);
    }
    return decimal;
}

const decimalToBinaryHelper = (decimal) => {

    let binary = "";

    while(decimal !== 0) {
        binary += decimal % 2;
        decimal = Math.floor(decimal / 2);
    }

    binary = binary.split("").reverse().join("");
    binary = Array(8-binary.length+1).join("0") + binary;
    return binary;
}
/**
 * removePrefixAndJoin function removes prefix from 8 bits and joins them together
 * @param {[]} bits
 * @returns String that removed prefixes and joined together 
 */
const removePrefixAndJoin = (bits) => {
    let str = "";
    for(let i = 0; i < bits.length; i++) {
        str += bits[i].slice(2);
    }
    return str;
}

/**
 * divideIntoEightBits function divides string bits to 8 bits
 * @param {String} bitString 
 * @returns [] array of 8 bits
 */
const divideIntoEightBits = (bitString) => {
    let divided = [];
    let i = 0;
    while (i < bitString.length) {
        let temp = bitString.slice(i, i+8);
        divided.push(temp);
        i += 8;
    }
    return divided;
}

/**
 * binaryToString function converts binary to string
 * @param {[]} binary 
 * @returns string that converted from binary
 */
const binaryArrayToString = (binary) => {
    let str = "";

    for(let i = 0; i < binary.length; i++) {
        str += binaryToString(binary[i]);
    }
    return str;
}

const binaryToString = (binary) => {
    return String.fromCharCode(parseInt(binary, 2));
}



module.exports = { 
    stringToBinary, 
    divideAndFill, 
    sixBitToEigthBit, 
    toDecimal , 
    toBase64Character , 
    decimalToBinary, 
    removePrefixAndJoin, 
    divideIntoEightBits, 
    binaryToString, 
    base64ArrayToDecimal,
    binaryArrayToString
}
