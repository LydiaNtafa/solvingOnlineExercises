const longestPalindrome = require('./longestPalindrome')

describe('longestPalindrome', () =>{
    it("returns bab", () => {
        expect(longestPalindrome("babad")).toBe("bab")
    })
    it("returns bb", () => {
        expect(longestPalindrome("cbbd")).toBe("bb")
    })
})