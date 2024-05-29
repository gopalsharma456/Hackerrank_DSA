function angryProfessor(k, a) {
    // Write your code here
    let onTimeArray = []
    let lateArray = []
    for(let i = 0; i< a.length; i++){
        if(a[i] <= 0) {
            onTimeArray.push(a[i])
        }else{
            lateArray.push(a[i])
        }
    }
    if(k <= onTimeArray.length){
        return "NO"
    }
    return "YES"
}