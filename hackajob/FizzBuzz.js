var FizzBuzz = function(N,M) {
    array = []
    for (let i=N; i<=M; i++){
        if (i%15 == 0) {
            array.push("FizzBuzz")
        } else if (i%5 == 0) {
            array.push("Buzz")
        } else if (i%3 == 0) {
            array.push("Fizz")
        } else {
            array.push(i)
        }
    }
    return array.join(",")
};