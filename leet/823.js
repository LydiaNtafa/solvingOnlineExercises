var numFactoredBinaryTrees = function(arr) {
    const MOD = 1e9 + 7;
    const n = arr.length;
    const sortedArr = arr.sort((a, b) => a - b);
    const indexMap = new Map(sortedArr.map((val, index) => [val, index]));
    const dp = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (sortedArr[i] % sortedArr[j] === 0) {
                const complement = sortedArr[i] / sortedArr[j];
                if (indexMap.has(complement)) {
                    const k = indexMap.get(complement);
                    dp[i] = (dp[i] + dp[j] * dp[k]) % MOD;
                }
            }
        }
    }
    let result = 0;
    for (let count of dp) {
        result = (result + count) % MOD;
    }

    return result;
}
x = numFactoredBinaryTrees([2,5,10,20])
console.log(x)