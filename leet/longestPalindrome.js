function longestPalindrome(s) {
    var len=0;
    var pal=""
    var strLen = s.length-1
    for (var i=0; i<=s.length; i++) {
        for (var j=strLen; j>i; j-- ) {
            var substring = s.substr(i,(j))
            if (substring.length>0) {
                var reversedSub = substring.split("").reverse().join("")
                if (substring === reversedSub) {
                    if(substring.length>len){
                        pal = substring;
                        len = pal.length;
                    }
                } 
            }
        }
    }
    return pal
};

longestPalindrome("cbbd")

module.exports = longestPalindrome;