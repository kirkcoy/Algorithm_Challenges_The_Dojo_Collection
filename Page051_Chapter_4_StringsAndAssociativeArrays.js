//// String: Reverse.
function reverseString(str){
    let wordArray = str.split("");
    for(let i = 0; i < Math.floor(wordArray.length/2); i++){
        console.log(i);
        let temp = wordArray[i];
        wordArray[i] = wordArray[wordArray.length-i-1];
        wordArray[wordArray.length-i-1] = temp;
        console.log(wordArray);
    }
    console.log(wordArray);
    str = wordArray.join("");
    return str;
}
console.log(reverseString("creature"));

// Or.
function reverseString2(str){
    var strArr = [];
    var left = 0;
    var right = str.length - 1;
    while(left < right){
        strArr[left] = str[right];
        strArr[right] = str[left];
        left++;
        right--;
    }
    return strArr.join("")
}
console.log(reverseString2("creature"));

//// Remove Even-Length Strings.
function removeEvenLengths(strArr){
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].length%2 === 0){
            for(let j = i; j < strArr.length - 1; j++){
                strArr[j] = strArr[j+1];
            }
            strArr.length--;
            i--;
        }
    }
    return strArr;
}
console.log(removeEvenLengths(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]));
console.log(removeEvenLengths(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)",".."]));
console.log(removeEvenLengths(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C","."]));
console.log(removeEvenLengths(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C",".."]));

