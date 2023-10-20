var minCostClimbingStairs = function(stepCosts) {
    const numberOfSteps = stepCosts.length + 1
    let climbingCost = []
    for (let i = 0; i <= numberOfSteps+1; i++) {
        climbingCost[i] = 0;
    }
    for (let i = 3; i <= numberOfSteps; i++) {
        climbingCost[i] = Math.min(stepCosts[i - 3] + climbingCost[i - 2], stepCosts[i - 2] + climbingCost[i - 1])
        console.log("i", i)
        console.log("1", stepCosts[i - 3] + climbingCost[i - 2])
        console.log("2", stepCosts[i - 2] + climbingCost[i - 1])
    }
    return climbingCost[numberOfSteps]
};