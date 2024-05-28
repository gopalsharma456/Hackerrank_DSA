function breakingRecords(scores) {
    // Write your code here
    let lowScoreCount = 0
    let highScoreCount = 0
    let lowestScore = scores[0]
    let highestScore = scores[0]
    let scoreArray = []

    for (let i = 1; i < scores.length; i++) {
        if (lowestScore > scores[i]) {
            lowestScore = scores[i]
            lowScoreCount++
        } 
   } 
   for (let i = 1; i < scores.length; i++) {
        
        if (highestScore < scores[i]) {
            highestScore = scores[i]
            highScoreCount++
        }
    }
    scoreArray.push(highScoreCount)
    scoreArray.push(lowScoreCount)
    return scoreArray
}