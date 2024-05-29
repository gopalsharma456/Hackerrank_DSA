function beautifulDays(i, j, k) {
    // Write your code here
    let beautifulDaysCount = 0
    let days = []
    for(let a = i; a <= j; a++){
        days.push(i++)
    }
    for(let p = 0; p < days.length; p++){
        let rev = Number(days[p].toString().split("").reverse().join(""));
        if(Number.isInteger((days[p] - rev) / k)){
            beautifulDaysCount++
    }
    }
    return beautifulDaysCount
}