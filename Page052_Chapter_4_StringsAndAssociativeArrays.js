//// Parens Valid.
function parensValid(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] == "("){
            arr.push(str[i]);
        } else if(str[i] == ")"){
            if(arr.length === 0){
                return false;
            } else {
                arr.pop();
            }
        }
    }
    if(arr.length === 0){
        return true;
    } else { 
        return false;
    }
}
console.log(parensValid("Y(3(p)p(3)r)s"));
console.log(parensValid("N(0(p)3"));
console.log(parensValid("N(0)t)0(k"));

//// Braces Valid.
function bracesValid(braces){
    let arr = [];
    let dictBraces = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    for(let i = 0; i < braces.length; i++){
       
        if(braces[i] == ")" || braces[i] == "]" || braces[i] == "}"){
            if(arr[arr.length-1] == dictBraces[braces[i]]){
                arr.pop();
            } else {
                return false;
            }
        } else if(braces[i] == "(" || braces[i] == "[" || braces[i] == "{"){
            arr.push(braces[i]);
        }
    }
    if (arr.length === 0) {
        return true
    } else { 
        return false; 
    }
}
console.log(bracesValid("{(A})"));
console.log(bracesValid("{{(B)}}["));
console.log(bracesValid("}{(C)}}["));
console.log(bracesValid("{{(D)}}[D]"));

//// String: Is Palindrome.
function strPalindrome(str){
    for(let i = 0; i < Math.floor(str.length/2); i++){
        if(str[i] != str[str.length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(strPalindrome("a x a"));
console.log(strPalindrome("racecar"));
console.log(strPalindrome("Dud"));
console.log(strPalindrome("oho!"));

// Second: Ignore white space, capitalization and punctuation.
function strPalindrome2(str){
    let nextRightStr = 1;
    for(let i = 0; i < Math.floor(str.length/2); i++){
        switch(str[i]){
            case " ":
            case "!":
            case "-":
            case ".":
            case "_":
                continue;
            default: 
                switch(str[str.length-nextRightStr-i]){
                    case " ":
                    case "!":
                    case "-":
                    case ".":
                    case "_":
                        nextRightStr++;
                        i--;
                        continue;
                    default:
                        if(str[i].toLowerCase() != str[str.length-nextRightStr-i].toLowerCase()){
                            return false;
                        }
                }
        }
    }
    return true;
}
console.log(strPalindrome2("a xs a"));
console.log(strPalindrome2("racecars"));
console.log(strPalindrome2("Du d"));
console.log(strPalindrome2("oho!"));

// Or

function strPalindrome2(str){
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] == " " || str[left] == "!" || str[left] == "-" || str[left] == "." || str[left] == "_"){
            left++;
            continue;
        } else {
            if(str[right] == " " || str[right] == "!" || str[right] == "-" || str[right] == "." || str[right] == "_"){
                right--; 
                continue;
            } else {
                if(str[left].toLowerCase() != str[right-left].toLowerCase()){
                    return false;
                } else {
                    right--;
                    left++;
                }
            }
        }
    }
    return true;
}
console.log(strPalindrome2("a xs a"));
console.log(strPalindrome2("raScecUar"));
console.log(strPalindrome2("Du d"));
console.log(strPalindrome2("oho!"));


