// function longestPalindrome(s) {
//     var len=0;
//     var pal=""
//     var strLen = s.length-1
//     for (var i=0; i<=s.length; i++) {
//         for (var j=strLen; j>i; j-- ) {
//             var substring = s.substr(i,(j))
//             if (substring.length>0) {
//                 var reversedSub = substring.split("").reverse().join("")
//                 if (substring === reversedSub) {
//                     if(substring.length>len){
//                         pal = substring;
//                         len = pal.length;
//                     }
//                 } 
//             }
//         }
//     }
//     return pal
// }; PASSES BUT IT TAKES TOO LONG - NOT OPTIMISED

// MORE OPTIMISED SOLUTION, BUT STILL NOT THE BEST
function longestPalindrome(inputString) {
    if (inputString.length<=1 || inputString===inputString.split("").reverse().join("")) {
        return inputString
    }
    var maxLenght=0;
    var palindrome="";
    let iterableString = "";
    let lastOccurance = 0;
    let substring = "";
    let reversedSub = "";
    for (var i=0; i<inputString.length; i++) {
        iterableString = inputString.slice(i);
        lastOccurance = iterableString.lastIndexOf(inputString[i])
        while (lastOccurance!=0) {
            substring = iterableString.slice(0,lastOccurance+1)
            reversedSub = substring.split("").reverse().join("")
            if (substring === reversedSub) {
                if(substring.length>maxLenght){
                    palindrome = substring;
                    maxLenght = palindrome.length;
                }
            }
            iterableString = substring.slice(0,-1);
            lastOccurance = iterableString.lastIndexOf(inputString[i])
        }
    } 
    if (palindrome == "" ) {
        return inputString[0]
    }
    return palindrome
};

module.exports = longestPalindrome;