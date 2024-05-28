function pageCount(n, p) {
    // Write your code here
    let countFromStart = Math.floor(p / 2)
    let countFromEnd = Math.floor(n / 2) - Math.floor(p / 2)
    let minCount;
    if(countFromStart < countFromEnd){
        return minCount = countFromStart
    }
    return minCount = countFromEnd
}