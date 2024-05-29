function utopianTree(n) {
    // Write your code here
    let height = 0
    for (let i = 0; i <= n; i++) {
        if(n == 0){
            height = 1
        }else if(n == 1){
            height = 2
        }else if (i % 2 == 0) {
            height += 1
        } else {
            height *= 2
        }
    }
    return height
}