function findTheMedian(nums){
    let averageNumber = nums.length/2
    if (nums.length % 2 === 0){
        return (nums[averageNumber] + nums[averageNumber-1]/2)
    }
    return (nums[Math.floor(averageNumber)])
}

console.log(findTheMedian([4,9,9,2,1,5]))
console.log(findTheMedian([1,5,3,1,5]))
console.log(findTheMedian([10,12,15]))


function matchUp(a,b){
    let count = 0;

    for ( let i = 0; i < a.length; i++){
        let difference = Math.abs(a[i] !== b[i])

        if ( difference <= 2 && a[i] !== b[i]){
            count ++
        }
    }
    return count
}

console.log(matchUp([1,2,3], [2,3,10]))
console.log(matchUp([1,2,3], [2,3,5]))
console.log(matchUp([1,2,3], [2,3,3]))