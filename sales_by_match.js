function sockMerchant(n, ar) {
    // Write your code here
    let sockPairCount = 0
    let newArr = ar.sort((a, b) => a - b);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == newArr[i + 1]) {
            sockPairCount++
        i++
        }
    }
    return sockPairCount
}