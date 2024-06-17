function viralAdvertising(n) {
    // Write your code here
    let cumulativeLikes = 0
    let shares = 5
    let likes = 0
    
    for(let i = 1; i <= n; i++){
        likes = Math.floor(shares / 2)
        shares = likes * 3
        cumulativeLikes += likes
        }
    return cumulativeLikes
}