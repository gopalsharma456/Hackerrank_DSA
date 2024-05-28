function bonAppetit(bill, k, b) {
    // Write your code here
    let declinedToEat = bill[k]
    let totalBill = 0
    for(let i = 0; i < bill.length; i++){
        totalBill += bill[i]
    }
    let actualSharedBill = totalBill - declinedToEat
    if((actualSharedBill / 2) == b ){
        return console.log(`Bon Appetit`)
    }else{
        return console.log(`${b - (actualSharedBill / 2)}`)
    }
}