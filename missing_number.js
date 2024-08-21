
function missingNumber(arr){
    let newArr = arr.sort((a,b) => a - b)
    
    for(let i = 0; i < newArr.length; i++){
        let expectedValue = newArr[i] + 1
        let nextValue = newArr[i + 1]
        
        if(expectedValue != nextValue){
            if(i == newArr.length - 1){
                return `No Missing Number in array`
            }
            return `Missing Number: ${expectedValue}`
        }
    }
    return `No Missing Number in array`
} 
console.log(missingNumber([1,2,5,4,6,7,3,9]))
console.log(missingNumber([1,2,5,4,6,7,3]))